import getCurrentPosition from "../__mock__/isomorphic-geo";

async function geoLocationAPI(resource = null) {
  let BASE_URL = "pos.coords";
  if (resource) {
    BASE_URL = `${BASE_URL}.${resource}`;
  }

  const response = await getCurrentPosition(BASE_URL);
  return await response.json();
}

export default geoLocationAPI;
