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

22. What will fastai do if you don't provide a validation set?

23. Can we always use a random sample for a validation set? Why or why not?

24. What is overfitting? Provide an example.

25. What is a metric? How does it differ from "loss"?

26. How can pretrained models help?

27. What is the "head" of a model?

28. What kinds of features do the early layers of a CNN find? How about the later layers?

29. Are image models only useful for photos?

30. What is an "architecture"?

31. What is segmentation?

32. What is `y_range` used for? When do we need it?

33. What are "hyperparameters"?

34. What's the best way to avoid failures when using AI in an organization?
34.

## Chapter 2 [Production]
1. **Provide an example of where the bear classification model might work poorly in production, due to structural or style differences in the training data.**
During night, because most images found using Bing is a clear bear. Not hidden, not dark, not nothing - just a good shot!

2. **Where do text models currently have a major deficiency?**
Generating the _correct_ response. It's still hard to find a answer and generate a resposne from let's say a medical database.
It could possibly generate a response that seem layman but is completely incorrect!


3. **What are possible negative societal implications of text generation models?**
Hard to differentiate if fake news, spam or a real person. You can create a ton of fake news to skew the populations belief as they never catch up with the real news.

4. **In situations where a model might make mistakes, and those mistakes could be harmful, what is a good alternative to automating a process?**
Keep a human in the loop. Let a human work as they normally do and only allow the system to help out.

5. **What kind of tabular data is deep learning particularly good at?**
Recommendation based on history. 

6. **What's a key downside of directly using a deep learning model for recommendation systems?**
We only got the history to use, in a store one would ask other questions than just what the reader has historically looked at or read.

7. **What are the steps of the Drivetrain Approach?**
- Define Objective (what do I want to achieve)
- Levers (what levers of the input can you change?)
- Data (what data can you collect?)
- models (how the levers influence the objective)

9. **How do the steps of the Drivetrain Approach map to a recommendation system?**
Objective: Drive additional sales by surprising and delightning customer with recommendations they haven't bought.
Lever: The ranking of the recommendations
Data: New data must be collected to generate recommendation which cause new sales. Many random experiments, wide range and wide range of customers.
Model: Two models for purchaste probabilities, conditional on seeing or  seeing a recommendation. ddddddLe
e


.
9dddddLeve steps of the Drivetrain Approach map to a recommendation system?**

10. **Create an image recognition model using data you curate, and deploy it on the web.**
TODO()

11. **What is `DataLoaders`?**
A way to load data. It helps with everything from reading data to supplying it to the trainer/learner. It can achieve modifications of data also by using transformations.

12. **What four things do we need to tell fastai to create `DataLoaders`?**
- What kind of data we're working with
- How to get the list of items
- How to label these items
- How to create the validation set

13. **What does the `splitter` parameter to `DataBlock` do?**
Decide how you should split the data into Training & Validation.

14. **How do we ensure a random split always gives the same validation set?**
Supply a random seed (e.g. 42)

15. **What letters are often used to signify the independent and dependent variables?**
x and y.

16. **What's the difference between the crop, pad, and squish resize approaches? When might you choose one over the others?**
Crop: Crops the image to said size
Pad: Pads the image (adding black) to said size
Squish: Squish it in a direction, could be to widen a image on the width to fit the window.
Crop is preferred overall as we don't modify the data. Pad is pretty bad overall. Squish if not to much makes sense to combine with crop to augment data.

17. **What is data augmentation? Why is it needed?**
Augmentation gives more training-data which improves the quality of the model. 

18. **What is the difference between `item_tfms` and `batch_tfms`?**
`item_tfms` is applied item by item (like a `.map`) while the `batch_tfms` are batched and applied at the same time. For images this means that they can be applied using a GPU which speeds up the process several times.

19. **What is a confusion matrix?**
It shows how many of each has been classified as what, and what it really is. X axis is usually ground truth while Y axis is the predicted label.

20. **What does `export` save?**
Export saves the model and the `DataLoader` used! Very useful.

21. **What is it called when we use a model for getting predictions, instead of training?**
Inference. This does not require a GPU either because it's often very fast :)

22. **What are IPython widgets?**
Widgets that you can create in Jupyter to show a button, upload button etc etc.

23. **When might you want to use CPU for deployment? When might GPU be better?**
CPU works most of the time. GPU only usable if you can actually batch the requests (it's only fast at paralleled tasks)

24. **What are the downsides of deploying your app to a server, instead of to a client (or edge) device such as a phone or PC?**
On the edge you don't require internet access, nor do you have slow latency. But a server is most often stronger!

25. **What are three examples of problems that could occur when rolling out a bear warning system in practice?**
	1. It might warn when there's no danger - loosing trust
	2. It might not warn when there's danger - loosing trust and putting people in danger
	3. Wrong type of data (video, low-res etc)

26. **What is "out-of-domain data"?**
Data that the model has never seen before, or completely irrelevant data. Like a bear-tracking system don't really care about a dog.

27. **What is "domain shift"?**
The type of data the model sees changes over time. Perhaps an insurance company price based on predicted risk, but the type or risk changes (smartphones & broken screens)

28. **What are the three steps in the deployment process?** 
	1. Manual process
		2. Run model in parallel
		3. Humans check _all_ predictions
	2. Limited Scope Deployment
		3. Careful human supervision
		4. Time or geography limited
	3. Gradual Expansion
		4. Good reporting systems needed
		5. Consider what could go wrong

## Chapter 3 [Ethics]
1. Does ethics provide a list of "right answers"?

	* List item
	* List item
  
  

2. How can working with people of different backgrounds help when considering ethical questions?

3. What was the role of IBM in Nazi Germany? Why did the company participate as it did? Why did the workers participate?

4. What was the role of the first person jailed in the Volkswagen diesel scandal?

5. What was the problem with a database of suspected gang members maintained by California law enforcement officials?

6. Why did YouTube's recommendation algorithm recommend videos of partially clothed children to pedophiles, even though no employee at Google had programmed this feature?

7. What are the problems with the centrality of metrics?

8. Why did Meetup.com not include gender in its recommendation system for tech meetups?

9. What are the six types of bias in machine learning, according to Suresh and Guttag?

10. Give two examples of historical race bias in the US.

11. Where are most images in ImageNet from?

12. In the paper ["Does Machine Learning Automate Moral Hazard and Error"](https://scholar.harvard.edu/files/sendhil/files/aer.p20171084.pdf) why is sinusitis found to be predictive of a stroke?

. What is representation bias?
. How are machines and people different, in terms of their use for making decisions?the same as "fake news"?

1. Why is disinformation through auto-generated text a particularly significant issue?

. What are the five ethical lenses described by the Markkula Center?

18. Where is policy an appropriate tool for addressing data ethics issues? 
19.

## Chapter 4 [MNIST Basics]
1. **How is a grayscale image represented on a computer? How about a color image?**
Gray = [0,255]. Color = RGB [0,255 ; 0,255 ; 0,255]
. **How are the files and folders in the `MNIST_SAMPLE` dataset structured? Why?**
Separate folder for training and validation set.
Under these each number has a folder itself, i.e. the label is the folder name.

. **Explain how the "pixel similarity" approach to classifying digits works.**
You aggregate all the images of a 3. Average the value for each pixel.
Figure out if a image is closer or further away from a 3 or 7. Use L1 or L2 norm to figure out distance.

45. **What is a list comprehension? Create one now that selects odd numbers from a list and doubles them.**
It's like a filter & map in one.
`[x*2 for x in x_list if x % 2 != 0]`

5. **What is a "rank-3 tensor"?**
A 3-dimensional array.

. **What is the difference between tensor rank and shape? How do you get the rank from the shape?**
Rank tells the N of a N-matrix. Shape tells the size of each array of all N. `[5,10,5]`. The Rank is `len(shape)`

. **What are RMSE and L1 norm?**
RMSE = L2 normalization.
L1 takes the mean of absolute while L2/RMSE takes the root out of the sum of each number squared.
L2 often penalize bigger mistakes more heavily than the former.

8
9. **How can you apply a calculation on thousands of numbers at once, many thousands of times faster than a Python loop?**
Make use of wrapper functions that are implemented in C. For example a numpy array can take "np.array * 1.5" and multiply the whole array by 1.5 on each position, much faster than looping!

9. **Create a 3×3 tensor or array containing the numbers from 1 to 9. Double it. Select the bottom-right four numbers.**
```python
	a = array
	a = a * 2
	a[2,2:3,2:3] 
```

10. **What is broadcasting?**
If we have different shaped arrays we can broadcast the smaller one to fit the large one.
Broadcasting "expand" the tensor with smaller rank to have same size as the one with larger rank. 
This actually does not copy the tensor multiple times, but pretends that it is the shape - thereby not allocating the memory.
The full calculation is done in C (or CUDA if GPU). **Incredibly important**.

1. **Are metrics generally calculated using the training set, or the validation set? Why?**
Validation set, we don't want ourself to train according to the data we have as input to not overfit the data.

12. **What is SGD?**
Stochastic Gradient Descent. 
A way to automatically update weights in batches based on the loss of recent batch predictions. Updates Neural Networks today.

134. **Why does SGD use mini-batches?**
Too small value would give no meaningful loss as we would only based on one sample. Too large and it's to much memory required.
Need to find a good balance. 
The size of a mini-batch is called batch-size.

145. **What are the seven steps in SGD for machine learning?**
	1. Initialize weigths, 
	2. Predict. 
	3. Based on prediction calculate loss.
	4. Calculate the gradient which measures how changing the weight would affect the loss.
	5. Step, change the weigths based on calculation.
	6. Repeat from step 2.
	7. Iterate till you're "done"

15
16. **How do we initialize the weights in a model?**
Often Random.

167. **What is "loss"?**
Loss is how close you're to the true label with your prediction. The closer, the less loss. 

178. **Why can't we always use a high learning rate?**
Might bounce out of a global minima and miss it completely.

189. **What is a "gradient"?**
A gradient is really just the derivative of a function at a certain point. The steepnes decides how large of a step we should take.

19. **Do you need to know how to calculate gradients yourself?**
No, PyTorch helps you do this by `.rquires_grad`function.

2s yourself?

201. **Why can't we use accuracy as a loss function?**
Accuracy only changes when a prediction changes, too small changes in weights isn't gonna cause any prediction to change leading to y not being updated and thereby a 0 gradient everywhere (deltaY/deltaX)

212. **Draw the sigmoid function. What is special about its shape?**
		__
	__/
__/
It stays within 0 & 1.

223. **What is the difference between a loss function and a metric?**
Loss is something that is based on training data while running. Metric is based on the validation data and not used to update the model.

234. **What is the function to calculate new weights using a learning rate?**
optimizer?

245. **What does the `DataLoader` class do?**
Wraps the datasets. Allows batching, helps with ẗransformations.

256. **Write pseudocode showing the basic steps taken in each epoch for SGD.**
TODO()

267. **Create a function that, if passed two arguments `[1,2,3,4]` and `'abcd'`, returns `[(1, 'a'), (2, 'b'), (3, 'c'), (4, 'd')]`. What is special about that output data structure?**
```python
def zip(a,b):
	return [(a[i], b[i] for i in range(len(a))]
```
OBS: Zip exists in python stdlib!

278. **What does `view` do in PyTorch?**
PyTorch method that changes shape of a tensor without changing content. `-1` is a special parameter to `view` that makes the "axis as big as necessary to fit all data".
So we can take a rank-3 tensor and create a rank-2 vector, i.e. a matrix is now a vector! List of vectors.

28. **What are the "bias" parameters in a neural network? Why do we need them?**
The bias is the constant (m) in y = kx + m. It allows values to start from non-zero. This is good because `weights*pixels` isnt flexible enough! If a pixel is 0 it's always 0..

29. **

29. What are the "bias" parameters in a neural network? Why do we need them?

30. What does the `@` operator do in Python?**
Matrix multiplication.

301. **What does the `backward` method do?**
`loss.backward` actually adds the gradients of `loss` to any gradients that are currently stored. 

312. **Why do we have to zero the gradients?**
Because we add the gradients to the ones already stored.
So we update weight & bias based on gradients, then zero them to not be confused the next derivative.

32. **What information do we have to pass to `Learner`?**
`DataLoader`, the model, the optimizon function, the loss & optionally metrics (accuracy, F1 etc)

33. **

33. What information do we have to pass to `Learner`?

34. Show Python or pseudocode for the basic steps of a training loop.**
TODO()

345. **What is "ReLU"? Draw a plot of it for values from `-2` to `+2`.**
_Rectified Linear Unit_ which is just a fancy name for all negative numbers is equal to zero and above is the same.
-2 = 0, -1 = 0, 0=0, 1=1, 2=2.

356. **What is an "activation function"?**
It's known as _nonlinearity_ and is a function that sends through the input based on some treshold or something else. `ReLu` is a activation function.

367. **What's the difference between `F.relu` and `nn.ReLU`?**
`F.relu` is just a function to call the relu function. 
`nn.relu` is a `nn.module`, i.e. a neural network module.

378. **The universal approximation theorem shows that any function can be approximated as closely as needed using just one nonlinearity. So why do we normally use more?**
Performance, with a deeper model (more layers) we don't need to use as many parameters. So with more layers we're allowed to use smaller matrices, while yielding better results thant we would with larger matrices and fewer layers.
In practise this means that we can train the model more quickly and take less memory. 
Fast AI Questionaire Answers
Find the colab course-files here

Chapter 1
Do you need these for deep learning?

Lots of math T / F
Lots of data T / F
Lots of expensive computers T / F
A PhD T / F
Name five areas where deep learning is now the best in the world.

Image Recognition
Q/A
.
.
What was the name of the first device that was based on the principle of the artificial neuron?

Based on the book of the same name, what are the requirements for parallel distributed processing (PDP)?

What were the two theoretical misunderstandings that held back the field of neural networks?

What is a GPU?
Graphics Processing Unit. A lot of cores that can do math basically. Optimized for matrix-operations as that’s a common use-case in graphics.

Open a notebook and execute a cell containing: 1+1. What happens?
It prints the result (2).

Follow through each cell of the stripped version of the notebook for this chapter. Before executing each cell, guess what will happen.

Complete the Jupyter Notebook online appendix.

Why is it hard to use a traditional computer program to recognize images in a photo?

What did Samuel mean by “weight assignment”?

What term do we normally use in deep learning for what Samuel called “weights”?

Draw a picture that summarizes Samuel’s view of a machine learning model.

Why is it hard to understand why a deep learning model makes a particular prediction?

What is the name of the theorem that shows that a neural network can solve any mathematical problem to any level of accuracy?

What do you need in order to train a model?

How could a feedback loop impact the rollout of a predictive policing model?

Do we always have to use 224×224-pixel images with the cat recognition model?

What is the difference between classification and regression?

What is a validation set? What is a test set? Why do we need them?

What will fastai do if you don’t provide a validation set?

Can we always use a random sample for a validation set? Why or why not?

What is overfitting? Provide an example.

What is a metric? How does it differ from “loss”?

How can pretrained models help?

What is the “head” of a model?

What kinds of features do the early layers of a CNN find? How about the later layers?

Are image models only useful for photos?

What is an “architecture”?

What is segmentation?

What is y_range used for? When do we need it?

What are “hyperparameters”?

What’s the best way to avoid failures when using AI in an organization?

Chapter 2 [Production]
Provide an example of where the bear classification model might work poorly in production, due to structural or style differences in the training data.
During night, because most images found using Bing is a clear bear. Not hidden, not dark, not nothing - just a good shot!

Where do text models currently have a major deficiency?
Generating the correct response. It’s still hard to find a answer and generate a resposne from let’s say a medical database.
It could possibly generate a response that seem layman but is completely incorrect!

What are possible negative societal implications of text generation models?
Hard to differentiate if fake news, spam or a real person. You can create a ton of fake news to skew the populations belief as they never catch up with the real news.

In situations where a model might make mistakes, and those mistakes could be harmful, what is a good alternative to automating a process?
Keep a human in the loop. Let a human work as they normally do and only allow the system to help out.

What kind of tabular data is deep learning particularly good at?
Recommendation based on history.

What’s a key downside of directly using a deep learning model for recommendation systems?
We only got the history to use, in a store one would ask other questions than just what the reader has historically looked at or read.

What are the steps of the Drivetrain Approach?

Define Objective (what do I want to achieve)
Levers (what levers of the input can you change?)
Data (what data can you collect?)
models (how the levers influence the objective)
How do the steps of the Drivetrain Approach map to a recommendation system?
Objective: Drive additional sales by surprising and delightning customer with recommendations they haven’t bought.
Lever: The ranking of the recommendations
Data: New data must be collected to generate recommendation which cause new sales. Many random experiments, wide range and wide range of customers.
Model: Two models for purchaste probabilities, conditional on seeing or seeing a recommendation. ddddddLe
e
.
9dddddLeve steps of the Drivetrain Approach map to a recommendation system?**

Create an image recognition model using data you curate, and deploy it on the web.
TODO()

What is DataLoaders?
A way to load data. It helps with everything from reading data to supplying it to the trainer/learner. It can achieve modifications of data also by using transformations.

What four things do we need to tell fastai to create DataLoaders?

What kind of data we’re working with
How to get the list of items
How to label these items
How to create the validation set
What does the splitter parameter to DataBlock do?
Decide how you should split the data into Training & Validation.

How do we ensure a random split always gives the same validation set?
Supply a random seed (e.g. 42)

What letters are often used to signify the independent and dependent variables?
x and y.

What’s the difference between the crop, pad, and squish resize approaches? When might you choose one over the others?
Crop: Crops the image to said size
Pad: Pads the image (adding black) to said size
Squish: Squish it in a direction, could be to widen a image on the width to fit the window.
Crop is preferred overall as we don’t modify the data. Pad is pretty bad overall. Squish if not to much makes sense to combine with crop to augment data.

What is data augmentation? Why is it needed?
Augmentation gives more training-data which improves the quality of the model.

What is the difference between item_tfms and batch_tfms?
item_tfms is applied item by item (like a .map) while the batch_tfms are batched and applied at the same time. For images this means that they can be applied using a GPU which speeds up the process several times.

What is a confusion matrix?
It shows how many of each has been classified as what, and what it really is. X axis is usually ground truth while Y axis is the predicted label.

What does export save?
Export saves the model and the DataLoader used! Very useful.

What is it called when we use a model for getting predictions, instead of training?
Inference. This does not require a GPU either because it’s often very fast :)

What are IPython widgets?
Widgets that you can create in Jupyter to show a button, upload button etc etc.

When might you want to use CPU for deployment? When might GPU be better?
CPU works most of the time. GPU only usable if you can actually batch the requests (it’s only fast at paralleled tasks)

What are the downsides of deploying your app to a server, instead of to a client (or edge) device such as a phone or PC?
On the edge you don’t require internet access, nor do you have slow latency. But a server is most often stronger!

What are three examples of problems that could occur when rolling out a bear warning system in practice?

It might warn when there’s no danger - loosing trust
It might not warn when there’s danger - loosing trust and putting people in danger
Wrong type of data (video, low-res etc)
What is “out-of-domain data”?
Data that the model has never seen before, or completely irrelevant data. Like a bear-tracking system don’t really care about a dog.

What is “domain shift”?
The type of data the model sees changes over time. Perhaps an insurance company price based on predicted risk, but the type or risk changes (smartphones & broken screens)

What are the three steps in the deployment process?

Manual process
Run model in parallel
Humans check all predictions
Limited Scope Deployment
Careful human supervision
Time or geography limited
Gradual Expansion
Good reporting systems needed
Consider what could go wrong
Chapter 3 [Ethics]
Does ethics provide a list of “right answers”?

List item
List item
How can working with people of different backgrounds help when considering ethical questions?

What was the role of IBM in Nazi Germany? Why did the company participate as it did? Why did the workers participate?

What was the role of the first person jailed in the Volkswagen diesel scandal?

What was the problem with a database of suspected gang members maintained by California law enforcement officials?

Why did YouTube’s recommendation algorithm recommend videos of partially clothed children to pedophiles, even though no employee at Google had programmed this feature?

What are the problems with the centrality of metrics?

Why did Meetup.com not include gender in its recommendation system for tech meetups?

What are the six types of bias in machine learning, according to Suresh and Guttag?

Give two examples of historical race bias in the US.

Where are most images in ImageNet from?

In the paper “Does Machine Learning Automate Moral Hazard and Error” why is sinusitis found to be predictive of a stroke?

. What is representation bias?
. How are machines and people different, in terms of their use for making decisions?the same as “fake news”?

Why is disinformation through auto-generated text a particularly significant issue?
. What are the five ethical lenses described by the Markkula Center?

Where is policy an appropriate tool for addressing data ethics issues?
Chapter 4 [MNIST Basics]
How is a grayscale image represented on a computer? How about a color image?
Gray = [0,255]. Color = RGB [0,255 ; 0,255 ; 0,255]
. How are the files and folders in the MNIST_SAMPLE dataset structured? Why?
Separate folder for training and validation set.
Under these each number has a folder itself, i.e. the label is the folder name.
. Explain how the “pixel similarity” approach to classifying digits works.
You aggregate all the images of a 3. Average the value for each pixel.
Figure out if a image is closer or further away from a 3 or 7. Use L1 or L2 norm to figure out distance.

What is a list comprehension? Create one now that selects odd numbers from a list and doubles them.
It’s like a filter & map in one.
[x*2 for x in x_list if x % 2 != 0]

What is a “rank-3 tensor”?
A 3-dimensional array.

. What is the difference between tensor rank and shape? How do you get the rank from the shape?
Rank tells the N of a N-matrix. Shape tells the size of each array of all N. [5,10,5]. The Rank is len(shape)

. What are RMSE and L1 norm?
RMSE = L2 normalization.
L1 takes the mean of absolute while L2/RMSE takes the root out of the sum of each number squared.
L2 often penalize bigger mistakes more heavily than the former.

8
9. How can you apply a calculation on thousands of numbers at once, many thousands of times faster than a Python loop?
Make use of wrapper functions that are implemented in C. For example a numpy array can take “np.array * 1.5” and multiply the whole array by 1.5 on each position, much faster than looping!

Create a 3×3 tensor or array containing the numbers from 1 to 9. Double it. Select the bottom-right four numbers.
	a = array
	a = a * 2
	a[2,2:3,2:3] 
What is broadcasting?
If we have different shaped arrays we can broadcast the smaller one to fit the large one.
Broadcasting “expand” the tensor with smaller rank to have same size as the one with larger rank.
This actually does not copy the tensor multiple times, but pretends that it is the shape - thereby not allocating the memory.
The full calculation is done in C (or CUDA if GPU). Incredibly important.

Are metrics generally calculated using the training set, or the validation set? Why?
Validation set, we don’t want ourself to train according to the data we have as input to not overfit the data.

What is SGD?
Stochastic Gradient Descent.
A way to automatically update weights in batches based on the loss of recent batch predictions. Updates Neural Networks today.

Why does SGD use mini-batches?
Too small value would give no meaningful loss as we would only based on one sample. Too large and it’s to much memory required.
Need to find a good balance.
The size of a mini-batch is called batch-size.

What are the seven steps in SGD for machine learning?

Initialize weigths,

Predict.

Based on prediction calculate loss.

Calculate the gradient which measures how changing the weight would affect the loss.

Step, change the weigths based on calculation.

Repeat from step 2.

Iterate till you’re “done”

15
16. How do we initialize the weights in a model?
Often Random.

What is “loss”?
Loss is how close you’re to the true label with your prediction. The closer, the less loss.

Why can’t we always use a high learning rate?
Might bounce out of a global minima and miss it completely.

What is a “gradient”?
A gradient is really just the derivative of a function at a certain point. The steepnes decides how large of a step we should take.

Do you need to know how to calculate gradients yourself?
No, PyTorch helps you do this by .rquires_gradfunction.

2s yourself?

Why can’t we use accuracy as a loss function?
Accuracy only changes when a prediction changes, too small changes in weights isn’t gonna cause any prediction to change leading to y not being updated and thereby a 0 gradient everywhere (deltaY/deltaX)

Draw the sigmoid function. What is special about its shape?
__
__/
__/
It stays within 0 & 1.

What is the difference between a loss function and a metric?
Loss is something that is based on training data while running. Metric is based on the validation data and not used to update the model.

What is the function to calculate new weights using a learning rate?
optimizer?

What does the DataLoader class do?
Wraps the datasets. Allows batching, helps with ẗransformations.

Write pseudocode showing the basic steps taken in each epoch for SGD.
TODO()

Create a function that, if passed two arguments [1,2,3,4] and 'abcd', returns [(1, 'a'), (2, 'b'), (3, 'c'), (4, 'd')]. What is special about that output data structure?

def zip(a,b):
	return [(a[i], b[i] for i in range(len(a))]
OBS: Zip exists in python stdlib!

What does view do in PyTorch?
PyTorch method that changes shape of a tensor without changing content. -1 is a special parameter to view that makes the “axis as big as necessary to fit all data”.
So we can take a rank-3 tensor and create a rank-2 vector, i.e. a matrix is now a vector! List of vectors.

What are the “bias” parameters in a neural network? Why do we need them?
The bias is the constant (m) in y = kx + m. It allows values to start from non-zero. This is good because weights*pixels isnt flexible enough! If a pixel is 0 it’s always 0…

**

What are the “bias” parameters in a neural network? Why do we need them?

What does the @ operator do in Python?**
Matrix multiplication.

What does the backward method do?
loss.backward actually adds the gradients of loss to any gradients that are currently stored.

Why do we have to zero the gradients?
Because we add the gradients to the ones already stored.
So we update weight & bias based on gradients, then zero them to not be confused the next derivative.

What information do we have to pass to Learner?
DataLoader, the model, the optimizon function, the loss & optionally metrics (accuracy, F1 etc)

**

What information do we have to pass to Learner?

Show Python or pseudocode for the basic steps of a training loop.**
TODO()

What is “ReLU”? Draw a plot of it for values from -2 to +2.
Rectified Linear Unit which is just a fancy name for all negative numbers is equal to zero and above is the same.
-2 = 0, -1 = 0, 0=0, 1=1, 2=2.

What is an “activation function”?
It’s known as nonlinearity and is a function that sends through the input based on some treshold or something else. ReLu is a activation function.

What’s the difference between F.relu and nn.ReLU?
F.relu is just a function to call the relu function.
nn.relu is a nn.module, i.e. a neural network module.

The universal approximation theorem shows that any function can be approximated as closely as needed using just one nonlinearity. So why do we normally use more?
Performance, with a deeper model (more layers) we don’t need to use as many parameters. So with more layers we’re allowed to use smaller matrices, while yielding better results thant we would with larger matrices and fewer layers.
In practise this means that we can train the model more quickly and take less memory.
