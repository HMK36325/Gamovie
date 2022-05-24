import config from "config.json";

export default async function getSearchMovies({ keyword }) {
    const ENDPOINT = `${config.apiUrl}movies/search/${keyword}`;
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
            if (response.length > 10) {
                return response.slice(0, 8)
            } else return response
        });
}