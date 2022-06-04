import config from 'config.json';

export default async function updateReview({ contentId, currentUser, movieOrGame, review }) {
    const ENDPOINT = movieOrGame ? `${config.apiUrl}reviews/movies/${contentId}`
        : `${config.apiUrl}reviews/games/${contentId}`

    return await fetch(ENDPOINT, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${currentUser.accessToken}`
        },
        body: JSON.stringify({ review })
    }).then(res => {
        if (!res.ok) throw new Error('Response is NOT ok');
        return res.json()
    }).then(res => {
        const review = res;
        return review;
    })
}