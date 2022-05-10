import React from "react";
import useDetails from "hooks/useDetails";
import { Spinner } from "react-bootstrap";
import { useLocation } from "wouter";

export default function Details() {
    const [path,] = useLocation();
    const { loading, details } = useDetails({ path: path.slice(1) })

    console.log(details)

    return (
        <>
            {
                loading ? <Spinner animation="border" className="loading" />
                    : <p>CONTENT</p>
            }
        </>
    );
}