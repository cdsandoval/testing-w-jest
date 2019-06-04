import fetch from "../__mock__/isomorphic-geo";

async function geoAPI(resource, id = null) {
  const BASE_URL = "https://jsonplaceholder.typicode.com/";
  let url = BASE_URL + resource;
  if (id) {
    url += `/${id}`;
  }
  const response = await fetch(url);
  return await response.json();
}

export default geoAPI;
