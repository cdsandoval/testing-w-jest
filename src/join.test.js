import newJoin from "./join";

test("Return the the value of the string", () => {
  let string = newJoin("-", ["h", "o", "l", "a"]);
  expect(string).toBe("h-o-l-a");
});

test("Return a typeof string", () => {
  let string = newJoin("-", ["h", "o", "l", "a"]);
});
