---
title: "SQL - Different Abstraction Levels (& how I came to love SQLDelight)"
categories:
  - JVM
  - Database
tags:
  - kotlin
  - orm
---
# SQL - different abstraction levels and how I came to love SQLDelight

In this blog (also available at [londogard](https://londogard.com/blog/5)) I'll cover a few different abstraction levels of database access, focusing purely on SQL and not NoSQL / Reddis or anything like that. The purpose is to share the knowledge that there exist these types of abstractions and they do exist in all or at least most of the popular languages.

I'll try to move from "raw SQL" to the modern "Object-Relational Mapping"-style, a.k.a ORM. 

In the end I wish to make a short piece leaving out a lot of details but maintaining a feel of each style and some pros/cons. I bet you already guessed my preferred approach straight from the title :wink:.

### How to interact with a SQL Database from a programming language

Structured Query Language (SQL) is as the name, once spelled out, a Domain Specific Language (DSL) just like regex. It's basically a programming language written to facilitate and simplify the experience with the underlying engine. By using a DSL you gain capabilities that would be natural to integrate with most languages, and it also makes the engine do the same with the same code across languages. 

I think that Regex and SQL are the most famous DSLs and for good reason, having regex work (almost) the same across languages simplifies the guides and the same applies to SQL.

Going forward let's see how we communicate with a SQL-db from a programming language like Java using their famous jdbc (Java Database Connectivity) which is the driver that communicates with the db.

```java
try {
      System.out.println("Connecting to database...");
      conn = DriverManager.getConnection(DB_URL,USER,PASS);

      //STEP 4: Execute a query
      System.out.println("Creating statement...");
      stmt = conn.createStatement();
      String sql;
      sql = "SELECT id, first, last, age FROM Employees";
      ResultSet rs = stmt.executeQuery(sql);

      //STEP 5: Extract data from result set
      while(rs.next()){
         //Retrieve by column name
         int id  = rs.getInt("id");
         int age = rs.getInt("age");
         String first = rs.getString("first");
         String last = rs.getString("last");

         //Display values
         System.out.print("ID: " + id);
         System.out.print(", Age: " + age);
         System.out.print(", First: " + first);
         System.out.println(", Last: " + last);
      }
      //STEP 6: Clean-up environment
      rs.close();
      stmt.close();
      conn.close();
   } catch (SQLException se) {
    ....
```

Not very convenient right? Personally I think this looks horrible, it's filled with horrible getters & setters like we're stuck in the Middle Ages or something.
Personally my mind directly flows to serialization and how that must work somehow with databases, and that's right - we can move into the future today! 

### Moving one abstraction level up

Welcome [Room](https://developer.android.com/topic/libraries/architecture/room) & [slick](http://scala-slick.org/) (two libraries I've experience with) to the room!
Both of these libraries provide a type of serialization to classes and more convenient syntax to write the code. The first one heavily leans on annotation to make it work while the other one uses a more slick approach of "copying" the way you work with the standard Scala Collections (`filter, map, flatMap, reduce` etc). 

I'd say that both do count as ORMs but they're still not as abstract as other solutions such as _peewee_ which we'll discuss later. Let's get into Room and how it works. First you define entities like a class with the added annotation `@Entity` and then you define a _Data Access Object_ (DAO) to interact with the table / object. The DAO is where you define your queries, let's take a look.

```kotlin
@Dao
interface UserDao {
    @Query("SELECT * FROM user")
    fun getAll(): List<User>

    @Query("SELECT * FROM user WHERE uid IN (:userIds)")
    fun loadAllByIds(userIds: IntArray): List<User>
...
}
```

In my opinion this approach strikes a really good balance between simple-to-use but still powerful and very configurable because you still use SQL, a bonus here is that it's safe from SQL-injection as you're making use of so-called `prepared-statements` ([wikipedia](https://en.wikipedia.org/wiki/Prepared_statement)). The biggest drawback is that it's hard to write easy-to-read SQL in the annotation and for the annotation-haters we've a lot of annotations (which often slows down the compile-time noticeably among other things).

Moving on we've `slick` which is also a really cool approach! `slick` allows you to this but instead you write your queries in something that feels like using the normal Scala Collection library. This allows you to use `map`, `filter`, `reduce` etc to create queries, and even `for-comprehension`. Let's see!

```scala
// Read all coffees and print them to the console
println("Coffees:")
db.run(coffees.result).map(_.foreach {
  case (name, supID, price, sales, total) =>
    println("  " + name + "\t" + supID + "\t" + price + "\t" + sales + "\t" + total)
})

// Read coffee with price lower than 9 and join with matching supplier using for-comprehension
val q2 = for {
  c <- coffees if c.price < 9.0
  s <- suppliers if s.id === c.supID
} yield (c.name, s.name)

// A find using filter
def find(id: Int) = db.run(
  users
    .filter(_.id === id)
    .result.headOption
  )
```

Pretty slick right?

### Moving another level up (Python + Peewee)

Ok, maybe it's not actually moving one level up from `slick` but I'd say it's still a little bit further away from raw SQL as we make more use of objects, in the case of `slick` you can more easily see the generated SQL-code. Let's take a look at [peewee](http://docs.peewee-orm.com/en/latest/index.html) which supports most databases (sqlite, mysql, postgresql and cockroachdb).

So where do we begin? Create the database and tables! 
It's done by initiating a database and then creating different classes which each maps to their own tables automatically.

```kotlin
db = SqliteDatabase('people.db') # create the db

class Person(Model):
    name = CharField()
    birthday = DateField()

    class Meta:
        database = db # This model uses the "people.db" database.

class Pet(Model):
    owner = ForeignKeyField(Person, backref='pets')
    name = CharField()
    animal_type = CharField()

    class Meta:
        database = db # this model uses the "people.db" database
```

And how would one create entries and then query them? It's simply done through object creation as in the following examples.

``` python
uncle_bob = Person(name='Bob', birthday=date(1960, 1, 15))
uncle_bob.save()
# Sometimes the class already has a "create method" as in
Person.create(name='Sarah', birthday=date(1980, 10, 20))

# And create a pet which belongs to uncle_bob
bob_dog = Pet.create(owner=uncle_bob, name='Doggy', animal_type='dog')
```

And to query the tables we also make use of the object fully, as in the following small example.

```python
bobby = Person.select().where(Person.name == 'Bob').get()
# or all persons!
for person in Person.select():
    print(person.name)
```

Now we've gone through the different abstraction layers that you usually see available in most languages. Going forward I'd like to show SQLDelight which turns the abstraction a little bit upside down.

### SQLDelight: Abstraction level left to the right

In SQLDelight I'd say we get the ideal balance of abstraction and configurability. We deal with raw SQL which is both a pro & con, people will need to know SQL unlike in a abstracted ORM but you also get the full potential and it's really simple to do complex joins (which is really messy in ORMs).

I was delighted at how simple it was to use from my Kotlin code while also providing a simple way to write my DB-interactions. No confusion and there's a million guides out there showing how you write SQL code for complex joins if you ever need a hand.

Let's begin with how you define a table and queries, through a so-called `.sq`-file.

``` sqlite
-- .sq-file

CREATE TABLE person (
  name TEXT NOT NULL,
  birthday DATE NOT NULL
);
-- You can actually also insert a Person directly in this file if you'd like using the normal SQL insert statement.

selectAll:
SELECT *
FROM person;

insert:
INSERT INTO person(name, birthday)
VALUES (?, ?);

insertPerson:
INSERT INTO person(name, birthday)
VALUES ?;
```

For those that don't know SQL this does the following

1. Define the table
2. Create queries on the table
   1. These queries makes use of the custom format `methodName:` and then define the method using the SQL code beneath until it hits end `; `.

Now we have some SQL code defined in a  `.sq`-file, how do we actually use this from our Kotlin-code?
We build the project, while building the project the code is generated to our build project with the Kotlin-code. It'll provide

- Data Classes (like structs / objects / case classes)
- Queries for each table

And on top of this you'll have _full_ typing, which is pretty damn awesome! Let's take a look at how we'd use this from Kotlin.

```kotlin
// Not optimal code, should use injection or something in reality for the db.
val database = Database(driver)

val personQueries: PersonQueries = database.personQueries

println(personQueries.selectAll().executeAsList())
// Prints []

personQueries.insert(name = "Bob", birthday = Date(2010, 1, 10))
println(personQueries.selectAll().executeAsList())
// Prints [Person.Impl("Bob", Date(2010, 1, 10))]

val person = Person("Ronald McDonald", Date(2020, 1, 5))
personQueries.insertPerson(person)
println(personQueries.selectAll().executeAsList())
// Prints [Person.Impl("Bob", Date(2010, 1, 10)), Person.Impl("Ronald McDonald", Date(2020, 1, 5))]
```

Let me just say, I'm amazed about this kind of reverse thinking of generating code from SQL. It gives us the convenience of a ORM but the flexibility of raw SQL :happy:. 

### Comparison Table

| Database     | Simplicity | Requires SQL knowledge | Configurability (complex queries etc) | Score (5) | Comment                                                      |
| ------------ | ---------- | ---------------------- | ------------------------------------- | --------- | ------------------------------------------------------------ |
| JDBC         | I          | III                    | III                                   | 2         | To much overhead                                             |
| Room / Slick | II         | II                     | II                                    | 4         | Strikes a good balance between natural in normal code while configurable* |
| Peewee       | III        | I                      | I                                     | 3         | Really easy and fits into code great, but the complex queries becomes really hard and feels forced |
| SQLDelight   | II         | III                    | III                                   | 5         | Natural to use in the code, great customability & little overhead* |

Both Room & SQLDelight are enforcing SQLite right now which is a major con for those that needs postgresql etc. Personally I only use SQLite as was discussed in [expensify's blog](https://blog.expensify.com/2018/01/08/scaling-sqlite-to-4m-qps-on-a-single-server/) SQLite can be squeezed to the extreme - expensify managed to handle up to 4 million queries per second!

### Outro

In its essence today there's a great variety of different kinds of wrappers for databases in almost all languages and it is all about finding one that strikes your balance of perfect. For a really simple database perhaps an ORM such as _peewee_ where no SQL knowledge is really required could be enough. But be sure to know the trade-offs, once your database grows complex so does peewee grow complex fast, same applies to slick and others. Raw SQL as a fall-back is always good to have and a lot of the libraries are starting to add it (e.g. slick), but it never feels natural and always is a bit like a bandaid, ugly right?

Anyhow, I hope this was interesting and perhaps someone learned about a new abstraction-level for databases or was inspired to pick up their own.

~Hampus