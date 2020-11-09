---
toc: true
layout: post
description: "A three part blog (all included in this one) that goes through 1) How Kotlin Multiplatform works, 2) How to build a game (Snake) and finally 3) how to make it multiplatform."
categories: [gradle, kotlin, game, multiplatform]
title: "How to build and play Snake via Native Binary, JVM and JS/Browser (Kotlin)"
comments: true
author: Hampus Londögård
---

> **Disclaimer:** this post is pretty long and I recommend reading one part at a time (it's 3 parts).
>
> Personally I hate unfinished blogs that are multiple parts, hence I uploaded all at once. So be assured, you're getting all parts - right here, right now! :happy:
>
> Finally, the first part is purely informational about how everything works and the second part is how to actually code the game. The second part is interactive and contains a lot of TODOs.
> The third, and final, part covers how we are able to use the same code on JS/Browser & Native

**All the code is available [here](https://github.com/londogard/snake-js-jvm-native).**

## Introduction

First off, what is Kotlin?

![](https://lh6.googleusercontent.com/z07YTS2Ft_HypvBzChXpX4L1ye3y4ht0x142UCo8q6LGT0EaxZyEFA5hwP3_OV4ZQafkavgMBtRBP3X6RFPpogLTG5uR8J485-o6y1TOZ3xh_7TZkvTb7DOSGqIm5kiIZwPFCZdlLXg)

> Image from [kotlinlang.org](https://kotlinlang.org/)

By my own account it's a language that has learned from many mistakes done in the past and tries to extend and embrace the good ones!

The most obvious one solved by Kotlin is "The Billion Dollar Mistake" as the inventor [Tony Hoare](https://en.wikipedia.org/wiki/Tony_Hoare) calls it himself, namely `null`. Kotlin is not alone about this, but certainly off to a good start!

Some mentionable features on top of this is

- [Coroutines](https://kotlinlang.org/docs/reference/coroutines-overview.html) - A more efficient (lightweight) threading model, also called "green threads" sometimes. Feels very natural and easy.
- [Data-Science & Jupyter](https://kotlinlang.org/docs/reference/data-science-overview.html) support
- [Extension functions](https://kotlinlang.org/docs/reference/extensions.html#extensions) - Perhaps my favourite feature, do you feel a class is missing a function? No problem, you're free to do so!
- Excellent [typing](https://kotlinlang.org/spec/type-inference.html) - Perhaps not Scala, but still very good.
- & more!

All of this is available through Kotlins Multiplatform effort, where Multiplatform does not mean Mac/Windows/Linux but rather that we can compile into different platforms such as Java Bytecode (JVM), [Native](https://kotlinlang.org/docs/reference/native-overview.html)  and [JS/Browser](https://kotlinlang.org/docs/reference/js-overview.html).

Enough praises, let's get onto how the multiplatform solution actually works through [**Part 1**](#Part 1: How does Kotlin Multiplatform work).

## Part 1: How does Kotlin Multiplatform work?
Let's start by explaining **Native**, what exactly is _Native_?
From the landing page of [kotlinlang.org/native](https://kotlinlang.org/docs/reference/native-overview.html).

> Kotlin/Native is a technology for compiling Kotlin code to native binaries, which can run without a virtual machine. It is an  [LLVM](https://llvm.org/)  based backend for the Kotlin compiler and native implementation of the Kotlin standard library.


By this statement we learn that _native_ refers to binary executables that can run on a OS (natively). No virtual machine or browser required! What does this mean in practice?

✔️ Small file size
✔️ No overhead
✔️ Incredibly fast starting-time

As usual it isn't a win-win situation but you loose some

❌Development speed
❌... and so on.

#### LLVM

What is LLVM? 
LLVM is probably the biggest project (compiler) that exists to build native binaries. Languages such as C, C++, Haskell, Rust & Swift compiles to native binaries through LLVM.

Moving back to the info-text,

> **It is an  [LLVM](https://llvm.org/)  based backend for the Kotlin compiler** and native implementation of the Kotlin standard library.

So... What is a backend? More specifically, what is a backend for a compiler?

### How the Kotlin Compiler works, Frontend to Backend

First, what is a compiler? 
A compiler is like a translator, just as you'd translate Swedish into English a compiler instead translates computer code written in one programming language into another one of lower level, e.g. assembly. 

What are the steps then taken? In general all compilers follow the same pattern, and Kotlin is no different. Even though it's a similar path it's interesting to learn about, even more if you don't know how it usually works!
The Kotlin Compiler first compiles Kotlin code into a _Intermediate Representation_, or _IR_, which it later turns into Java Bytecode, when targeting the _Java Virtual Machine_ (_JVM_). 

![image](https://user-images.githubusercontent.com/7490199/97027300-d2095900-155a-11eb-9d18-6fb58a0a9699.png)

The first part is called the **Compiler Frontend** 

#### The Kotlin Compiler Frontend

![image](https://user-images.githubusercontent.com/7490199/97027463-1137aa00-155b-11eb-9c31-a60e3e25af87.png)

As mentioned the _Compiler Frontend_ turns the Kotlin code into a _Intermediate Representation_ of the code which is represented by a [abstract syntax tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree), which is built from concrete syntax, e.g. strings.
The process involves [lexical analysis](https://en.wikipedia.org/wiki/Lexical_analysis) which creates tokens and pass it forward to the [parser](https://en.wikipedia.org/wiki/Parsing) that finally builds said abstract syntax tree. For those interested this could be a really fun challenge and learning lesson to implement yourself!

Moving on, the second and final part is called the **Compiler Backend**.

#### The Kotlin Compiler Backend

![image](https://user-images.githubusercontent.com/7490199/97077672-ddee2d00-15e5-11eb-9f71-916c5b2a0544.png)

The _Compiler Backend_ actually turns this abstract syntax tree, or _IR_, into computer output language. In this case it's Java Bytecode which is understood by the _JVM_. The backend is the part that actually optimize code to remove for-loops where applicable, exchange variables into constants and so on. Just as with the frontend it's a really good challenge to either implement a backend without optimizations, or focus on a existing one and adding a optimization yourself!

What is interesting about Kotlin is that it has different backends, which means that the _IR_ compile not only into Java Bytecode but also JS/Browser & Native binaries. 

![image](https://user-images.githubusercontent.com/7490199/97077776-b8155800-15e6-11eb-8ae6-a83a77253087.png)

> **Side-note**: For Native Backend we actually have two _Intermediate Representations_, first Kotlin _IR_ which is compiled into LLVM _IR_ which LLVM then compiles into a native binary through its own Compiler Backend. This means that all the optimizations applied to C, C++, Swift & many more are also applied to Kotlin Native code!

#### How Kotlin keeps multiplatform clean

It might sound messy to target multiple platforms like this, and how could it possibly end up clean?

By using the standard libraries that are included with Kotlin, which includes almost everything you need, and multiplatform-developed community libraries, e.g. [SQLDelight](https://github.com/cashapp/sqldelight), you get code that looks the same and works the same irregardless of if you target JS/Browser, Native or the JVM.

To give an example of how Kotlin std-lib works, let's take one of the most common types - String. 

![image](https://user-images.githubusercontent.com/7490199/97077938-2dcdf380-15e8-11eb-8282-873d80f6178e.png)

By using Kotlin.String rather than the usual Java.lang.String you do when programming Java you get a String type that works on multiple platform and has the same convenience functions (& even more than the Java one). Imagine, you can write native code using `.substring`, `.take(n)` & `.replace` - amazing compared to `c` right? :happy:

Thinking about the compiler, this means that the Backend Compiler automatically maps the _IR_ of a Kotlin.String into the correct type.

You can take this concept and apply to anything such as IO , network & more - all which are included in the std-lib! 

### Wrapping up how Native works

Let's recollect what we've gone through

1. Kotlin Compiler compiles Kotlin code into a _Intermediate Representation_ (IR) through the _Compiler Frontend_.
   1. This IR is a abstract syntax tree
2. Kotlin Compiler then goes the _Compiler Backend_ which turns the code into the lower level language, e.g. Java Bytecode, and applies optimisations
3. Kotlin has a std-lib which has functionalities as `Kotlin.String`, `Kotlin.List`, networking and much more.
   1. `Kotlin.String` turns into `KString` which is Kotlins own native strings with a lot of helper methods.

What more could be good to know in relation to native?
Native has a lot of quirks like pointers, address space and much more!

Kotlin has solved memory allocation through the same approach as Swift, namely [_reference counting_](https://en.wikipedia.org/wiki/Reference_counting) which deallocates objects once they've got no references. There's some advantages such as being really fast, but also downsides such as _reference cycles_ which it handles poorly.

Kotlin also has some really nice convenience syntax such as the `memScope`-block.

### Outro: Kotlin Multiplatform and why it matters

✔️ One code-base for common logic
			Serialization logic, e.g. parsing JSON into a data class
			Networking
			Database
✔️ Development speed
✔️ Required Knowledge

❌ Still requires some code in said language
			Especially for UI

So all in all we can share our code between platforms which improves development speed & quality in multiple ways.

The biggest "downside" is that even though we share the code we most likely will need some kind of specific code for the platform, for the GUI on iOS as an example. Perhaps [compose](https://www.jetbrains.com/lp/compose/) can help us get closer to that reality soon - who knows.
The final, and perhaps obvious, one I'd like to mention straight away is that platform specific libraries of course are not usable on multiplatform. This includes libraries such as React (JS) & `ncurses` (native).

Personally I see Kotlin Multiplatform as a great way to share core logic between different targets, but one must use it with care and not try to force it into being used everywhere in every way.

## Part two: How to set up Multiplatform and build Snake

So first we need to understand how to set up a Multiplatform project. The [official guide](https://kotlinlang.org/docs/reference/mpp-create-lib.html) is actually really good, and if you're using IntelliJ it's a breeze to setup! Just as in the guide make sure to select `Library`.

![Select a project template](https://kotlinlang.org/assets/images/reference/mpp/mpp-project-1.png)

Let the build run, `gradle` is a really good build-tool that I'd like to discuss more. But for now let's just enjoy the simplicity of how our whole project is setup with builds possible for JS, JVM & Native which also contains our common-code which is the glue!

#### Building a JVM App (Snake)

Let's start simple, Keep It Simple Stupid (KISS) principle applied, and create a JVM app which is easily runnable on all OS:es and has _great_ debugging!

First off, we need to draw something. This is easiest done through the Swing library which is included in the default jdk, some might call it old but hey - it does the job.Create a file called `main.kt` in `src/jvmMain/kotlin`.

Swing has a built-in threading solution (almost too bad, because `Coroutines` are awesome in Kotlin!) and the best way to start the GUI is by using the existing  `EventQueue` class and its `invokeLater` function. `invokeLater` makes sure the code runs last in the `EventQueue` if you add more methods, which makes sense - you want to draw the UI as the final thing.

```kotlin
fun main() {
    EventQueue.invokeLater {
        JFrame().apply {
            title = "Snake"
            isVisible = true
        }
    }
}
```

Where the `apply` is a context wrapper that takes the object and uses it as context (`this`) inside of the block/scope (`{}`). See its signature:

`inline fun <T> T.apply(block: T.() -> Unit): T`

This would equate to 

```kotlin
val jframe = JFrame()
jframe.title = "Snake"
jframe.isVisible = true
```

in more Java-like syntax. Why use `apply`? It allows us to achieve some interesting chaining concepts which I really enjoy.

Now run the `main`-function, there should be a green "run"-button at the left, press that. Hopefully it compiles and a window will appear, with the title set to "Snake".

Awesome! We need to render something inside of the box, a game soon enough, let's see how we can achieve that.

Adding some minor refactoring and some new classes we can draw something

```kotlin
class Board: JPanel() {
    init {
        TODO("""
        - Set background to black
        - Allow focus
        - Set preferredSize to some 200x300
        """)
    }
}

class GUI: JFrame() {
    init {
        title = "Snake"
        isVisible = true
        isResizable = false
        setLocationRelativeTo(null)
        defaultCloseOperation = EXIT_ON_CLOSE

        TODO("Add the Board to the JFrame, through add()")
    }
}

fun main() {
    EventQueue.invokeLater {
        GUI()
    }
}
```

What are we doing?
`JFrame` was refactored `GUI` which then is a subclass of `JFrame`, with a few extra attributes were added such as `defaultCloseOperation = EXIT_ON_CLOSE` that makes sure the program exits if we close the window, feel free to test it out!
Further a `Board` was added which extends `JPanel`, it's in the `Board` the game will be rendered. 
Finally, `add(Board())` allows us to add our `Board`  to the `JFrame`.

Run!
Something is not right.. The background seems black enough, but the size is most likely not correct. We can't even resize as `isResizable=false` was set. 
Make sure to add `pack()` at the end, as in

```kotlin
class GUI: JFrame() {
    init {
        { /** same code as before */ }
        add(Board())
        pack()
    }
}
```

What `pack()` does is that it packs and resizes the `JFrame` to include all its component(s) and their current size(s).

Super! We're now able to render our `Board` and see the whole deal.

#### Drawing the snake & apple

We've got the canvas (Board), now we just need to get artsy and add a Snake and some Apples!
I'll keep it simple and will make the Board exist of a few cells, all pretty large. On each cell you either have nothing, Snake or Apple - pretty simple right?
`JPanel` has some nice-to-have methods built-in, such as `repaint()` which simply repaints the component, which in turns calls `paintComponent(g: Graphics?)` to paint/render it.

> _Disclaimer:_  the code might not be the most idiomatic, but I try to introduce a few concepts.

```kotlin
class Board: JPanel() {
    init { /** same code as before */ }

    override fun paintComponent(g: Graphics?) {
        super.paintComponent(g)
        
        val g2d: Graphics2D = g as? Graphics2D ?: return
        
        g2d.scale(20.0, 20.0)
        g2d.color = Color.GREEN
        g2d.fill(Rectangle(5, 6, 1, 1))
        g2d.fill(Rectangle(5, 7, 1, 1))
        g2d.fill(Rectangle(5, 8, 1, 1))
    }
}
```

Once again, what's actually happening?
First, we override the function `paintComponent` which renders `Board` layout. The input is a **nullable `Graphics`**, which is shown by the type having a `?` at the end. This is a cool property of Kotlin, if something can be `null` it actually is a type. No `Option`/`Maybe`, just pure type. 
Then `Graphics?` is cast to non-null `Graphics2D` through a safe approach using `as?`, without `?` the cast can crash, with `?` the cast would return `null` if failing. 
Finally we use a **elvis-expression `?:`** which is basically a wrapper for `if (null) doThis else doThat`, so if the left-hand-side is `null` it'll give the right-hand-side. The right-hand-side in our case is a empty `return` statement, meaning that we just make a early-exit. If the value is _not_ `null` it'll give the non-null variant of the type! 

> Example use-case of elvis-operator `?:`
> `val a: Int = 1 ?: 0 // a = 1`
> `val b: Int = null ?: 0 // b = 0` 

Detailing the code further we now have `g2d: Graphics2D` where `Graphics2D` which gives us a few nice functions to draw components on the `Board`. 

- We set the scale to 20
  - This simplifies the behaviour, we can now use 20x30 grid where each cell is size 1, but it's scaled into the 200x300 grid.
- We use `fill` to draw `Rectangle`'s with set `Color`.

> **Side-note:**
> For those wondering how you safely execute on `null`s by chaining, like you do with Monads (`Option`)
>
> ```kotlin
> val nullableGraphics: Graphics? = null
> nullableGraphics?.scale(20.0, 20.0)	// This is safe! No operation executed if null
> ```

Summing up, we now know how to render stuff on the `Board` and it's all very static. 
The next step is to make the rendering less static and I believe the natural step from now is to create the data structures that'll contain the game & its state. Then we can make sure the data structures are able to update, so we can render new states.

#### Creating the data structures


Data structures are required to have a game state, that is the score and position of everything. 

The natural state is `Game` which contains everything, let's begin by creating a `Game` structure which contains the size of the `Board`.

```kotlin
data class Game(val width: Int, val height: Int)
```

> **Side-note:** A `data class` is essentially the same as a  `case class` from Scala. And for those who don't know what a `case class` is it's basically a `class` that simplifies a lot of stuff, mainly used as a data structure. 
> You get `equals`, getters & setters, and much more for free. 
> Anyone from Java knows how awesome this is.

Moving on we need to define the cells mentioned, something like

```kotlin
data class Cell(val x: Int, val y: Int)
```

Wrapping up our current state we got most of what we need, `Game` which contains our game state & `Cell` which is our co-ordinates. 
The next step is to actually draw the `Cell`'s and wrap the `Cell` in other classes such as `Apple` and `Snake`.
Let's add all the required code.

```kotlin
data class Apples(val cells: Set<Cell> = emptySet())

data class Snake(val cells: List<Cell>) {
    val head: Cell = TODO("Take the first cell.")
    val tail: List<Cell> = TODO("Drop one cell and return the rest.")
}

data class Game(
    val width: Int,
    val height: Int,
    val snake: Snake,	// Adding snake and apples
    val apples: Apples
)

class Board: JPanel() {
    private val game: Game = Game(
        20,
        30,
        Snake(listOf(Cell(2,3),Cell(2,4),Cell(2,5),)),
        Apples(setOf(Cell(4,5)))
    )

    init {
        background = Color.black
        isFocusable = true
        preferredSize = Dimension(200, 300)
    }

    override fun paintComponent(g: Graphics?) {
        super.paintComponent(g)
        val g2d = g as? Graphics2D ?: return
        g2d.scale(20.0, 20.0)

        g2d.color = Color.GREEN
        game.snake.tail.forEach { cell -> TODO("Render the cells using the previously used technique") }

        TODO("Render the head using the color YELLOW")

        TODO("Render the apples using the color RED")
    }
}
```

Fixing the added `TODO`s and keeping the same `GUI` & `fun main` we can now run the code. You should be seeing something like 

![image](https://user-images.githubusercontent.com/7490199/97808473-5c427300-1c67-11eb-9fa9-9110f596533b.png)

Pretty cool right!? We've got
:white_check_mark: Rendering
:white_check_mark: Data Structures

What's left?

1. A game loop
2. Ability to actually move the data structures ( `Snake`)

#### Adding a Direction

To be able to move we need to know what directions to move in. In my humble opinion this is simplest done through a `Enum`.

```kotlin
enum class Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
}
```

Simple enough. But let's make it better, even though pre-optimization is the root of all evil it is sometimes fun :grinning:. 
Enums in Kotlin are pretty awesome, they can both keep values and have methods! Let's add `dx` and `dy`.

```kotlin
enum class Direction(val dx: Int, val dy: Int) {
    // -->
    // |
    // v
    UP(0, -1),
    DOWN(0, 1),
    LEFT(-1, 0),
    RIGHT(1, 0);
}
```

Through `dx` and `dy` we can add it to the current cell to move in the direction which `Direction` is!

Updating `Snake.kt` & `Cell.kt` to have `Cell` with `Direction` and some `turn`.

```kotlin
data class Cell(val x: Int, val y: Int) {
    fun move(direction: Direction) = TODO("Create new cell which moves in direction. OBS: Remember Direction now has dx, dy!")
}

data class Snake(
    val cells: List<Cell>,
    val direction: Direction, // new attribute
    val eatenApples: Int = 0 // new attribute
) {
    fun move(): Snake {
    	val newHead = TODO("Move head")
        val newTail = TODO("Move tail!")
        return TODO("Create a new Snake with the updated position!")
    }
    fun turn(newDirection: Direction?) = TODO("Make sure to turn correctly")
}
```

This is all fine & dandy, but there is some improvements to be made that'll clean up the code. 
I mentioned that Kotlin `Enums` can have methods, which is awesome. We can simplify the `turn`-logic by adding a method to `Direction`, namely `isOppositeTo`. See the code below.

```kotlin
enum class Direction(val dx: Int, val dy: Int) {
    /** Same code as previously */

    fun isOppositeTo(that: Direction) =
        dx + that.dx == 0 && dy + that.dy == 0
}
```


Right, we can now turn the snake and render the game. We need the `Game`-state to update to actually re-render the updated Snake, let's add a `update`-function that does this.

```kotlin
fun update(direction: Direction?): Game {
    return TODO("""
    Make sure to
    	1. Turn snake in direction
    	2. Move
    	3. Update the game state by returning Game
    """)
}
```

And our GUI

```kotlin
class Board: JPanel() {
    var dir: Direction = Direction.RIGHT
    var game: Game = Game(
        20,
        30,
        Snake(listOf(Cell(2,3),Cell(2,4),Cell(2,5),), dir),
        Apples(setOf(Cell(4,5)))
    )
    
    init {
        addKeyListener(object : KeyAdapter() {
            override fun keyPressed(e: KeyEvent?) {
                dir = when (e?.keyCode) {
                    VK_I, VK_UP, VK_W -> Direction.UP
                    else -> TODO("Add the other key bindings. Reflect of how the object works and what is happening.")
                }
                game = game.update(dir)
                repaint()
            }
        })
    }
}
```

In our `init` (equal to a constructor) we add a `keyListener` which will listen on whenever we move. We moved `game` to be a `var` which allows us to change the reference.

> **Side-note:** The difference between a `val` and `var` is not about immutability of the value, but rather that you cannot change the pointer to the object. By using `val` the compiler don't allow you to change the reference.
>
> ```kotlin
> val a = 1
> a = 3 // CRASH -- This is not allowed
> var b = 1
> b = 3 // b = 3, this is allowed.
> ```
>
> Please note that this means that if your object is mutable, you can mutate the state of the object even though it's a `val`.

Why put `game` on a `var` you might ask? Otherwise how would we update our `Game` as the data structure itself is "immutable", i.e. cannot be changed, which would mean that we'd need to add a new `Game` object each time and save it on the stack (never cleaning it up) and that'd pretty fast make the application crash because of `out of memory`.

Finally, we update the game by calling our created `update`-method and then we use `repaint()` which draws the components!

> **Remember:** `paintComponent` draws the canvas (game), so whenever `repaint` is called `paintComponent` draws the game again based on the `game` and `cell`'s in the game.

In conclusion this gives us an incredibly simple game, the snake moves whenever we press a key as we _still don't have a game loop_ based on time. So how do we add a game loop based on time?

The JVM got you covered! In the `keyListener` remove the update & repaint, then add a `timer ` 

```kotlin
fixedRateTimer(TODO("Explore options to use for the timer and how they work")) {
	TODO("Insert a game loop here, essentially the same as done in the keyListener previously!")
}
```

Run the game! ...amazing right? 
We now move our snake, and it moves by itself if we don't. 
But the game is still pretty boring... We never die, no apples can be eaten and finally no new apples appear. We have a few additions to make to make the game a bit challenging..

Let's start by fixing the apples. Update the `Apples.kt` to randomly add apples to the board when calling `grow()`.

> To simplify the logic we use a `set` which means that all apples added are unique.

```kotlin
data class Apples(
    val width: Int,
    val height: Int,
    val cells: Set<Cell> = emptySet(),
    val growthSpeed: Int = 3, // this could actually be to only spawn apple when there is no other apple. Up to user
    val random: Random = Random	// Once again, Kotlin provides a superb class, in this case a Random wrapper that works on JVM, JS & Native - cool right?
) {
    fun grow(): Apples {
        return TODO("""
        If we have a random number greater than growthSpeed, return no update. 
        Otherwise add a new cell.
        """)
    }
}
```


Then we should allow the Snake to eat them, make sure to add `eat(apples: Apples)` method and implement it for `Snake.kt`.

```kotlin
fun eat(apples: Apples): Pair<Snake, Apples> {
    return TODO("""
    If our head is on a Apple location, return a pair of Snake and Apple untouched.
    Otherwise make sure to remove the apple from apples and increase body size of snake!
    """)
}
```


At the end of all this we need the `Game.kt` to allow this logic to be used. This is done through updating `update` to allow the snake to `eat` apples and also `grow` apples to add new ones.

Great! We can eat apples, add new apples and all. But we're still pretty invincible and we'll just keep going forever. 
We need to make sure that the end can be lost, let's do it by adding a new attribute `isOver` to `Game.kt`

```kotlin
val score: Int = TODO("Score based on snakes size, e.g. cell size")
val isOver: Boolean = TODO("Game is over if snake head in tail or snake head not on the map!")

fun update(dir: Direction): Game {
    if (isOver) return this
    { /** same code as was here before */ }
}
```

#### Wrapping up the code with some minor refactoring / new functionality

Kotlin has a wonderful concept of **extension functions**, which simply is incredible. An extension function extends a class with new functionality. Did you ever wish `Double` had a rounding to string? `fun Double.roundTo(n: Int): String = "%.${decimals}f".format(this)` solves this for you! Now your `Double`'s automatically gives you a hint to use `.roundTo` as one of `Double`'s built-in functions!

With these we can update our main-method to be a tiny bit cleaner.

```kotlin
g2d.color = Color.GREEN
game.snake.tail.forEach { cell -> g2d.fill(Rectangle(cell.x, cell.y, 1, 1)) }

// Turns into -->

fun Graphics2D.renderCells(color: Color, cells: Iterable<Cell>) {
    this.color = color
    cells.forEach { cell -> fill(Rectangle(cell.x, cell.y, 1, 1)) }
}

/**
	Which allows us to just call `g2d.renderCells(Color.GREEN, game.snake.tail)` etc.
*/
```

What more improvements can be made? 

Exercises left for the reader:

1. Add Score on the loosing screen
2. Add a win-condition (basically impossible, but taking all apples)
3. Reinforcement learning to train a bot (might be a future blog!)
4. Better & cleaner code!

## Part 3: True multiplatform (moving to JS & Native)

First off, this part is more of a reader exercise. If you want the code please go to the GitHub repository.

All the snake-related code that isn't in your `main.kt`-file should be moved into `src/commonMain/kotlin` which makes it **multiplatform**-code. This means that it can target JS, Native & JVM instantly! 

> **Side-note:** because all the functionality for the Data Structures (e.g. `take`, `List`, `Random`) exists in Kotlin std-lib it's automatically possible to use in multiplatform.

This is not true all the time, if we use platform-specific code. Our platform-specific code, tied with the JVM, is the `timer` and `Swing` which means that our whole GUI is tied to the JVM. 

When the code has been migrated and import-paths are updated, run the JVM app again and validate that everything works.

#### JS/Browser target

Now create `src/jsMain/kotlin/main.kt`.

In this file we need to define how to draw the browser-based GUI. Some key methods, for the full code check out the git repository.

**KeyListener**
`document.onkeydown = { event -> onkeydown(event).also { keyDir -> dir = keyDir } }` where `onkeydown` is your own method that handles key-events.

**Timer** 
`window.setInterval({ game = game.update(dir); render(canvas, game) }, 200)`

**Canvas** 

```kotlin
val canvas = document.getElementById("snake-canvas") as HTMLCanvasElement
val ctx = canvas.getContext("2d") as CanvasRenderingContext2D
```

On this `ctx` from the canvas you can use `fillRect` to draw rectangles, and `fillStyle` to set color.

**HTML-Canvas** 
`<canvas id="snake-canvas" width="400px" height="300px"></canvas>` (put in `index.html`)

The game is run through `./gradlew jsBrowserRun`, or selecting the gradle-icon at the top right (elephant) and typing `jsBrowserRun`.

And the code for the GUI using these components is pretty much exactly the same as in Swing to be honest. 

Congratulations, you have now achieved creating a desktop game and a browser game!

#### Native target

And onto our final target, Native Binary, that runs completely without a browser or a virtual machine.

For the Native target the GUI will be supported through the library `ncurses` which unfortunately is only supported on Linux & MacOS. If you've windows you can solve this through _Windows Subsystem for Linux_ (WSL).

Begin by creating `src/nativeMain/kotlin/main.kt`.

To begin, in the main-function do the following:

```kotlin
fun maint(): Unit = memScoped {
    // insert code
}
```

The `memScoped` part means that all memory allocated in the block is automatically disposed at the end, incredibly useful! :happy:

Then reading how to use `ncurses` we can figure out how to init this. The final end-goal being

```kotlin
fun main(): Unit = memScoped {
    initscr()

    defer { endwin() }
    noecho()
    curs_set(0)
    halfdelay(2)

    var game: Game = TODO()
    val window = newwin(game.height + 2, game.width + 2, 0, 0)!!
    defer { delwin(window) }

    var input = 0
    while (input.toChar() != 'q') {
        window.draw(game)

        input = wgetch(window)
        val direction = when (input.toChar()) {
        	'i' -> TODO("")
        }
        game = game.update(direction)
    }
}

private fun CPointer<WINDOW>.draw(game: Game) {
    wclear(this)
    box(this, 0u, 0u)

    game.apples.cells.forEach { mvwprintw(this, it.y + 1, it.x + 1, ".") }
    game.snake.tail.forEach { mvwprintw(this, it.y + 1, it.x + 1, "o") }
    game.snake.head.let { mvwprintw(this, it.y + 1, it.x + 1, "Q") }

    if (game.isOver) {
        mvwprintw(this, 0, 6, "Game Over")
        mvwprintw(this, 1, 3, "Your score is ${game.score}")
    }

    wrefresh(this)
}
```

Try running it in the terminal.

This blog was created as a companion to a workshop I'm gonna do at AFRY, it has a bit more content including a presentation in person.

All the code is available [here](https://github.com/londogard/snake-js-jvm-native).

Thanks!

~Hampus 