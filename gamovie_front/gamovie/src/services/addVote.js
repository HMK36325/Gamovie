import config from 'config.json';



export default function addVote({ content_id, currentUser, contentType, note }) {
    const ENDPOINT =`${config.apiUrl}votes/${contentType}/${currentUser.id}/${content_id}?user_note=${note}`;

    return fetch(ENDPOINT, {
        method: 'POST',
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