---
title: "Machine-Learning Competence Group at AFRY IT South"
permalink: /competence/machine-learning
toc: true
---

In the Machine-Learning group the greatest focus so far has been on Natural Language Processing (text), but also vision and others has been worked upon.

Do you have an idea of something you'd either like to do or like to have? Ask us and we will make sure to do it!

I believe the previous meetings speech most about what we do, so please take a look at _previous meetings_ below!

Get in contact either on [Slack](https://buitsouth.slack.com/archives/CPMRY5JBZ) or with Hampus Londögård.

![image](https://user-images.githubusercontent.com/7490199/114358831-a8c59f00-9b73-11eb-8595-0ffa7135bf5b.png)
![image](https://user-images.githubusercontent.com/7490199/114358910-c0048c80-9b73-11eb-927f-81e4baa6159f.png)


## Previous Meetings

**2021**
- [Presentation] **Knowledge Distillation** ([microsoft stream](https://web.microsoftstream.com/video/01aa344e-5a2c-4046-9ef3-5705034c414d), [slides](https://docs.google.com/presentation/d/1LJO4g2tef8Q6_63BPLehVlZJld3PZb7dRH7f1sh3-qM/edit?usp=sharing))
    > Today we're looking at how we can optimize the efficiency of these models while retaining the performance as much as possible.  
There's currently 2 commons ways to do this,
  > - Knowledge Distilling
  > - Quantization  
  >
  > In this session we'll focus on Knowledge Distillation but a brief introduction of Quantization will be given with a "self-reading exercise" for those interested

- **Self-Attention & Transformers from scratch** ([microsoft stream](https://afonline-my.sharepoint.com/:v:/g/personal/hampus_londogard_afconsult_com/ERy4uMekEMVHmCwWXi7n_d8Bf5KXppo0IO3Wo8RgaBW6rg?e=2kR39m), [blog/notebook](https://blog.londogard.com/nlp/deep-learning/2021/02/18/transformers-explained.html))
    > Transformers achieve State-of-the-Art in essentially every text-related task that exists today.  
    In this workshop we go through how Transformers works under the hood by actually implementing them from scratch, from the first matrix multiplication to the final architecture!

**2020**
- [Presentation] **Transfer Learning** ([microsoft stream](https://web.microsoftstream.com/video/01aa344e-5a2c-4046-9ef3-5705034c414d), [slides](https://web.microsoftstream.com/video/01aa344e-5a2c-4046-9ef3-5705034c414d))
    > Transfer Learning is the task to transfer knowledge from one task to another. With Transfer Learning you can achieve high accuracy with very little data.  
The larger focus is on Transformers.
- **Image to Copy Paste Text** ([project/notebooks @ github](https://github.com/afry-south/nlp-competence/tree/master/python/20201214%20-%20%239%20%5BImage%20To%20Text%20Copy%20Paste%5D))
    - In this workshop we focused on how we can first recognize text boundaries in images and then extract that text into a buffer which we can put into our clipboard.
    - We also looked at Transformer approaches on how to recognize text boundaries. 
- **SparkNLP** ([project @ github](https://github.com/afry-south/nlp-competence/tree/master/jvm/20200212%20-%20%238%20SparkNLP%20vs%20Smile))
    > **Goal:** Learn what Spark, SparkML and SparkNLP is. What we can do with it and so on. Also learn when not to use it (as it brings overhead).  
**How:** Using a JVM project (hidden in jvm-folder) we had tooling to try out a Scala Spark approach and a Kotlin "Local" approach.   
**Why:** For fun, and to understand that all tools have their place.


**2019**
- **Data Mining & Social Media Perception** ([Jupyter Notebook @ github](https://github.com/afry-south/nlp-competence/blob/master/python/20191127%20-%20%237%20%5BSocialMediaPerception%5D/%5BFinished%5D_SocialMediaPerception.ipynb))
    > **Goal:** Learn some techniques for Data Understanding and ways to visualize data to learn more about it  
**How:** A Python Notebook as usual, during this workshop you'll first learn how to get data from Twitter, parse it and then show it in a Word Cloud. In the end a classifier for which one who's tweeting a certain tweet will be done, comparing J Sjöstedt to J Åkesson.  
**Why:** Learn how to fetch Twitter data in bulk, how to make word-cloud and have some fun.

- **Text Generation** pt 2 ([Jupyter Notebook @ github](https://github.com/afry-south/nlp-competence/blob/master/python/20191017%20-%20%236%20%5BTextGeneration%5D/20191017-Text-Gen-pt-2.ipynb))
    > **Goal:** To finally try out Neural Networks & generate some Shakespeare.  
**How:** A Python Notebook as usual which was mainly code to code yourself (!). We generated words on a char-to-char basis.  
**Why:** Work with Neural Networks & learn tensorflow

- **Text Generation** pt 1 ([Jupyter Notebook @ github](https://github.com/afry-south/nlp-competence/blob/master/python/20190626%20-%20%235%20%5BTextGeneration%5D/20190626-Text-Generation-pt-1.ipynb))
    > **Goal:** To get a greater understanding of Language Models & see how the "old-school" approaches might even beat Neural Networks with much simpler & easier to grasp concepts + some clever tricks.  
**How:** A Python Notebook as usual which was mainly code to code yourself (!). We generated words on a word-to-word and char-to-char basis.  
**Why:** Understand the core to later expand with more advanced techniques such as Neural Networks

- **Neural Networks 101** ([Jupyter Notebook @ github](https://github.com/afry-south/nlp-competence/blob/master/python/20190521%20-%20%234%20%5BNeural%20Networks%20101%5D/20190521-Neural-Net-101.ipynb))
    > **Goal:** To learn the basics of Neural Networks such as the building stones, the flow & some feel of the math.  
**How:** A great Python Notebook that shows theory and then lets you implement a Recurrent Neural Network that performs Machine Translation (Eng -> Swe)  
**Why:** Learn basics in Neural Network so that new layers won't they're recognizable, such as Dropout layer etc.

- **Text Classification** (Kaggle Competetion: Quora) pt 2 ([Jupyter Notebooks & slides @ github](https://github.com/afry-south/nlp-competence/tree/master/python/20190402%20-%20%233%20%5BTextClassification%5D))
    > **Goal:** To classify Quora posts as insincere or sincere (Kaggle competition). A very hard task as not even humans agree.  
**How:** Two implementations that we can tweak directly on Kaggle provided by me.   
**Why:** To see how Kaggle works, test more complex solutions and have some fun by joining a competition

- **Text Classification** (Kaggle Competition: Quora) pt 1 ([Jupyter Notebooks & python files @ github](https://github.com/afry-south/nlp-competence/tree/master/python/20190223%20-%20%232%20%5BTextClassification%5D))
    > **Goal:** To classify Quora posts as insincere or sincere (Kaggle competition). A very hard task as not even humans agree.  
**How:** Implemented a baseline using spaCy which is a widely used tool in the industry. Reached a decent scoring.  
**Why:** This meeting we decided what approaches to use in the future (more practical than theoretical)

- **Text Classification** IMDB ([Jupyter Notebook @ github](https://github.com/afry-south/nlp-competence/blob/master/python/20190204%20-%20%231%20%5BTextClassification%5D/20190204-Text-Classification-IMDB.ipynb), [Google Colab](https://colab.research.google.com/github/afry-south/nlp-competence/blob/master/python/20190204%20-%20%231%20%5BTextClassification%5D/20190204-Text-Classification-IMDB.ipynb))
    > **Goal:** To classify IMDB review as positive or negative  
**How:** We started out with explaining basic concepts, then we implemented classic Machine Learning & ended up looking into Word Embeddings  
**Why:** Fun task where we learned a lot of basics in Machine Learning and Natural Language Processing  
Keywords: `TFIDF, Bag of Words, Preprocessing, Machine Learning, Word2Vec, Word Embeddings, scikit-learn, pandas`  
**Where:** [Google Colab](https://colab.research.google.com/github/afry-south/nlp-competence/blob/master/python/20190204%20-%20%231%20%5BTextClassification%5D/20190204-Text-Classification-IMDB.ipynb) (browser)
