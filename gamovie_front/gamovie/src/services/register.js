import config from 'config.json';

const ENDPOINT = `${config.apiUrl}auth/signup`

export default function register({ username, email, password }) {
    return fetch(ENDPOINT, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
    }).then(res => {
        if (!res.ok) throw new Error('Response is NOT ok');
        return true;
    })
}