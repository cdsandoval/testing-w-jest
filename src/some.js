function some(array) {
  let isTrue = [];
  let i = 0;
  while (array.length >= i) {
    array[i] % 2 == 0 && isTrue.push("true");
    i++;
  }

  return isTrue.length >= 1 ? true : false;
}

export default some;
