async function getCurrentPosition(url) {
  const data =
    url === "pos.coords"
      ? {}
      : url === "pos.coords.longitude"
      ? 0
      : url === "pos.coords.latitude"
      ? 0
      : null;

  return {
    async json() {
      return data;
    }
  };
}

export default getCurrentPosition;
