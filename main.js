var _ = require('underscore');
var data = require('./items.json');

// console.log(data);

// console.log(data.length);

//The below variable is set to the return value of the reduction of the data array's total price divided by the
//number of items within the data object.  The first parameter is set to an initial value of 0 in order to show that
//it will be a number value that is added upon through the iterations.  The second parameter is the actual item being
//added to the total, whose price property is being accessed via dot notation.

var averagePrice = (_.reduce(data, function(total, item) {
	return total + item.price;
}, 0) / data.length).toFixed(2);

// var totalPriceOfItems = 0;

// _.each(data, function(item) {
// 	totalPriceOfItems += item.price;
// });

// var averagePrice = (totalPriceOfItems / data.length).toFixed(2);

console.log(averagePrice);

//The below variable is set to the returned array of values filtered for items whose price is less than or equal to 18 and
//greater than or equal to 14.

var itemsInPriceRange = data.filter(function(item) {
	return item.price <= 18 && item.price >= 14;
});

console.log(itemsInPriceRange);

//The below variable is set to the returned array of values filtered for items whose currency_code is equal to the string 
//"GBP".

var currencyCodeGBP = data.filter(function(item) {
	return item.currency_code === 'GBP';
});

console.log(currencyCodeGBP);

//The below variable is set to the returned array of values filtered for items whose materials array contains the 
//string "wood".

var madeOfWood = data.filter(function(item) {
	return _.contains(item.materials, 'wood');
});

console.log(madeOfWood);

//The below variable is set to the returned array of values filtered for items whose materials array contains 8 or
//more values.

var moreThan8Materials = data.filter(function(item) {
	return item.materials.length >= 8;
});

console.log(moreThan8Materials);

//The below variable is set to the returned array of values filtered for items whose who_made property is set to 
//"i_did".

var madeBySeller = data.filter(function(item) {
	return item.who_made === 'i_did';
});

console.log(madeBySeller);