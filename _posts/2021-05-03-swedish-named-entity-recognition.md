---
toc: true
layout: post
description: "Learn how to fine-tune a Flair NER model and quantize a BERT model from Huggingface to achieve SotA performance & a much more efficient model."
categories: [Machine-Learning]
title: "Building a Swedish Named Entity Recognition (NER) model (Flair/Huggingface)"
comments: true
author: Hampus Londögård
---

⚠️ This post is originally available from [blog.londogard](https://blog.londogard.com/nlp/machine-learning/workshop/2021/03/29/swedish-named-entity-recognition.html).

---

Not interested in reading the whole article and just wanna play around with the model(s)? Head over to [londogard.com/ner](https://londogard.com/ner).
![image](https://user-images.githubusercontent.com/7490199/113611097-543f9280-964e-11eb-9e59-bd030c32ad0c.png)
**P.S.** The Flair model is available for simple installation through [huggingface.co's model hub](https://huggingface.co/londogard/flair-swe-ner)


# Building a Swedish Named Entity Recognition (NER) model
At _Londogard_ we aim to employ Natural Language Processing (NLP) in a practical manner. The goal is not to create the models of OpenAI or Google, but rather something that is usable from the get-go and performant leading to a simple to use product.  
In this post I'll cover how we at Londogard developed a State-of-the-Art (SotA) Named Entity Recognition (NER) model for Swedish using Flair & huggingface. :tada:

It all started last weekend when I was allowed into the [streamlit.io](https://streamlit.io/)'s _sharing_ beta.   
If you don't know what streamlit, here's an excerpt from their frontpage:
>**The fastest way to build and share data apps**
>Streamlit turns data scripts into shareable web apps in minutes.  
>All in Python. All for free. No front‑end experience required.

Essentially streamlit is a way to combine backend & frontend into a unified script-like experience where the default UI looks pretty good. On top of this script-like experience streamlit has built a powerful yet simple to use cache system.

> In my opinion creating demos has never been simpler than with streamlit.io

Back to the problem at hands, I wished to deploy a model through streamlit that actually was a meaningful experience where efficiency and performance are combined, according to the Londogard motto.    
As such I embarked on the journey that was to deploy a NER model for _Swedish_ where Swedish actually isn't all to common in NLP. Lately _Kungliga Biblioteket_ has been trying to improve this through their [spaCy-contribution](https://github.com/Kungbib/swedish-spacy), which yet has to be included in spaCy, and their [HuggingFace-contributions](https://huggingface.co/KB/) where we can find BERT, Electra & Albert pre-trained.  
My first idea was to take one of these and fine-tune to finally deploy, but the size of BERT is too large as is. 

What choices are left to allow deploy of these models?
- Distilling ⚗️
- Quantizing
- Fine-tuning ALBERT on NER
	- Performance has been shown to be quite a bit below BERT (7% units) in a paper by KTH, for Swedish.

_So what did I do?_ I did as any other professional and google'd.   
A library I hadn't heard the name of in a year popped up at the top of the results, I was intrigued.  
Flair, a library that was created by Zalando Research, now under the flag `/flairnlp` which in practice means that the core contributor-group has been changed to Humbold-University of Berlin.  
Flair contains the so-called _Flair Embeddings_ which are contextual embeddings of high quality. Flair retains SotA for NER in multiple languages through these and the performance is pretty damn good over all.

Before I dive into the details on how I trained my own model you can find a demo on [londogard.com/ner](https://londogard.com/ner), where the model is deployed through [streamlit.io](https://streamlit.io/).

## Named Entity Recognition and how it can do your bidding
As the name suggests NER is the task to recognize entities in text. Entities can be a lot of different things such as the obvious _Person_ but also _Location_, _Organisation_ & _Time_. More entities exists and they can really become whatever your data allows (_Brand_, _Medicine_ or _Dosage_? You got it!)

**Practical use-cases of NER**
1. Automatic anonymization of data
2. Medical prescription
3. Automatically tag data
	- e.g. News tagged by Organisations, Persons & Locations included

... & much more

In my case I'm simply aiming for the traditional NER model which categorize things like _Location_, _Person_ & _Organisation_.

## Flair(ing) the way to success
Flair is a SotA NLP library developed by [Humboldt University of Berlin](https://www.informatik.hu-berlin.de/en/forschung-en/gebiete/ml-en/) and friends. As mentioned its core contributors are from Humboldt University of Berlin and the whole idea is to provide contextual embeddings. Some of the things provided through Flair:

1. Flair Embeddings
2. (Easily) Stacked Embeddings
	- e.g. combine Transformer, Flair & GloVe for your end-model
3. Easy access to multiple embeddings
	- GloVe, Transformer, ELMo & many more
4. Simple training of high-performant NER (Token Classifier) Model and a Text Classifier model

As mentioned Flair retain SotA in multiple languages for NER, but they do the same for POS.  

**The Language Model**  
If you're curious the simplest Flair embeddings are essentially a Language Model built on Dropout, LSTM & a Linear Layer. Pretty simple.

**The Token Classifier (NER/POS)**  
It's based on a small LSTM-network with a CRF on top. The LSTM exists to create features for the CRF to learn and tag from. This is a very common approach which yields high accuracy. If you're aware of what features you wish to use a pure CRF can be very strong, Stanford NLP library was actually for very long based on a CRF and had SotA, but the manual feature engineering can be expensive & hard.

**The Text Classifier**
Simply a linear layer on top of the embeddings.

**More Models**  
Flair actually supports two other tasks, _Text Regression_ & _Similarity_ but I won't go in to those.

More about how I trained my NER will come a bit further down.
To read more about Flair and how they work please check out their [GitHub](https://github.com/flairNLP/flair) which also links to the papers.

## Swedish data
First of all I had to go find some data and I found crème de la crème in [SUC 3.0](https://spraakbanken.gu.se/en/resources/suc3), because we really do sentence by sentence training in NER it's not the end of the world that the 'free' variant that doesn't require a research licence is scrambled. Unscrambled data would lead to a better model but it's still doable.

But as Jeremy Howard proposes, start with small and simple data then expand into your full task. SUC 3.0 is pretty large and slow to train. With some fast googling I found a saviour, _klintan_. Klintan has created a open Swedish NER dataset based on Webbnyheter 2020 from Språkbanken, it's semi-manually annotated. This means that he first based it on _Gazetters_, essentially dataset(s) of entities, and then manually reviewed the data with two different native Swedish Speakers. More people have later added some improvements on top of that, find the full dataset [here](https://github.com/klintan/swedish-ner-corpus), but please note that _it's much smaller_ than SUC 3.0.   
After finding this dataset I read more into Flair and I found out that they actually provide this dataset through their API and in this dataset we have 4 categories PER, ORG, LOC and MISC.

With these two datasets in mind I went ahead to train.

## Training the flair
First let me say the [documentation](https://github.com/flairNLP/flair/tree/master/resources/docs) is actually pretty good!
First part is to set up the `Corpus`.

### Setting up the Corpus / Dataset
**The built-in _klintan/ner-swedish-corpus_**
```python
# 1. get the corpus
corpus: Corpus = NER_SWEDISH()
print(corpus)

# 2. what tag do we want to predict?
tag_type = 'ner'

# 3. make the tag dictionary from the corpus
tag_dictionary = corpus.make_tag_dictionary(tag_type=tag_type)
print(tag_dictionary)
```
**Custom dataset (SUC 3.0, in my case scrambled)**  
Remember to convert the SUC tags into a IOB format before training. Emil Stenström has kindly created a simple Python-script for this available through [github.com/EmilStenstrom/suc_to_iob](https://github.com/EmilStenstrom/suc_to_iob). First transform the data and later you can run the following code
```python
columns = {0: 'text', 1: 'ner'}

# this is the folder in which train, test and dev files reside
data_folder = 'path/to/data/suc'

# init a corpus using column format, data folder and the names of the train, dev and test files
corpus: Corpus = ColumnCorpus(data_folder, columns, train_file='train.txt', test_file='test.txt', dev_file='dev.txt')

# 2. what tag do we want to predict?
tag_type = 'ner'

# 3. make the tag dictionary from the corpus
tag_dictionary = corpus.make_tag_dictionary(tag_type=tag_type)
print(tag_dictionary)
```
With this in mind we're ready to set up our model for training.

### Model Setup
Our model will build on `FlairEmbeddings` (e.g. contextual embeddings) and `BytePairEmbeddings` which are a bit like classic `WordEmbeddings` but done on BPE-tokenized text. This is a really interesting approach which achieves similar performance as `fastText` using ~ 0.2 % of the total size (11mb vs 6gb).   
The model itself will use a LSTM with a hidden size of 256 and a CRF classifier on top.
```python
# 4. initialize embeddings
embedding_types = [
	# WordEmbeddings('sv'), # uncomment to add WordEmb
	BytePairEmbeddings('sv'),
	FlairEmbeddings("sv-forward"),
	FlairEmbeddings("sv-backward")
]

embeddings: StackedEmbeddings = StackedEmbeddings(embeddings=embedding_types)

# 5. initialize sequence tagger
tagger: SequenceTagger = SequenceTagger(hidden_size=256,
										embeddings=embeddings,
										tag_dictionary=tag_dictionary,
										tag_type=tag_type,
										use_crf=True)
```

### Training the model
Because I run through google colab and the machine can be terminated any second I run using `checkpoint=True` which means you can continue training where you left off. My models are saved to my Google Drive, real handy! 
>Pro-tip: use `checkpoint=True` in combination with Google Drive on your Google Colab.
```python
# 7. start training
trainer.train('drive/MyDrive/path/to/model/save/',
				learning_rate=0.1,
				# set chunk size to lower memory requirements
				#mini_batch_chunk_size=16,
				mini_batch_size=32,
				checkpoint=True,
				embeddings_storage_mode='none', # only required for SUC 3.0 which grows too large
				#batch_growth_annealing=True,
				#anneal_with_restarts=True,
				max_epochs=150)
```
### Loading model from checkpoint
```python
trainer = ModelTrainer.load_checkpoint('drive/MyDrive/path/to/model/save/checkpoint.pt', corpus)
```
And that's it!

## Result
For me the results looks really good and close to what I expected, I had hoped that Flair would achieve at least 0.88+ F1 but 0.855 isn't too bad. The size, speed and simplicity of Flair makes it a great contender!

|Dataset|Size|Avg F1|
|-|-|-|
|klintan/swedish-ner-corpus|320MB|~**0.89**|
|SUC 3.0 (PER, LOC & ORG)|320MB|~**0.89**|
|SUC 3.0 (PER, LOC, ORG, TME, MSR, ...)|320MB|**0.855**|
|SUC 3.0 (PER, LOC, ORG, TME, MSR, ...) Quantized|80MB|**0.853**|
|SUC 3.0 (PER, LOC, ORG, TME, MSR, ...) w/ ALBERT|50MB|**0.85** (via [KTH](http://kth.diva-portal.org/smash/get/diva2:1451804/FULLTEXT01.pdf))|
|SUC 3.0 (PER, LOC, ORG, TME, MSR, ...) w/ BERT ([KungBib](https://github.com/Kungbib/swedish-bert-models#bert-base-fine-tuned-for-swedish-ner))|480MB|**0.928**|
|SUC 3.0 (PER, LOC, ORG, TME, MSR, ...) w/ BERT Quantized|120MB|**0.928**|

I believe it's important to note that Quantized models are also much faster running ~ 4 times faster (avg 360ms went to 80ms on a CPU for flair).  
Quantization updates the f32 into int8 which allows the model to more efficiently utilize CPU and the ONNX-runtime also makes the whole model better at using CPU-instructions.


## Deploying on streamlit.io/sharing
And for the final part! :tada:
First you need a new public repository on GitHub with the streamlit & model code. This requires to set up a `requirements.txt` with all necessary dependencies.

Then you need to figure out how you'll host your model if it's too large. I found GitHub LFS to work out decently, but the cap was pretty small (1GB / Month) and I broke the limit on my 3rd model. I went ahead and registered on [Backblaze](backblaze.com) which has great reviews, but I think the best solution in my shoes would be to host it through HuggingFace Model storage (free if public!).
**edit:** I actually ended up storing the flair model on [huggingface.co/londogard/flair-swe-ner](https://huggingface.co/londogard/flair-swe-ner) 🤗.

Setting up the script itself was quite easy for Flair.
```python
# load tagger for POS and
@st.cache(allow_output_mutation=True)
def load_model():
	tagger = SequenceTagger.load('best-model-large-data.pt')
	return tagger

@st.cache(allow_output_mutation=True, hash_funcs={SequenceTagger: lambda  _: None})
def predict(model, text):
	manual_sentence = Sentence(manual_user_input)
	model.predict(manual_sentence)
	return render_ner_html(manual_sentence, wrap_page=False)

tagger = load_model()

st.title("Swedish Named Entity Recognition (NER) tagger")
st.subheader("Created by [Londogard](https://londogard.com) (Hampus Londögård)")
st.title("Please type something in the box below")
manual_user_input = st.text_area("")

if len(manual_user_input) > 0:
	sentence = predict(tagger, manual_user_input)
	st.success("Below is your tagged string.")
	st.write(sentence, unsafe_allow_html=True)
```
It's important to note how I've placed the caching solution. I both cache the model loading & predictions to keep it as speedy as possible.   

The `allow_output_mutation` option skips hashing the output to validate that the cache is correct, we don't care if output has been modified really.

The `hash_funcs={SequenceTagger: lambda  _: None}` is **incredibly important**.   
The flair model are pretty slow to hash, especially if quantized. It's possible to use `id` which is a unique ID for the python object that lasts the full lifetime, but because I know that the model wont change I simply use `lambda _: None` to not do any lookup at all.  
If the model input would change in-between using `id` is the best approach. Note that neither of this approaches are any good if you wanna compare an object to another (e.g. two string inputs), there we should just keep standard hashing.

## Outro
I trained Flair embeddings which is a much simpler approach than Transformers and achieved almost SotA while having a much smaller & simpler model (~2/3rd of the size). But in the end I was very impressed by how well quantization applies for CPU utilization so I also applied the same approach for BERT-ner by KB, where I even did a ONNX Quantization which has been shown to be even more effective than PyTorch own quantization, but then again it requires the ONNX runtime.

Both models are available on the same device / streamlit configuration, find them on [londogard.com/ner](https://londogard.com/ner).  
The flair model is available through HuggingFace 🤗 through the following: [londogard (huggingface.co)](https://huggingface.co/londogard).

Thanks for this time,
Hampus Londögård
