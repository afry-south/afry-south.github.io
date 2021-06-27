---
toc: true
description: "An overview of how we matched assignments to resumes during Innovation Day 2021 @ AFRY"
categories:
  - Machine-Learning
tags:
  - nlp
title: "Matching Resumes to Assignments using Machine Learning"
comments: true
---


**The problem:**
- We got **a lot** of resumes
- We got **a lot** of assignments

Someone must find a good combination, and that someone often is restricted by its knowledge of the local resumes.   
What if we at AFRY could have a better way to find good candidates across the organisation, from Malmö to Brazil? It's a much more remote-friendly world today after all.

**The solution:**  
Automate the problem away.

We decided to approach this through Machine Learning. 

## The Grand Idea
We had a grand bold idea:
![image](https://user-images.githubusercontent.com/7490199/122574314-d33e4780-d04f-11eb-8598-cec33d1114d8.png)
This obviously never made it... But we did get something done!   

Let's start off with what went wrong:
1. Not being allowed to use resumes by AFRY
2. Not having a good dataset
3. Only having a single day

We had to think fast.  
A decision to quickly gather data and then constructing MVPs was made and off we went!

## Data
We gathered data all over the place but finally landed on 
1. Using Assignments from AFRY
2. Using resumes from a Kaggle dataset

We then proceeded to save keywords from assignments that we extracted ourself. These could be turned into gazetteers which could train a model on a Sequence Labeling Task, like Entity Extraction or in our case a Keyword Identifier.

> Gazetteers is a list of known entities that is then used to create a dataset, or rather kickstart the creation of a dataset.

With this data in mind we went on to the implementation.

## Implementation
Loosing all that time to dataset and validating what we could use we had to be quick. Neural Networks are slow and requires a lot of data so we figured we keep it simple.  

Two approaches where done:
1. TfIdf Vectorization & Distance Validation
2. KMeans Cluster

We used some minor preprocessing and looked into basic classic techniques like:
- Stemming (remove the ending of words, e.g. `ending` would be `end`)
- Lemmatization (a more hardcore variant of above)
- Lower-case
- Remove weird characters

We could've used some more techniques like:
- Spell correction (take outliers)
- Better tokenization
- ...& more

And I (Hampus) cheated a bit and actually ran a Sequence Labeling task for keywords which didn't work out (probably because no time was spent on it).  
This approach was built upon:
1. Pretrained Embeddings
2. A small RNN (Recursive Neural Network) with a CRF (Conditional Random Field) as classification layer at the end.

## Possible Improvements

- Better data
- Better Machine Learning classifiers
- More data processing
- BM25 rather than TFIDF

## End Result
Without _any_ labeled data we actually managed to get some pretty good results!

![image](https://user-images.githubusercontent.com/7490199/122575966-83f91680-d051-11eb-9c04-0917422bd2ec.png)


Test it [here](https://share.streamlit.io/afry-south/mix-match-cv/main/deployment.py) (streamlit).

Thanks for this time,
Hampus & the team