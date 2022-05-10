import config from "config.json";

export default async function getCards({ content, page = 0 }) {
  const ENDPOINT = `${config.apiUrl}${content}/${page}/12`;
  return await fetch(ENDPOINT, {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response)
      const cards = response.content;
      const isLast = response.last
      return {cards, isLast};
    });
}
