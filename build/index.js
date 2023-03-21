"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SortData_1 = require("./SortData");
const Numbers_1 = require("./Numbers");
const dateArray = [
    new Date(2010, 1, 12),
    new Date(2009, 6, 6),
    new Date(2019, 8, 31),
    new Date(2023, 3, 23),
];
const years = dateArray.map((date) => date.getFullYear());
const numbersData = new Numbers_1.Numbers(years);
const sortData = new SortData_1.SortData(numbersData);
sortData.sort();
console.log(numbersData.number);
