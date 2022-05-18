import config from "config.json";

export default async function getCards({ content, page = 0, cat = 'not' }) {
  let ENDPOINT = '';
  if (cat === 'not') {
    ENDPOINT = `${config.apiUrl}${content}/${page}/20`
  } else ENDPOINT = `${config.apiUrl}${content}/category/20/${page}?cat=${cat}`


  return await fetch(ENDPOINT, {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      const cards = response.content;
      const totalPages = response.totalPages
      const totalElements= response.totalElements
      return { cards, totalPages, totalElements };
    });
}
