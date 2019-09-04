vakavic
===================

vakavic nodejs API caller.

## What is vakavic?

For complete information please refer to [vakavic](https://vakavic.com)

## Installation

```npm install vakavic --save```

## Getting Started

First of all you should login to vakavic account and obtain your `API_KEY`

### Text summarize

```javascript
const vakavic = require('vakavic');

let _vakavic = new vakavic({
  api_token : 'YOUR_API_TOKEN'
})

let text = "Your Text to summarize";

// sentence count is set to 5
_vakavic.summarizeText(text, function(error, response){
  if (error){
    throw new Error(error);
  }

  console.log(response)
})

// sentece count can be set manually : for example here we took 2
_vakavic.summarizeText(text, 2, function(error, response){
  if (error){
    throw new Error(error);
  }

  console.log(response)
})
```

### Classification

This method uses to classify api call of text

you have to make a module inside vakavic account and get your unique module key

## classify

```javascript
const vakavic = require('vakavic');

let _vakavic = new vakavic({
  api_token : 'YOUR_API_TOKEN'
})

let text = "Your Text to summarize";

let module_key = "YOUR_MODULE_KEY";

_vakavic.classify(module_key, text, function(error, response){
  if (error){
    throw new Error(error);
  }

  console.log(response)
})
```

## getClassifications

```javascript
const vakavic = require('vakavic');

let _vakavic = new vakavic({
  api_token : 'YOUR_API_TOKEN'
})

let text = "Your Text to summarize";

let module_key = "YOUR_MODULE_KEY";

_vakavic.getClassifications(module_key, text, function(error, response){
  if (error){
    throw new Error(error);
  }

  console.log(response)
})
```

## batchClassifications

```javascript
const vakavic = require('vakavic');

let _vakavic = new vakavic({
  api_token : 'YOUR_API_TOKEN'
})

let text = "Your Text to summarize";

let module_key = "YOUR_MODULE_KEY";

_vakavic.batchClassifications(module_key, text, function(error, response){
  if (error){
    throw new Error(error);
  }

  console.log(response)
})
```

