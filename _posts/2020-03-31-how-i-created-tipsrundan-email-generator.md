---
title: "How I created the Tipsrundan Email Generator"
categories:
  - JVM
tags:
  - tipsrundan
  - html
  - css
  - kotlin
---

# Email Generation - Tipsrundan -
At AFRY IT South I'm co-responsible with Hassan Ftouni at driving the competence. One of my initiatives that we both now drive is to have a biweekly, every second week for all you picky readers out there, newsletter called "Tipsrundan". 

Tipsrundan has lately gathered some fuss around and Afry IT West now wants to join in. This means new challenges to somehow build an email together with more people, collaborating on what to have and what to keep regional. Let me say that this is a fun challenge!

In this post I'll go through how I built our completely new "Email Generator" in Kotlin that I built a Sunday afternoon. This includes a few things such as

- Learning how CSS works in emails (in comparison to browsers)
- Kotlin

Let me start at how Tipsrundan has evolved since we initiated it in October (crazy how time flies).

## The evolution of Tipsrundan
When we sent the first Tipsrundan, called TL;DR back then, I used a "email templating language" called [MJML](https://mjml.io/) and a pre-built template found on their homepage.  
With this we got a responsive email using their "homemade" templating language. I enjoyed it at the same time as I hated it, there was way to much manual labour copying the sections and inserting my own code, the indentation in the web-editor wasn't great and so on. I bet it's a great tool but it didn't cut it for me, after two or three issues and a ton of research I found a new tool I liked, with a good free variant, called [Stripo](https://stripo.email/). Stripo is a _really_ good tool which has excellent support with its drag n' drop editor where you can save modules and much more. We got a good looking & responsive email that worked out great, everything good right?

It was really good until I realized we had to share the template with new people and Stripo requires premium for this (can't blame them, they need their cut) which honestly I was to lazy to fix through management.

With this knowledge I set out to create a tool which we could use internally that is simple and keeps simple. Forward comes a solution I built over a Sunday afternoon where we generate emails from JSON.

## Tipsrundan generation
I had some pretty simple requirement:
1. JSON or yaml as the filetype which we'd generate Tipsrundan-email from.
2. Have different sections and easily extendable
3. Decent looking & responsive (i.e. work on a phone and desktop)

By having these requirements I knew that it'll be easy to sync over git or whatever tool we need and that we can potentially create themed Tipsrundan editions in the future.

I also knew that I wanted to do this in Kotlin, mainly because I really enjoy coding in Kotlin.

### Step 1: Defining the format
The first step was to decide what format to use, or at least begin with. Both yaml and JSON was considered and in the end JSON felt like the best fit.

```json
{
  "title": string,
  "issue": number,
  "regional": [item],
  .. more categories
}
```
where `item ` is
```json
{
  "title": string,
  "description": string,
  "url": string
}
```

Pretty straight-forward, as I said I prefer to keep it simple. 

### Step 2: Reading the data
Now that we have a definition of the data we need to read it, this is really a solved problem in most languages through some kind of library. In my case I choose the serialization library provided by Kotlin in the `kotlinx`-library. As a FYI this library can serialize using CBOR (Concise Binary Object Representation) and other formats. The name of the library is `kotlinx-serialization` and can be found [here](https://github.com/Kotlin/kotlinx.serialization). It's easiest installed through `gradle` (using the Kotlin DSL):

```kotlin
plugins {
  kotlin("plugin.serialization") version "1.3.70" // same version as kotlin
}

dependencies {
  .. other dependencies
  implementation("org.jetbrains.kotlinx:kotlinx-serialization-runtime:0.20.0") // Requires jcenter() as a repository
}
```
`kotlinx-serialization` is actually cross-platform compatible meaning that it exists for Kotlin targeting JVM, Native & JS (yes we can target all these platforms through Kotlin!).  

Once installed it's pretty easy to serialize & deserialize, like any other library really. Create the `data class`es, which is the equivalent of a `case class` in Scala.

```kotlin
data class Item(val title: String, val description: String, val url: String)
```
Currently `kotlinx-serialization` can do the serialization through two different methods, either add an annotation to the class that we'll use Reflection - this does not work for native. Or we mark the `data class` as Serializable, the latter being preferred as it's  truly cross-platform and is more performant. 
If anyone is wondering a  `data class` is basically a class that   provides setters, getters, equality, toString and more! It's really awesome.
Adding the annotation we end up with the following:

```kotlin
@Serializable
data class Item(val title: String, val description: String, val url: String)
```

### Step 3: How to write html in Kotlin?

We all probably know about html-templating that's available in most languages, I decided against that and went for a DSL. Kotlin is the language for DSL (Domain Specific Language), for good and bad. Through yet another `kotlinx` library we got `kotlinx-html` which provides this DSL.

It looks something like this

```kotlin
fun BODY.createFooter() = footer {
    hr { }
    section {
        p {
            b { +"Thank you for this time see you in two weeks" }
            br { }
            +"Hampus & Hassan"
        }
    }
}
```

By using a DSL we get types (as you can see on the `BODY`) and other bonuses. Although this DSL is pretty verbose it works pretty good. In the end using a DSL or html-template engine does not matter that much in my opinion.
By the way, the way this function is typed is called a `extension function` in Kotlin and is one of my favorite tools. It means that we extend the class, `BODY` with a new method which is usable on a object of the class. Cool right?

Let's move on to the styling and how CSS can be annoying.

### Step 4: Styling

There was some important parts going into this, we want the email to look at least decent and also be responsive so that it's viewable on both a phone and computer.

CSS and emails are not as simple as with a webpage I learned rather fast. I had great issues actually getting the HTML to look good in gmail/outlook. In the end I found [this](https://litmus.com/blog/do-email-marketers-and-designers-still-need-to-inline-css) awesome post from Litmus which is one of the leading Email Marketing providers. I learned that 

1. External CSS is a no-go for emails (a lot of the providers turned it off because of security concerns)
2. Embedded CSS (using `style`-tag in the header) works on most places today (not true a few years ago)
3. Inline CSS is the best

Because I want to keep it simple I went with the second approach, this mean that I can keep the code a bit cleaner and not write as many wrappers for the styled elements.

So knowing how I should implement my styling I needed to find a good style, in the end I remembered an old Reddit-post where I found "MVP.css" which is a small CSS that gives cards, buttons and more. Really brilliant in my opinion, made by Andy Brewer and can be found [here](https://andybrewer.github.io/mvp/). I've personally tweaked it a bit to keep the email a bit more compact and informative as this is really made for webpages, but the essentials are the same.

### Step 5: Wrapping it all up

Combining all this into a few files in a git repo we can now generate emails from a JSON easily and have multiple categories. 

- The JSON is used as a data structure
- Kotlin used as language
- `kotlinx-serialization` used as a JSON deserializer
- `kotlinx-html` used to build the HTML directly in Kotlin with types
- Embedded CSS used as it's widely usable by today in email clients

The repository can be found [here](https://github.com/londogard/email-gen-kt).



I hope this was somewhat interesting & something learned. If you've any comments please reach out to me through any of the available channels!

*Hampus Londögård*
