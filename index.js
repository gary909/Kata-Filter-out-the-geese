function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    var myArr = [];
    for (var i = 0; i < birds.length; i++){
        // myArr = myArr + birds[i] + ' ,';
        myArr.push(birds[i]);
    }
        return myArr;
  };

  console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])); // Return ["Mallard", "Hook Bill", "Crested", "Blue Swedish"
  console.log(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])); // Return [["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]