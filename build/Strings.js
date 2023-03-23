"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strings = void 0;
class Strings {
    constructor(str) {
        this.str = str;
    }
    get length() {
        return this.str.length;
    }
    compare(indexLeft, indexRight) {
        return (this.str[indexLeft].toLowerCase() > this.str[indexRight].toLowerCase());
    }
    swap(indexLeft, indexRight) {
        const letters = [...this.str];
        const leftArg = letters[indexLeft];
        letters[indexLeft] = letters[indexRight];
        letters[indexRight] = leftArg;
        this.str = letters.join("");
    }
}
exports.Strings = Strings;
