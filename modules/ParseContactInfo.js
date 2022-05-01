const cheerio = require("cheerio");
let parser = require("parse-address");

class ParseContactInfo {

  constructor(contactString) {
    this.contactInfo = contactString;
  }

  parse() {
    let parsed = parser.parseLocation(this.contactInfo);
    return parsed;
  }
}

module.exports = ParseContactInfo;
