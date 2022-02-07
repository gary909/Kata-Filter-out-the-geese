function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    return birds.filter((elm) => !geese.includes(elm))
};

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])); // Return ["Mallard", "Hook Bill", "Crested", "Blue Swedish"
console.log(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])); // Return [["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]