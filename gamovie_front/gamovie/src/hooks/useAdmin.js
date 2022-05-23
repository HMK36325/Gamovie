import Context from "context/userContext";
import { useCallback, useContext, useEffect, useState } from "react"
import getUsers from 'services/Admin/getUsers'
import banUser from "services/Admin/ban";

export default function useAdmin() {
    const [users, setUsers] = useState([]);
    const { currentUser } = useContext(Context)

    useEffect(() => {
        getUsers({ currentUser }).then(res => setUsers(res))
    }, [currentUser])

    const ban = useCallback(({ isBan, id }) => {
        banUser({ currentUser, isBan, id })
    }, [currentUser])

    const unBan = useCallback(({ isBan, id }) => {
        banUser({ currentUser, isBan, id })
    }, [currentUser])

    return { users, ban, unBan }
}