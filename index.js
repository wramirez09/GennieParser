const cheerio = require('cheerio');
const fs = require('fs');
const pathToDataFile = "data/data.html";
const parseContactInfo = require("./modules/ParseContactInfo");


class App {

    constructor(cheerio, pathToDataFile, parseContactInfo){
        this.pathToDataFile = pathToDataFile;
        this.cheerio = cheerio;
        this.$ = this.cheerio.load(fs.readFileSync(pathToDataFile));
        this.parsedData = [];
        this.rows = this.$(".div-table-row"); 
        
    }

    getData() {

        for (let index = 0; index < this.rows.length; index++) {

            const element = this.$(this.rows[index]).html();
            const elementToArray = element.split("\n"); 
            const bankNameRowString = elementToArray[1];
            // data 
            const bankName = this.$( bankNameRowString ).text().trim();
            
            const fullContactInfo = this.$(element.split("</div>")[1]).text().trim();
            const contactParsed = this.parseContactInfo = new parseContactInfo(fullContactInfo).parse();
            const bankId = this.$(element.split("</div>")[2]).text().trim();

            let payload = {
                bankId,
                bankName,
                contactInfo:contactParsed
            }
            this.parsedData.push(payload);
        }
        console.log(this.parsedData);
        return this.parsedData

    }
}

module.exports = () => new App(cheerio, pathToDataFile, parseContactInfo) ;

