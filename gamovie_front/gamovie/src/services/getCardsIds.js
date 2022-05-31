import config from "config.json";

export default async function getCardsIds({ content }) {
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
            const cardsIds = []
            response.forEach(card => {
                cardsIds.push(card.id)
            });
            const totalPages = response.length

            return { cardsIds, totalPages };
        });
}
