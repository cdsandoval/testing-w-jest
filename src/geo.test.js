import geoLocationAPI from "./geo";

jest.fn("isomorphic-geo");

test("geoLocationAPI it should return the object of data", async () => {
  const data = await geoLocationAPI();
  expect(data).toEqual(expect.any(Object));
});

test("geoLocationAPI it should return a number for latitude", async () => {
  const data = await geoLocationAPI("latitude");
  expect(data).toEqual(expect.any(Number));
});

test("geoLocationAPI it should return a number for longitude", async () => {
  const data = await geoLocationAPI("longitude");
  expect(data).toEqual(expect.any(Number));
});

test("geoLocationAPI  it should return a null for any other parameters", async () => {
  const data = await geoLocationAPI("test");
  expect(data).toEqual(null);
});

// test("fetchAPI it should return the correct data for a single resource", async () => {
//   const data = await fetchAPI("todos", 1);
//   expect(data).toHaveProperty("id");
//   expect(data.id).toEqual(1);
// });
