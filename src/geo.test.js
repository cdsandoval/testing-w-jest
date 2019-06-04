import fetchAPI from "./geo";

jest.fn("isomorphic-geo");

test("fetchAPI it should return the correct data", async () => {
  const data = await fetchAPI("todos");
  expect(data).toEqual(expect.any(Array));
});

test("fetchAPI it should return the correct data for a single resource", async () => {
  const data = await fetchAPI("todos", 1);
  expect(data).toHaveProperty("id");
  expect(data.id).toEqual(1);
});
