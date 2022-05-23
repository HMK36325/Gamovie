import config from "config.json";

export default async function ban({ currentUser, isBan, id }) {
    let ENDPOINT = `${config.apiUrl}users/`
    ENDPOINT += isBan ? `ban/${id}` : `unban/${id}`
    return await fetch(ENDPOINT, {
        method: "PUT",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            'Authorization': `Bearer ${currentUser.accessToken}`
        },
    })
        .then((res) => {
            if (!res.ok) throw new Error('Response is NOT ok');
            return res;
        })

}