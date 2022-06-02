import { Button } from "react-bootstrap";
import React, { useState } from "react";
import useAdmin from "hooks/useAdmin";
import './userInfo.css'

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
            <th className="infoUser" scope="row">{id}</th>
            <td className="infoUser">{name}</td>
            <td className="infoUser">{email}</td>
            <td className="infoUser">{theUserRoles.join(', ')}</td>
            <td className="infoUser">{!theUserRoles.includes('ROLE_ADMIN') && (isBanned ? <Button variant="success" onClick={handleUnBan}>Unban</Button> : <Button variant="danger" onClick={handleBan}>Ban</Button>)}</td>
        </tr >
    )
}