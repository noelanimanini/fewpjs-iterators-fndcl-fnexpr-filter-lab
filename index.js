// Code your solution here
let findMatching = (drivers, string) => {
   return drivers.filter(names => names.toLowerCase() === string.toLowerCase())
}

let fuzzyMatch = (drivers, string) => {
    return drivers.filter(names => names.match() === string.match())
}

let matchName = (drivers, string) => {
    return drivers.filter(record => record.name === string)
}

// function matchName(drivers, string){
//     return drivers.filter(driver => driver.name === string)
// }