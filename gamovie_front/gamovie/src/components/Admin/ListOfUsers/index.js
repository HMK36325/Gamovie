import React from "react";
import UserInfo from "../UserInfo";
import { Table } from 'react-bootstrap'

export default function listOfUsers({ users }) {
    return <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Username</th>
                <th>Email</th>
                <th>Roles</th>
                <th>Ban</th>
            </tr>
        </thead>
        <tbody>
            {users.map(user => {
                return < UserInfo key={user.id} id={user.id} name={user.name} roles={user.roles} email={user.email} banned={user.banned_at} />
            })}

        </tbody>
    </Table>
}