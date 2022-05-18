import { useState, useEffect } from "react";
import getDetails from "services/getDetails";
import getCards from "services/getCards";

export default function useDetails({ path }) {
    const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState({});
    const [totalElements, setTotalElements] = useState(0)

    useEffect(function () {
        setLoading(true);
        getDetails({ path }).then((data) => {
            setDetails(data);
            getCards({ content: path.split('/')[0] }).then(({ totalElements }) => {
                setTotalElements(totalElements)
                setLoading(false);
            })
        });
    }, [path])

    return { loading, details, totalElements };
}