import Context from "context/userContext";
import { useCallback, useContext, useEffect, useState } from "react"
import getUsers from 'services/Admin/getUsers'
import banUser from "services/Admin/ban";

export default function useAdmin() {
    const [users, setUsers] = useState([]);
    const { currentUser } = useContext(Context)
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(false)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        setLoading(true)
        getUsers({ currentUser, page }).then(({ users, totalPages }) => {
            setUsers(users)
            setTotalPages(totalPages)
            setLoading(false)
        })
    }, [currentUser, page])

    const ban = useCallback(({ isBan, id }) => {
        banUser({ currentUser, isBan, id })
    }, [currentUser])

    const unBan = useCallback(({ isBan, id }) => {
        banUser({ currentUser, isBan, id })
    }, [currentUser])

    return { users, page, totalPages, loading, setPage, ban, unBan }
}