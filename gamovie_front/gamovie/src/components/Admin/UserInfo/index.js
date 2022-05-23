import { Button } from "react-bootstrap";
import React, { useState } from "react";
import useAdmin from "hooks/useAdmin";

export default function UserInfo({ id, name, email, roles, banned }) {
    const { ban, unBan } = useAdmin()
    const [isBanned, setIsBanned] = useState(() => banned ? true : false)
    const theUserRoles = roles.map(rol => rol.name)

    const handleUnBan = () => {
        setIsBanned(false)
        unBan({ isBan: false, id })

    }

    const handleBan = () => {
        setIsBanned(true)
        ban({ isBan: true, id })
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{theUserRoles.join(', ')}</td>
            <td>{isBanned ? <Button variant="success" onClick={handleUnBan}>Unban</Button> : <Button variant="danger" onClick={handleBan}>Ban</Button>}</td>
        </tr>
    )
}