function MyPop(array) {
  try {
    let value = array[array.length - 1];
    array.length -= 1;
    return value;
  } catch (error) {
    throw new Error("Enter a array with values");
  }
}

export default MyPop;
