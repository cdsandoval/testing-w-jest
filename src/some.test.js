import some from "./some";

test("Returning true if some value of array is true", () => {
  let isTrue = some([2, 3]);
  expect(isTrue).toBeTruthy();
});

test("Return false is any value of array is false", () => {
  let isFalse = some([1, 3, 5]);
  expect(isFalse).toBeFalsy();
});

test("Return false when array is empty", () => {
  let empty = some([]);
  expect(empty).toBeFalsy();
});
