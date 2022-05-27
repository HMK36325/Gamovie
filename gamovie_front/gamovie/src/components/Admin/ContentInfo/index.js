import useAdmin from "hooks/useAdmin";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function ContentInfo({ id, name, productora, img, contentType }) {

    const [isDeleted, setDelete] = useState(false)
    const { deleteItem } = useAdmin()

    const hadnleDelete = () => {
        deleteItem({ contentType, id })
        setDelete(true);
    }
    return (<>
        {!isDeleted && <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{productora}</td>
            <td>{img}</td>
            <td><Button onClick={hadnleDelete} variant="danger">🗑️</Button></td>
        </tr>}
    </>
    )
}