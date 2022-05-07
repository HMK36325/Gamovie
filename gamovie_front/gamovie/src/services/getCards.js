import config from "config.json";

export default async function getCards({content}) {
  const ENDPOINT = `${config.apiUrl}${content}`;
  return await fetch(ENDPOINT, {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      const data = response;
      return data;
    });
}
