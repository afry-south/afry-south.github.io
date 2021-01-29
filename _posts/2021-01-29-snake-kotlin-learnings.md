---
title: "Snake - Learnings to take"
categories:
  - kotlin
  - game
  - multiplatform
tags:
  - kotlin
  - game
  - multiplatform
  - snake
toc: true
---

I've tried to compress some of the learnings I tried to share and that I had hoped to share but time was short. 

There's three different core parts,
1. Games & Game-engines
2. Beginner
3. Advanced

There has been extra material added also.

## Games & Game-engines
We created a game one step at a time and in fact we did a full game engine (by combining the different parts).

### 1. Graphis - We drew graphics on a canvas
By using Java Swing, (JS Canvas & `ncurses`) we created rectangles of different colors on the background canvas.
TODO - code

### 2. We built Data Structures to keep the _Game State_.
By using `data class` we created Data Structures which could keep the Game State.  
We had `Snake`, `Apples`, `Cell` & `Game`.
TODO - code

### 3. We created a _Game Loop_ which advances said _State_.
Finally we had to make it possible to modify said _State_ and redraw the graphics by some kind of set timer. This is done through using a timer and could be called a _Game Loop_. It is integral to have the application running.
TODO - code 

## Beginner
For beginners we jumped a bit straight into the code, but I hope people could get something to take with them.

### Creating a runnable application
To create a runnable application you just need to create a file called `main.kt` with a function inside like
```kotlin
fun main() {
  println("Hello world!")
} 
```
which will print "Hello world!" to the standard output printer (usually the terminal).

### Saving a value as a "named parameter" (variable)
A little bit like in math you put a value to a name
`val a = 1` locks `a` to the value `1`. Using `val` means that `a` _cannot_ be updated.
```kotlin
val a = 1
a = 2 // CRASH
```
To be able to update the variable value you need to use `var`
```kotlin
var a = 1
a = 2 // OK
```

### Types
We learned about **Types**.
`val a: Int` means that `a` is a `Number`.
`val s: String` means that `s` is made out of `Characters` which means its a text.
`val b: Boolean` means that `b` is either `True` or `False`.

### Collections of elements
We learned about **Collections**.
`List` is a list of elements and keeps the order. `List<Int>` means that the list is filled of Numbers (integers).
`Set` is a list of elements with _only_ unique values and has a much faster look-up, e.g. it's really fast to find out if a `Set` of numbers contains your number (perhaps `42`?).
You can see if a element is in a Collection through `a in numberList` or `numberList.contains(a)`.

### Classes and Data Structures
We learned about **data class**.
`data class` is a special class which is very good to hold data. The class freely gives `set`, `get` & `equals` (and some more) which is of great help to reduce code.
`data class Point(val x: Int, val y: Int)`

Extra:
**File-system** - read a file through `File(path/to/file).readLines()` or `File(path/to/file).readText()` to keep it simple.

## Advanced
For more experienced programmers there was still lessons to be learned, hopefully. Here follows some of them.

### Data Class and their possibilities
`data class` - a data structure which gives `equals`, `get`, `set` and more for free! 
Don't forget that you can easily give `data class`es methods too (also applies to Scala `case class`). One common example could be to create a `merge` to merge two `data class`es into one.
```kotlin
data class Point(val x: Int, val y: Int) {
  fun plus(other: Point): Point = copy(x + other.x, y + other.y)
}
val point = Point(1,1)

point.plus(Point(1,1)) == Point(2,2) // True
point.x // 1
```

### Lazy Collections (`Sequence`)
`Sequence` ("lazy list") and its use-cases.
For Scala you need to use `view` or `Stream` to achieve lazyness.


	- **[When to Use Sequences - Dave Leeds on Kotlin (typealias.com)](https://typealias.com/guides/when-to-use-sequences/)**

### Val vs Var & Mutability
A lot of people seem to think that `val` == immutable, which is not right!
What `val` actually achieves is that you're not allowed to change the reference! If what you refer to is mutable then the object is simply mutable.
```kotlin
val a = mutableListOf(1,2)
a.add(3) // a == [1,2,3]

a = mutableListOf(1,2,4) // CRASH!!!
```
As you can see we can still mutate `a` but we cannot update the reference. 
Using `var` as a keyword allows you to update the reference.
```kotlin
var a = mutableListOf(1,2)
a.add(3) // a == [1,2,3]

a = mutableListOf(1,2,4) // a == [1,2,4]
```
So the difference in `var` and `val` is about if you can update the reference, not immutability really. 

### Objects
So what is the difference between a `Object` and a `class` / `data class`?
A object is a **Singleton** object and all of the values are initialized _lazily_ which gives plenty of advantages. 
The methods on `Object`s are also equivalent to Javas `static` which means that it requires to initialized class and will not increase the method-scope of classes using these methods, unlike `Interface`s / `Trait`s. Implementing a `Interface` or `abstract class` to gain methods is a suboptimal way if the methods does not depend on a state because it increases the number of functions in the final `.jar`.
So if your method does not require a dynamic state please put it in a `object` or perhaps a `companion object` to let the compiler optimize it further! 

### Anonymous Class
In Kotlin you can create class-implementatio on the fly by using the `object` keyword, see:
```kotlin
canvas.addKeyListener(object : KeyListener {
  override fun onKeyPressed(event: KeyPressedEvent) {
    // Do what you want to do on keypress
  }
})
```
This is a especially cool pattern to use in places where you override with different behaviours for each place you the `KeyListener` and the `KeyListener` creation pattern is already deided by used framework. Creating a new class for each onClick is annoying! 

### Inline keyword
There exists two kinds of inline, `inline fun` and `inline class`.

`inline fun` means that the function is inlined, i.e. the function call is replaced by the function code. This has positives and negatives.
**positive:** the method space and cost is removed. We won't create a function object that contains the method but rather the code will be inserted compile-time. This is especially useful when working with lambdas.
**negative:** the total code size is now larger. At each method call the code is inserted meaning that its duplicated over the place.

`inline class` means that we remove the overhead ("boxing") of wrapping primitives. That means we can create `inline class Name(val value: String)`.
During compile-time all `Name` will be replaced by the `String` code-wise which means that we don't get the overhead of the class `Name`.

**Autoboxing** is a important concept to understand, a lot of people only note the positives about it (that we automatically cast a `Int` to a `Double` if we multiply them. But the negative is that this conversion actually isn't free. And **more importantly** the autoboxing might mean that we automatically box a _primitive_ to the class, e.g. `double` -> `Double`.
A class requires pointer space, creation and in total a minor overhead. Very important to learn is that in default JVM no collection exist that contains primitives, only arrays. So each `List<Int>` actually contains the boxed `Int` value rather than primitive. 
Especially when working with large lists and  arrays, say matrix-multiplication, this becomes noticable that not only the overhead is costly but also the autoboxing between `int` and `Integer`. 
This applies to everything really.

### Compilation Targets

Remember the Kotlin std-library wraps everything you expect such as DateTime, String, List, Random and more which is then during the compiler backend phase converted to the platform specific code required.

![image](https://user-images.githubusercontent.com/7490199/106275261-d28a4d80-6235-11eb-857d-4faa662d411c.png)


Thanks for this time,
Hampus
