---
toc: true
description: "An overview of some of the new features in Scala 3/Dotty"
tags:
  - scala
title: "Overview of some of the new features in Scala 3"
comments: true
---
_Authors:_ Carl Ekerot and Fredrik Strandin

## Enums
### Scala 2
In Scala 2 enums were never a first class citizen, instead we had to whack
around with `Enumeration`.

```scala
object HttpCode extends Enumeration {
  protected case class HttpCodeVal(i: Int, name: String, code: Int)
      extends super.Val(i, name)
  type HttpCode = HttpCodeVal

  val HTTP_OK = HttpCodeVal(0, "HTTP_OK", 200)
  val HTTP_NOT_FOUND = HttpCodeVal(1, "HTTP_NOT_FOUND", 404)
  val HTTP_INTERNAL_SERVER_ERROR = HttpCodeVal(2, "HTTP_INTERNAL_SERVER_ERROR", 500)
}

val someCode: HttpCode.HttpCode = HttpCode.HTTP_INTERNAL_SERVER_ERROR
println(s"Order: ${someCode.i}, name: ${someCode.name}, code: ${someCode.code}")
```

This is very cumbersome and error-prone. _Did I give all enum values a `name`
equal to their name?_ A lot of syntax and types that needs to be
remembered/looked up.

Now let's do some pattern matching on our code.
```scala
someCode match {
  case HttpCode.HTTP_OK => println("All fine n' dandy!")
  case HttpCode.HTTP_NOT_FOUND => println("Whoops, couldn't find the resource")
}
```

This code will generate a compiler warning, but won't fail to compile. Why?
Because we're missing one case, for `HttpCode.HTTP_INTERNAL_SERVER_ERROR`. Lets
add it!

```scala
someCode match {
  case HttpCode.HTTP_OK => println("All fine n' dandy!")
  case HttpCode.HTTP_NOT_FOUND => println("Whoops, couldn't find the resource")
  case HttpCode.HTTP_INTERNAL_SERVER_ERROR => println("Internal server error")
}
```

Now we're covered right? Nope, compiler still gives a warning that we don't
cover all cases, even though we do! We won't go into the details about why, but
let's settle on that Scala 2 Enumeration are not very well-designed.

You can find the above code [on Scastie](https://scastie.scala-lang.org/kd35a/pJFvEHLrQxiDRlZYgQXjew)
and play around with it yourself.

### Scala 3
Let's see what Scala 3 brings to the table by recreating our previous example.

```scala
enum HttpCode(val code: Int) {
  case HTTP_OK extends HttpCode(200)
  case HTTP_NOT_FOUND extends HttpCode(404)
  case HTTP_INTERNAL_SERVER_ERROR extends HttpCode(500)
}

val someCode: HttpCode = HttpCode.HTTP_INTERNAL_SERVER_ERROR
println(s"Order: ${someCode.ordinal}, name: ${someCode.toString}, code: ${someCode.code}")
```

Well that was much neater! Let's see what the compiler has to say about our
pattern match:

```scala
someCode match {
  case HttpCode.HTTP_OK => println("All fine n' dandy!")
  case HttpCode.HTTP_NOT_FOUND => println("Whoops, couldn't find the resource")
  case HttpCode.HTTP_INTERNAL_SERVER_ERROR => println("Internal server error")
}
```

No compiler warning anymore! Let's celebrate with adding the `-Xfatal-warnings`
compiler option 🥳

This example is [also available to play around with](https://scastie.scala-lang.org/kd35a/CoZBIrnGSuCS4X9CsROotQ)

## Union/Intersection Types

### Intersection Types

In Scala 2, it is possible to have multiple type constraints in a function
signature using the `with` keyword. For example, if we want to implement a
function `cleanUp` where the argument should both implement traits `Closable`
and `Freeable`, we could write:

```scala
def cleanUp(resource: Closable with Freeable): Unit = {
  resource.close()
  resource.free()
}
```

See example [on Scastie](https://scastie.scala-lang.org/CarlEkerot/296A8HqKRGqMs0ZVI4rdVQ/5).

Scala 3 introduces _intersection types_, which formalizes this type constraint.
Instead of using the `with` keyword, a new type is constructed using the `&`
operator: `Closable & Freeable`. Apart from the similarities with the `with`
keyword, the type members will be intersected as well if possible. Type
intersection could be thought of as an "AND" relationship between the types.

If both `Closable` and `Freeable` traits define methods
`def result: Result[Closable]` and `def result: Result[Freeable]` where `Result`
is covariant (`Result[+T]`), the intersecting type will have to
implement `Result[Closable & Freeable]`.

See example [on Scastie](https://scastie.scala-lang.org/CarlEkerot/JBjOiGdTSxSOnswryS5oCg/11).

### Union Types

Similar to Scala 2’s `Either` and could be thought of as an "OR" relationship. 
If one expected a function to handle both dogs and cats in Scala 2, a function
would have the signature `def pet(animal: Either[Cat, Dog])`. With union types,
it is possible to write `def pet(animal: Cat | Dog)`.

Similarly to intersection types, union types have a special meaning when two
types are combined with type intersection. If `Result` would be a
_contravariant_ type, the intersecting type would be a union type instead:
`Result[Closable | Freeable]`.

## Extension Methods
In Scala 2 we could use implicit classes to add functionality to already
existing classes.

```scala
case class Circle(radius: Double)

implicit class CircleMaths(circle: Circle) {
  def circumference: Double = circle.radius * math.Pi * 2
  def area: Double = math.Pi * math.pow(circle.radius, 2)
}

val aCircle: Circle = Circle(3)
println(f"Circumference: ${aCircle.circumference}%.2f")
println(f"Area: ${aCircle.area}%.2f")
```

[Here's the example to play around with](https://scastie.scala-lang.org/kd35a/g5h6Zu6MQlCY9A9UV2FnmQ)

With Scala 3 we can instead use _extension methods_, which are quite similar in
syntax.

```scala
case class Circle(radius: Double)

extension (circle: Circle) {
  def circumference: Double = circle.radius * math.Pi * 2
  def area: Double = math.Pi * math.pow(circle.radius, 2)
}

val aCircle: Circle = Circle(3)
println(f"Circumference: ${aCircle.circumference}%.2f")
println(f"Area: ${aCircle.area}%.2f")
```

Behind the scenes, an extension method is compiled into a function taking the
value as a parameter. So it can also be called in the following manner if one
would like to:

```scala
println(f"Circumference of $aCircle is ${circumference(aCircle)}%.2f")
```

## Explicit Nulls
An opt-in feature that changes the Scala type hierarchy in a way that null is no
longer a value of AnyRef. This means that initializing a value to null, or
comparing types with null, is forbidden due to compile-time checks. Instead, one
must explicitly add intersection with the type `Null` when expecting a
null-value.

Explicit nulls are enabled with the compiler flag `-Yexplicit-nulls`.

See example [on Scastie](https://scastie.scala-lang.org/CarlEkerot/m3tjwSzYTRiwOhfkluQAtQ/1).

## Opaque Type Aliases
Opaque Type Aliases are useful when you want to add abstractions on top of
existing types, without any overhead.

```scala
object HttpLib {
  opaque type Code = Int
  object Code {
    def apply(i: Int): Code = i
    private val VALID_HTTP_CODES: Seq[Int] = Seq(200, 201, 404, 500)
  }
  
  extension (code: Code) {
    def isSuccessfull: Boolean = code >= 200 && code < 300
  }
}

val someCode = HttpLib.Code(200)
println(s"Is Successfull: ${someCode.isSuccessfull}")
```

See example [on Scastie](https://scastie.scala-lang.org/kd35a/kwm4RwrtRluOwQ9qSe7cIw/4)

## Polymorphic Function Types

Functions may now have polymorphic types. This was previously only possible for
methods. For example, this polymorphic method is allowed in Scala 2:

```scala
def show[A](subject: A): String = println(subject)
```

However, this lacks some of the powers that functions have. For example, the
method may not be passed as an argument to a function (_higher-order function_),
since there’s no function type available.

Scala 3 solves this by introducing polymorphic function types:

```scala
val show: [A] => A => Unit = [A] => (subject: A) => println(subject)
```

Notice the additional type parameter `[A]` to the function signature. We may use
this as a type in function arguments, class members and type definitions.

In this example, we define a higher-order function that takes a subject of
type `A`, and some function that transforms the subject to type `B`:

```scala
def doTransform[A, B](subject: A, transform: [A] => A => B): B = {
  transform(subject)
}
```

A potential transform passed to this function could be a general string
transform:

```scala
val stringify: [A] => A => String = [A] => (x: A) => x.toString
```

See example [on Scastie](https://scastie.scala-lang.org/CarlEkerot/wi8vw63QRR2h4mMIeX4UXg/1).

## Given/Using
`given` and `using` can be used to add contextual functionality to a generic
type.

```scala
trait Ord[T] {
  def compare(x: T, y: T): Int
}

given Ord[Int] with {
  def compare(x: Int, y: Int): Int =
    if x < y then -1 else if x > y then 1 else 0
}

given listOrd[T](using ord: Ord[T]): Ord[List[T]] with {
  def compare(xs: List[T], ys: List[T]): Int = (xs, ys) match {
    case (Nil, Nil) => 0
    case (Nil, _) => -1
    case (_, Nil) => 1
    case (x :: xs1, y :: ys1) =>
      val heads = ord.compare(x, y)
      if heads != 0 then heads else compare(xs1, ys1)
  }
}

@main def main: Unit = {
  val xs = List(42, 666)
  val ys = List(13, 1337, 123)
  println(s"${listOrd.compare(xs, ys)}") // "1"
}
```

See example [on Scastie](https://scastie.scala-lang.org/kd35a/GmmoyuOoQkWABObpQlsPbw).

## Macros

The Scala 3 documentation defines macros as:
> A macro is an inline function that contains a *splice* operation outside an enclosing *quote*.

Splicing and quoting are operations for transforming between run-time code and
the abstract syntax tree. When these two are combined with inline functions,
it’s possible to generate code during compile-time.

Quoting is the operation that transforms code to an AST of
type `Expr: T => Expr[T]`. Quoting is enabled by the `Quotes` context, and is
generated by calling an expression wrapped in braces preceded by a
single-quote: `val expr = '{ a + b }`. This will return an `Expr` that
represents the code within the braces. If implementing debug macros or
assertions, the `expr.show` method may be useful for getting a string
representation of the code.

Splicing is when Expr is translated back to code. This syntax is known from
string interpolation: `${ a + b }`. This will evaluate the expression within the
braces and return the result.

The AST may only be accessed during compile time. Hence, macros may not be
generated during runtime. There is also a restriction that macros may not be
defined in the same source file that they are being called from.

## Match Types
Match Types gives pattern matching to types.

```scala
type Elem[X] = X match {
  case String => Char
  case List[t] => t
}

def lastComponentOf[T](t: T): Elem[T] = t match {
  case s: String => s.charAt(s.length - 1)
  case l: List[_] => l.last
}
```

See example [on Scastie](https://scastie.scala-lang.org/kd35a/0YfnDyCoTRa89vTOEKbO6Q)

## Optional Braces

Scala 3 makes braces optional. Instead, code blocks are defined by indentation.
Any number of tabs or spaces may be used, as long as it’s consistent.
Inconsistent indentation will result in compile errors.

Control statements have slightly changed syntax. Boolean expressions no longer
need to be within parentheses, and the control statement bodies are prepended
with a then. Any block may be closed with end.

Braces may also be removed from trait, object, enum, package and class bodies
( template bodies). The body is then prefixed with a colon.

## Structural Types

Structural types in Scala 3 deal with one of the short-comings of statically
typed languages: flexibility when reading typed data from a dynamically typed
data store such as a database. This could be when doing object mapping from a
relational database.

In Scala 2, this would typically be implemented with runtime checks and
`asInstanceOf`. Scala 3 provides a way of automating this by extending the
`Selectable` trait in the parent type. Implementing the method
`def selectDynamic(name: String): Any` enables the getters for the implementing
class to look up the corresponding fields and return them with the correct type.
There's also a corresponding function for dynamic application:
`def applyDynamic(name: String)(args: Any*): Any`

See example [on Scastie](https://scastie.scala-lang.org/CarlEkerot/GNSqlHylRHquwtGGkmmdfA/1).

## Main Methods

For main methods, there’s new syntax that makes it easier to read and parse
command line arguments. In Scala 2, one would either extend the App trait which
defined command line arguments in it’s args member, or add a method with the
signature `def main(args: Array[String])` to an object.

In Scala 3, it’s possible to annotate a method with the `@main` annotation. The
method will be the main entry point for the program, and the arguments to that
method will be inferred from the command line arguments. The runtime will try to
convert the command line arguments to the respective types of the main method.

See example [on Scastie](https://scastie.scala-lang.org/CarlEkerot/5ugYiTyxTaSFDsXLeTL0tQ).

## Export clauses
`export` can be used to export aliases to members of an object.

```scala
case class User(name: String)
class Users {
  val users = collection.mutable.ArrayBuffer.empty[User]
  export users.{addOne => append}
  def printNames: Unit = users.foreach(u => println(u.name))
}
```

With this construct one can `.append` on an instance of `Users`.

See example [on Scastie](https://scastie.scala-lang.org/kd35a/Paam0CoCSPGBczUGcLbeMA)
