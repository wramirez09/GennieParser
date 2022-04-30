const cheerio = require('cheerio');
var parser = require('parse-address'); 

class ParseContactInfo {


    constructor(contactString){

        this.contactInfo = contactString;

    }

    parse(){

        var parsed = parser.parseLocation(this.contactInfo);
        return parsed
    }


}


module.exports = ParseContactInfo;