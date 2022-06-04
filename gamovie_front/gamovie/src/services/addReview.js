import config from 'config.json';

export default async function addReview({ contentId, currentUser, movieOrGame, review }) {
    const ENDPOINT = movieOrGame ? `${config.apiUrl}reviews/movies/${currentUser.id}/${contentId}`
        : `${config.apiUrl}reviews/games/${currentUser.id}/${contentId}`

    return await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${currentUser.accessToken}`
        },
        body: JSON.stringify({review})
    }).then(res => {
        if (!res.ok) throw new Error('Response is NOT ok');
        return res.json()
    }).then(res => {
        const review = res;
        return review;
    })
}