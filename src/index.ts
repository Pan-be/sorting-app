import { SortData } from "./SortData"
import { Numbers } from "./Numbers"

const dateArray = [
	new Date(2100, 1, 12),
	new Date(2009, 6, 6),
	new Date(2019, 8, 31),
	new Date(2023, 3, 23),
]

const years = dateArray.map((date) => date.getFullYear())

const numbersData = new Numbers(years)
const sortData = new SortData(numbersData)

sortData.sort()

console.log(numbersData.number)
