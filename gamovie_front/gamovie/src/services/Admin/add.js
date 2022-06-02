import config from "config.json";

export default async function addContent({ currentUser, contentType, content }) {
    let ENDPOINT = `${config.apiUrl}${contentType}`
    return await fetch(ENDPOINT, {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            'Authorization': `Bearer ${currentUser.accessToken}`
        },
        body: JSON.stringify(content)
    })
        .then((res) => {
            if (!res.ok) {
                return res.text().then(text => {
                    throw new Error(text);
                })
            }
            return true;
        })

}