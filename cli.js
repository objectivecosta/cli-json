#!/usr/bin/env node
const fs = require("fs");
const data = fs.readFileSync("/dev/stdin", "utf-8");

var json = JSON.parse(data);

const [,, ...args] = process.argv;

const evaluatee = args[0];

var value;

if (evaluatee.indexOf("[") === 0) {
    value = eval(`json${evaluatee}`);
} else {
    value = eval(`json.${evaluatee}`);
}


console.log(`Evaluated: ${value}`);