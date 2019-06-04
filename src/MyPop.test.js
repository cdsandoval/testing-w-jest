import MyPop from "./MyPop.js";

test("Passing array and delete last item", () => {
  let array = [1, 2, 3];
  MyPop(array);
  expect(array).toEqual([1, 2]);
});

test("Checking the length of the new array", () => {
  let array = [1, 2, 3];
  let length = array.length;
  MyPop(array);
  expect(array).toHaveLength(length - 1);
});

test("Return the pop value", () => {
  let array = [1, 2, 3];
  const value = MyPop(array);
  expect(value).toEqual(3);
});

test("Return a custom error when the array is empty", () => {
  expect(() => {
    MyPop([]);
  }).toThrowError(new Error("Enter a array with values"));
});
