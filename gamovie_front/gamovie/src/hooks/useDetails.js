import { useState, useEffect } from "react";
import getDetails from "services/getDetails";

export default function useDetails({ path }) {
    const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState({});

    useEffect(function () {
        setLoading(true);
        getDetails({ path }).then((data) => {
            setDetails(data);
            setLoading(false);
        });
    }, [path])

    return { loading, details };
}