"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Numbers_1 = require("./Numbers");
const Strings_1 = require("./Strings");
const dateArray = [
    new Date(2100, 1, 12),
    new Date(2009, 6, 6),
    new Date(2019, 8, 31),
    new Date(2023, 3, 23),
];
const years = dateArray.map((date) => {
    return date.getFullYear();
});
const numbersData = new Numbers_1.Numbers(years);
numbersData.sort();
console.log(numbersData.number);
const strings = new Strings_1.Strings("japa");
strings.sort();
console.log(strings.str);
