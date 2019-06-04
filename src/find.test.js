import find from "./find";

test("Return the even number value finded", () => {
  let value = find([1, 3, 4]);
  expect(value).toBe(4);
});

test("Return false if doesnt exist a even number", () => {
  let value = find([1, 3, 5]);
  expect(value).toBeFalsy();
});

test("Return false if array is empty", () => {
  let value = find([]);
  expect(value).toBe(false);
});
