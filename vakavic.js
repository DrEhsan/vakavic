var request = require('request');


module.exports = class Vakavic {

  constructor(options) {

    if (options.api_token == undefined){
      throw new Error('Vakavic API_TOKEN not initilized please log in to your vakavic account to obtain an API_TOKEN');
    }

    this.api_token = options.api_token;
    this.api_url = "https://api.vakavic.com";
    this.header = {
      'content-type' : 'application/json',
      'Authorization': 'Bearer '+this.api_token
    }

    this.sentenceCount = 5;

    if (options.sentenceCount != undefined){
      this.sentenceCount = options.sentenceCount;
    }
  }

  classify(module_key, text, done){
    let url = this.api_url + "/classifier/classify";

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

    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        done(null, body);
      }
      else{
        done(error)
      }
    });
  }

  getClassifications(module_key, text, done){
    let url = this.api_url + "/classifier/getClassifications";

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

    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        done(null, body);
      }
      else{
        done(error)
      }
    });
  }

  batchClassifications(module_key, text, done){
    let url = this.api_url + "/classifier/batchClassifications";

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

    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        done(null, body);
      }
      else{
        done(error)
      }
    });
  }

  summarizeText(text, done, sentenceCount = null){
    let url = this.api_url + "/summarizer/summarizetext";

    var options = {
      headers: this.header,
      uri: url,
      method: 'POST',
      rejectUnauthorized: false,
      json: {
        text: text,
        sentenceCount: sentenceCount == null ? this.sentenceCount : sentenceCount
      }
    };

    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        done(null, body);
      }
      else{
        done(error)
      }
    });
  }

}