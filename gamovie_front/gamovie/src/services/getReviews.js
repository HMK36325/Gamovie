import config from 'config.json';

export default async function getReviews({ currentUser, contentType, contentId }) {
    const ENDPOINT = contentId
        ? `${config.apiUrl}reviews/${contentType}/${contentType.slice(0, -1)}/${contentId}`
        : `${config.apiUrl}reviews/${contentType}/user/${currentUser.id}`

    return await fetch(ENDPOINT, {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
    })
        .then(res => {
            if (!res.ok) return [];
            return res.json()
        }).then(res => {
            const reviews = res;
            return reviews;
        })
}