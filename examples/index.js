const vakavic = require('./../vakavic');

const _vakavic = new vakavic({
  api_token: 'YOUR_API_TOKEN'
});

let text = 'Your Text to classify';

let module_key = 'YOUR_MODULE_KEY';

// classify a text
_vakavic
  .classify(module_key, text)
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    throw new Error(err);
  });

// get text classifications
_vakavic
  .getClassifications(module_key, text)
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    throw new Error(err);
  });

let textArray = ['Your first Text to classify', 'Your second Text to classify'];

// classify a text array
_vakavic
  .batchClassifications(module_key, textArray)
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    throw new Error(err);
  });

text = `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop publishing
         software like Aldus PageMaker including versions of Lorem Ipsum.`;

// summarize a text. sentece count can be set manually : for example here we took 2
_vakavic
  .summarizeText(text, 2)
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    throw new Error(err);
  });

// summarize a text. sentence count is set to 5
_vakavic
  .summarizeText(text)
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    throw new Error(err);
  });
