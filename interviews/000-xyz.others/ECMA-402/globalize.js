// Include the Globalize library
var Globalize = require('globalize');

// Include the CLDR data
var cldrData = require('cldr-data');

// Loads the supplemental data
Globalize.load(cldrData.entireSupplemental());

// Loads the data of the specified locales
Globalize.load(cldrData.entireMainFor('it', 'en', 'en-GB'));








// 30th of June 2016
var date = new Date(2016, 5, 30);

// "30/6/2016"
console.log(Globalize('it').formatDate(date));

// "6/30/2016"
console.log(Globalize('en').formatDate(date));

// "30/06/2016"
console.log(Globalize('en-GB').formatDate(date));


var number = 1302.93;

// "1.302,93"
console.log(Globalize('it').formatNumber(number));

// "1,302.93"
console.log(Globalize('en').formatNumber(number));

// "1,302.93"
console.log(Globalize('en-GB').formatNumber(number));



var enGlobalize = Globalize('en');

var value = 229.431;

var usdFormatter = enGlobalize.currencyFormatter('USD');
// "$229.43"
console.log(usdFormatter(value));

var eurFormatter = enGlobalize.currencyFormatter('EUR', {
  style: 'code',
  round: 'ceil'
});
// "229.44 EUR"
console.log(eurFormatter(value));




//var enGlobalize = Globalize('en');

var numberParser = enGlobalize.numberParser();
// "229.431"
console.log(numberParser('229,431.00'));

var percentParser = enGlobalize.numberParser({style: 'percent'});
// "0.5341"
console.log(percentParser('53.41%'));


// Set default locale
//var enGlobalize = Globalize('en');

var dayFormatter = enGlobalize.relativeTimeFormatter('day');
// "yesterday"
console.log(dayFormatter(-1));

var yearFormatter = enGlobalize.relativeTimeFormatter('year');
// "next year"
console.log(yearFormatter(1));







