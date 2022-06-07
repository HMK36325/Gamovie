import config from 'config.json';

export default async function addPremium({ currentUser }) {
    const ENDPOINT = `${config.apiUrl}users/premium/${currentUser.id}`

    return await fetch(ENDPOINT, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${currentUser.accessToken}`
        }
    }).then(res => {
        if (!res.ok) throw new Error('Response is NOT ok');
        return true;
    })
}