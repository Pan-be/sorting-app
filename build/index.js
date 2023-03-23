"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SortData_1 = require("./SortData");
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
const sortNumber = new SortData_1.SortData(numbersData);
sortNumber.sort();
console.log(numbersData.number);
const strings = new Strings_1.Strings("japa");
const sortStrings = new SortData_1.SortData(strings);
sortStrings.sort();
console.log(strings.str);
