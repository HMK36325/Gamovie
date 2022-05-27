import config from "config.json";

export default async function getSearchMovies({ keyword, size = 8 }) {
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
            if (response.length > size) {
                return response.slice(0, size)
            } else return response
        });
}