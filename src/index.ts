import { SortData } from "./SortData"
import { Numbers } from "./Numbers"
import { Strings } from "./Strings"

const dateArray = [
	new Date(2100, 1, 12),
	new Date(2009, 6, 6),
	new Date(2019, 8, 31),
	new Date(2023, 3, 23),
]

const years = dateArray.map((date) => {
	return date.getFullYear()
})

const numbersData = new Numbers(years)
const sortNumber = new SortData(numbersData)

sortNumber.sort()

console.log(numbersData.number)

const strings = new Strings("japa")
const sortStrings = new SortData(strings)

sortStrings.sort()
console.log(strings.str)
