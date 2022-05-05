const ENDPOINT = "http://localhost:8080/movies";

export default function getMovies() {
  return fetch(ENDPOINT)
    .then((res) => res.json())
    .then((response) => {
      const data = response;
      return data;
    });
}
