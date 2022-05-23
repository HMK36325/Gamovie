import config from "config.json";

export default async function getUsers({ currentUser, page = 0 }) {
    const ENDPOINT = `${config.apiUrl}users/${page}/10`
    return await fetch(ENDPOINT, {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            'Authorization': `Bearer ${currentUser.accessToken}`
        },
    })
        .then((res) => res.json())
        .then((response) => {
            const users = response.content;
            return users;
        });
}