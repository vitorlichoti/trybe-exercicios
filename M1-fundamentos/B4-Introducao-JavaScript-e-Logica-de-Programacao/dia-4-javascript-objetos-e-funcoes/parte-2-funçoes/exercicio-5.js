function knowRepeated(array) {
  let data = [];
  array = array.sort();
  let dataAll = [];
  biggest = 0;
  numBig = 0;
  for (let c in array) {
    if (c == 0) {
      data.push(array[c]);
    }
    else {
      if (array[c] == array[c - 1]) {
        data.push(array[c]);
      }
      else{
          dataAll.push(data);
          data = [];
          data.push(array[c]);
      }
    }
  }
  dataAll.push(data);
  for (i in dataAll) {
    if (i == 0) {
      biggest = dataAll[i].length;
      numBig = dataAll[i][0];
    }
    else {
      if (dataAll[i].length > biggest) {
        biggest = dataAll[i].length;
        numBig = dataAll[i][0];
      }
    }
  }
  return numBig
}

console.log(knowRepeated([5, 5, 8, 8, 8, 2, 3]));