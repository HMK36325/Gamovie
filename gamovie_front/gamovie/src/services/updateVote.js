import config from 'config.json';



export default function updateVote({ vote_id, currentUser, contentType, note }) {
    const ENDPOINT =`${config.apiUrl}votes/${contentType}/${vote_id}?user_note=${note}`;

    return fetch(ENDPOINT, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${currentUser.accessToken}`
        },
    }).then(res => {
        if (!res.ok) throw new Error('Response is NOT ok');
        return res.json()
    }).then(res => {
        const vote = res;
        return vote;
    })
}