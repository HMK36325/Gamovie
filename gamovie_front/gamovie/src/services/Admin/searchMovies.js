
export default async function searchMovies({ keyword }) {
    const ENDPOINT = `https://api.themoviedb.org/3/search/movie?api_key=a4c531f7bbb5934a92b6a4b446b6bcc0&language=es&page=1&query=${keyword}`
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
            if (response.results) response.results.forEach(content => {
                if (content.title && content.poster_path && content.overview && content.release_date) {
                    const image = `https://image.tmdb.org/t/p/w500${content.poster_path}`
                    cards.push({
                        name: content.title,
                        synopsis: content.overview,
                        year: content.release_date.split('-')[0],
                        image: image
                    })
                }
            });

            return cards;
        });
}