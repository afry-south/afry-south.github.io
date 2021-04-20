---
title: "Streamlit - Unifying Backend & Frontend for MVPs"
categories:
  - Backend
  - Frontend
  - Machine-Learning
tags:
  - streamlit
toc: true
excerpt: "Streamlit - A recommendation of the quickest MVP tool out there unifying backend & frontend in one piece!"
---

Have you ever made a fun project that you later want to turn into a web app, but never wanted to take the time needed to actually develop the web app?  
With [streamlit](https://streamlit.io/) it'll be simple and complex deployment is a thing of past.

Streamlit is python-based, and it allows you to combine the backend with an interactive web application without learning any HTML, using only script.  
In my opinion the biggest advantage with Streamlit is its ease of use and how quickly you can learn the basics to create your own web application. In my (not too much) experience they have a quite interactive [community](https://discuss.streamlit.io/) where you can find the answer to many of your questions. 

### Usage

To start using Streamlit all you have to do is 
```python
pip install Streamlit
```
Create a python file with
```python
import Streamlit as st

st.write("Hello World!")
```
Then run the application by writing
```bash
python run [filename]
```

All this and more is mentioned in there [docs](https://docs.streamlit.io/en/stable/).

### Example

<img src="https://user-images.githubusercontent.com/7490199/115155017-26ab0e00-a07e-11eb-8439-6e448027d4fb.png" alt="londogard-ner" width="25%"/>

>An example from [londogard.com/ner](https://londogard.com/ner)

### Final Words

To make your app available for everyone else you can either deploy it to your own server or use Streamlits own [share](https://streamlit.io/sharing) where you can deploy up to 3 public apps for free.

For a more in depth exploration of Streamlit regarding its advantages and disadvantages I suggest to read [Medium article](https://medium.datadriveninvestor.com/streamlit-everything-you-need-to-know-665eb90fcf4a).
