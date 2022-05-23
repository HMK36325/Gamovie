import React from "react";
import Context from "context/userContext";
import Users from "components/Admin/ListOfUsers";
import { useContext } from "react";
import useAdmin from "hooks/useAdmin";

export default function AdminUsers() {
    const { isAdmin } = useContext(Context);

    if (!isAdmin) window.location.href = "../../unauthorized.html"

    const { users } = useAdmin();

    return <Users users={users} />
}