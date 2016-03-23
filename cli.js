#!/usr/bin/env node

'use strict';

var meow = require('meow');
var map = require('lodash.map');
var startCase = require('lodash.startcase');
var thejameskyle = require('./');

meow([
	'Usage',
	'  $ thejameskyle'
]);

var str = map(thejameskyle, function (val, key) {
	return startCase(key) + ': ' + val;
}).join('\n');

console.log(str);
