function techList(arr, nome) {
  if (arr.length === 0) {
    return 'Vazio!';
  }

  let sortedList = arr.sort();
  let objectList = [];
  for (let i = 0; i < sortedList.length; i += 1) {
    let newObject = {
      tech: sortedList[i],
      name: nome
    };
    objectList.push(newObject);
  }
  return objectList;
}

module.exports = techList;