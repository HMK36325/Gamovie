import config from "config.json";

export default async function getSearchGames({ keyword }) {
    const ENDPOINT = `${config.apiUrl}games/search/${keyword}`;
    return await fetch(ENDPOINT, {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            return (!res.ok) ? res = []
                : res.json()
        })
        .then((response) => {
            const cards = response
            return cards;
        });
}