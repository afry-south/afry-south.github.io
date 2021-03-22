---
title: "A simple FAQ search engine in Swedish using fastText & Smooth Inverse Frequency"
categories:
  - Machine-Learning
tags:
  - nlp
  - unsupervised
  - faq
  - covid
  - python
---
# CoViD-19 Swedish QA

Exclaimer: To get implementation & md directly in an executable environment, jump onto the google colab [here](https://colab.research.google.com/github/londogard/nlp-projects/blob/master/python/CoViD_19_QA.ipynb).

I decided to scratch a small itch I've had for a while now - creating a search engine using an unsupervised approach. The final product, or the first iteration rather, ended up pretty good and I wanted to share what I've done so far.

### Introduction to the problem and requirements

An unsupervised approach where we never edit the data nor supply any manually annotated data? Every Data Scientist dream I suppose. There's a reason as of why supervised approaches generally result in better performance but there is some light at the end of the tunnel for unsupervised approaches too.

Let's begin with my own requirements, which are mainly created to only keep the fun problem-solving left.

- The end-product must be unsupervised
  - No manually annotated data
  - No heuristic applied (at least in first iteration)
- It should be light enough to run on a Raspberry Pi later on (hopefully on the JVM to keep it simple with my back-end)
- Must be Swedish all the way through - no translations (English models you can transfer knowledge from tends to be stronger, but I want to keep this fun!)

With this in mind I set out to build my own FAQ search engine.

**What is required to answer questions using a FAQ?** We need to find the most relevant Q/A to the question posed. 

**How do we do this?** There is numerous types of ways to do this unsupervised. I'll account for a few here:

1. Latent Dirichlet Allocation (LDA) which is a way to find topics through clever statistical analysis (basically soft clusters of documents)
2. Embedding and [Cosine Similarity](https://en.wikipedia.org/wiki/Cosine_similarity), find the distance between the two arrays of numbers in the embedded space. One can also apply Euclidean Distance which isn't especially good because of [Curse of Dimensionality](https://en.wikipedia.org/wiki/Curse_of_dimensionality). Other possible approaches includes [Word Mover Distance](https://arxiv.org/pdf/1912.00509.pdf). 
3. Simple word counting and Bag of Words

### Tools chosen

After a little research I found a few tools which fit my need. 

**fastText**

fastText that came out of Facebook AI Research (FAIR) and [this](https://arxiv.org/abs/1607.04606) paper. It's a type of Word Embeddings where also subwords are embedded through ngrams of characters, this means that we are able to embedd words that are out of vocabulary, which can be the reason because of either misspelling or just a missing word.
On their [homepage](https://fasttext.cc/) they have a plethora of models including a Swedish one that has been derived from Wikipedia, pretty awesome!

**Smooth Inverse Frequency**

Smooth Inverse Frequency (SIF) is an algorithm to embed sentences which was proposed in ["A Simple but Tough-To-Beat Baseline for Sentence Embeddings"](https://openreview.net/pdf?id=SyK00v5xx) in 2017. In its essence they propose to embed the sentence using a weighted average and thereafter modify them a bit using PCA/SVD.

**Folkhälsomyndigheten FAQ**

Finally I need the FAQ to use, in my case it's Covid-19 FAQ from Folkhälsomyndigheten. It was parsed into pandas dataframes using requests & BeautifulSoup4 (bs4).

### End result

So after all this was figured out I sat down an afternoon and cooked some code together, the result ended up more impressive than I had imagined. The questions posed are being responded with pretty good results. I'm especially impressed by question about _astma_, _son_ and _regler_. Here's a few of them:

```
> Hur sjuk blir jag?

Hur sjuk blir man av covid-19? - 0.98
Hur länge är man sjuk av covid-19? - 0.97
Hur lång är inkubationstiden? - 0.81
```

```
> Hur vet jag om det är astma?

Hur vet jag om mina symtom beror på pollenallergi eller på covid-19? - 0.63
Hur sjuk blir man av covid-19? - 0.53
Hur länge är man sjuk av covid-19? - 0.53
```

```
> Hur förklarar jag corona för min son?

Hur pratar man med barn om det nya coronaviruset? - 0.58
Hur lång är inkubationstiden? - 0.53
Hur sjuk blir man av covid-19? - 0.49
```

```
> Hur minskar vi spridningen i sverige?

Hur gör ni för att mäta förekomsten av covid-19 i samhället? - 0.65
Hur övervakar ni på Folkhälsomyndigheten spridningen av covid-19? - 0.57
Hur stor är dödligheten till följd av covid-19? - 0.56
```

```
> Vad för regler finns?

Vad gäller för olika verksamheter? - 0.76
Vad gäller för handeln? - 0.75
Vad är covid-19? - 0.71
```

One can directly note the correlation of the beginning. It seems like the first word has a high correlation with the most similar question. Weird. Removing stop words could probably improve this, but that'd be for the second implementation.

### Further improvements for iteration 2, 3 and beyond!

**Pre-processing**

As mentioned right above we can apply some basic pre-processing  such as removing stop words. In reality this should be handled by SIF but looking at our similarity scores there's a 1-1 relation between the first word of the sentence. 

Other improvements worth trying out is lemmatizing or stemming the words ("cutting them to the root" in simple terms) and further using a better tokenization is worth trying out (currently splitting on whitespace). _spaCy_ offers a strong tokenizer, but I haven't tried it out for Swedish yet. Once again _fastText_ should handle this but it's worth trying out if it improves or keep the result at the same level.

**Different Embedding Techniques**

There exist a certain Sentence Embedding that's basically made for this task - MULE (Multimodal Universal Language Embeddings). MULE is even multilingual but unfortunately they're not able to embed Swedish so we'd require a translation from Swedish to one of the 16 languages supported by MULE. This means that it is out of the question because of my requirements, but could still be fun to check out. 

Other embeddings such as FLAIR (by Zalando), BERT (using BERT-as-a-service) or even training my own embeddings (perhaps using StarSpace) could prove interesting also.

**Completely other technique**

I mentioned first of all LDA, and I think LDA could be interesting. Most often LDA is applied to larger documents but as with everything it is never wrong to try out and verify the results. 

Supervised approaches would certainly be able to show us some good performance but that requires annotating data in one way or another which is a boring task - but very important. Perhaps I'll revisit and label some data, with todays Transfer Learning we can achieve higher accuracy with less data using other pre-trained  Language Models such as BERT or Multifit (from Ulmfit).

### Ending words

This was a really fun task and I'm happy that I tried it out. I'm sure I'll revisit and improve it further by applying some of the possible improvements. Further I think I might actually try to do this for all FAQs available by our authorities to create a "Multi FAQ" which could prove pretty cool. With more data the results should also be better.

And as an ending note my model ended up using 2.5-3 GB of memory during run-time which means it's possible to run on my Raspberry Pi 4! Further reduction of size can be done by removing the most uncommon words in the vocabulary (vocab is 2M words, which is very large). I applied a dimension reduction using the built in version of _fastText_ (ending up using d=100 and still achieving good search results).

The implementation is available on [Londogard GitHub](https://github.com/londogard/nlp-projects/blob/master/python/CoViD_19_QA.ipynb).

Thanks for this time, I'll be back with more!  
~Hampus

P.S  
This was actually posted a few weeks ago on my [LinkedIn](https://www.linkedin.com/posts/hampus-lond%C3%B6g%C3%A5rd-6177aa79_londogardnlp-projects-activity-6660568021008035840-Lxic) & [londogard](https://londogard.com/blog/4).  
Make sure to connect on LinkedIn!