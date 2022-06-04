import config from 'config.json';

export default async function deleteReview({ contentId, currentUser, movieOrGame}) {
    const ENDPOINT = movieOrGame ? `${config.apiUrl}reviews/movies/${contentId}`
        : `${config.apiUrl}reviews/games/${contentId}`

    return await fetch(ENDPOINT, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${currentUser.accessToken}`
        }
    }).then(res => {
        if (!res.ok) throw new Error('Response is NOT ok');
        return true;
    })
}