import config from "config.json";

export default async function deleteContent({ currentUser,contentType, id }) {
    let ENDPOINT = `${config.apiUrl}${contentType}/${id}`
    return await fetch(ENDPOINT, {
        method: "DELETE",
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