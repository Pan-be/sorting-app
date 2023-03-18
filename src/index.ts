import { SortData } from "./sortData"

const dateArray = [
	new Date(2010, 1, 12),
	new Date(2009, 6, 6),
	new Date(2019, 8, 31),
	new Date(2023, 3, 23),
]

const years = dateArray.map((date) => date.getFullYear())

const sortData = new SortData(years)

sortData.sort()

console.log(sortData.data)
