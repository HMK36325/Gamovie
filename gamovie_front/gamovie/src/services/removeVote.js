import config from 'config.json';



export default function removeVote({ vote_id, currentUser, contentType }) {
    const ENDPOINT = `${config.apiUrl}votes/${contentType}/${vote_id}`;

    return fetch(ENDPOINT, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${currentUser.accessToken}`
        },
    }).then(res => {
        if (!res.ok) throw new Error('Response is NOT ok');
    }).then(res => {
        return res;
    })
}