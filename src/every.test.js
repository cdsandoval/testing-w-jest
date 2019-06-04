import every from "./every";

test("Return true if every item of array is a even number", () => {
  const isTrue = every([2, 4, 6]);
  expect(isTrue).toBeTruthy();
});

test("Return false if some item is not even number", () => {
  const isFalse = every([2, 4, 5]);
  expect(isFalse).toBeFalsy();
});

test("Return a message if array is empty", () => {
  const empty = every([]);
  expect(empty).toEqual("Enter a array with values");
});
