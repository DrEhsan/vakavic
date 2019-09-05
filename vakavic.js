var request = require('request-promise-native');

module.exports = class Vakavic {
  constructor(options) {
    if (options.api_token == undefined) {
      throw new Error(
        'Vakavic API_TOKEN not initilized please log in to your vakavic account to obtain an API_TOKEN'
      );
    }

    this.api_token = options.api_token;
    this.api_url = 'https://api.vakavic.com';
    this.header = {
      'content-type': 'application/json',
      Authorization: 'Bearer ' + this.api_token
    };

    this.sentenceCount = 5;

    if (options.sentenceCount != undefined) {
      this.sentenceCount = options.sentenceCount;
    }
  }

  classify(module_key, text) {
    let url = this.api_url + '/classifier/classify';

    var options = {
      headers: this.header,
      uri: url,
      method: 'POST',
      rejectUnauthorized: false,
      json: {
        referenceKey: module_key,
        text: text
      }
    };

    return request(options);
  }

  getClassifications(module_key, text) {
    let url = this.api_url + '/classifier/getClassifications';

    var options = {
      headers: this.header,
      uri: url,
      method: 'POST',
      rejectUnauthorized: false,
      json: {
        referenceKey: module_key,
        text: text
      }
    };

    return request(options);
  }

  batchClassifications(module_key, data) {
    let url = this.api_url + '/classifier/batchClassification';

    var options = {
      headers: this.header,
      uri: url,
      method: 'POST',
      rejectUnauthorized: false,
      json: {
        referenceKey: module_key,
        data: data
      }
    };

    return request(options);
  }

  summarizeText(text, sentenceCount = null) {
    let url = this.api_url + '/summarizer/summarizetext';

    var options = {
      headers: this.header,
      uri: url,
      method: 'POST',
      rejectUnauthorized: false,
      json: {
        text: text,
        sentenceCount:
          sentenceCount == null ? this.sentenceCount : sentenceCount
      }
    };

    return request(options);
  }
};
