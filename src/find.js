function find(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      return array[i];
    }
  }
  return false;
}

export default find;
