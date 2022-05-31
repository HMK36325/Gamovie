import { useState, useEffect } from "react";
import getDetails from "services/getDetails";
import getCardsIds from "services/getCardsIds";

export default function useDetails({ path }) {
    const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState({});
    const [totalElements, setTotalElements] = useState(0)
    const [cardsIds, setCardsIds] = useState([])

    useEffect(function () {
        setLoading(true);
        getDetails({ path }).then((data) => {
            setDetails(data);
            getCardsIds({ content: path.split('/')[0] }).then(({ cardsIds, totalElements }) => {
                setTotalElements(totalElements)
                setCardsIds(cardsIds)
                setLoading(false);
            })
        });
    }, [path])

    return { loading, details, totalElements, cardsIds };
}