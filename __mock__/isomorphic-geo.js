async function fetch(url) {
  const data =
    url === "https://jsonplaceholder.typicode.com/todos"
      ? []
      : url === "https://jsonplaceholder.typicode.com/todos/1"
      ? { id: 1 }
      : {};

  return {
    async json() {
      return data;
    }
  };
}

export default fetch;
