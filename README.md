Vakavic
===================

Vakavic nodejs API caller.

## What is Vakavic?

For complete information please refer to [Vakavic](https://vakavic.com)

## Installation

```npm install vakavic --save```

## Getting Started

First of all you should login to Vakavic account and obtain your `API_KEY`

### Text summarize

```javascript
const vakavic = require('vakavic');

let _vakavic = new vakavic({
  api_token : 'YOUR_API_TOKEN'
})

let text = "Your Text to summarize";

// sentence count is set to 5
_vakavic
  .summarizeText(text)
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    throw new Error(err);
  });

// sentece count can be set manually : for example here we took 2
_vakavic
  .summarizeText(text, 2)
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    throw new Error(err);
  });
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

let text = "Your Text to classify";

let module_key = "YOUR_MODULE_KEY";

_vakavic
  .classify(module_key, text)
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    throw new Error(err);
  });
```

## getClassifications

```javascript
const vakavic = require('vakavic');

let _vakavic = new vakavic({
  api_token : 'YOUR_API_TOKEN'
})

let text = "Your Text to classify";

let module_key = "YOUR_MODULE_KEY";

_vakavic
  .getClassifications(module_key, text)
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    throw new Error(err);
  });
```

## batchClassifications

```javascript
const vakavic = require('vakavic');

let _vakavic = new vakavic({
  api_token : 'YOUR_API_TOKEN'
})

let textArray = [
  "Your first Text to classify",
  "Your second Text to classify"
];

let module_key = "YOUR_MODULE_KEY";

_vakavic
  .batchClassifications(module_key, textArray)
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    throw new Error(err);
  });
```

