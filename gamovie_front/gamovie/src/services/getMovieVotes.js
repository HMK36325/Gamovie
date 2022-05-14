import config from 'config.json';

export default async function getMovieVotes({ currentUser }) {
    const ENDPOINT = `${config.apiUrl}votes/movies/user/${currentUser.id}`
    return await fetch(ENDPOINT, {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            'Authorization': `Bearer ${currentUser.accessToken}`
        },
    })
        .then(res => {
            if (!res.ok) return [];;
            return res.json()
        }).then(res => {
            const votes = res;
            return votes;
        })
}

