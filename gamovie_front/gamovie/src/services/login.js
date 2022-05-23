import config from 'config.json';

const ENDPOINT = `${config.apiUrl}auth/signin`

export default function login({ username, password }) {
    return fetch(ENDPOINT, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    }).then(res => {
        if (!res.ok) throw res;
        return res.json()
    }).then(res => {
        const currentUser = res;
        return currentUser;
    })
}