function findMatching(drivers, name) {
    return drivers.filter(driverName => name.toUpperCase() === driverName.toUpperCase())
        
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(driverName => driverName.toUpperCase().indexOf(string.toUpperCase()) === 0)
}

function matchName(driver, string){
    return driver.filter(driverName => driverName. name === string)

}











