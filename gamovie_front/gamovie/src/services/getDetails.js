import config from "config.json";

export default async function getDetails({ path }) {
    const ENDPOINT = `${config.apiUrl}${path}`;
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