function newJoin(element, array) {
  let string = array[0];
  for (let i = 1; i < array.length; i++) {
    string += element + array[i];
  }
  return string;
}

export default newJoin;
