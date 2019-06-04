function myEvery(array) {
  let newArray = [];
  let i = 0;
  while (array.length >= i) {
    array[i] % 2 == 0 && newArray.push("true");
    i++;
  }

  return array.length > 0
    ? array.length == newArray.length
      ? true
      : false
    : "Enter a array with values";
}

export default myEvery;
