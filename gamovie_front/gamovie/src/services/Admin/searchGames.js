
export default async function searchGames({ keyword }) {
    const ENDPOINT = `https://api.rawg.io/api/games?key=11235c00feb7434b8e710271784a2462&search_precise&search=${keyword}`
    return await fetch(ENDPOINT, {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((response) => {
            const cards = []
            response.results.forEach(content => {
                if(content.name && content.released && content.background_image){
                    cards.push({
                        name:content.name,
                        year: content.released.split('-')[0],
                        image: content.background_image
                    })
                }
            });
            return cards;
        });
}