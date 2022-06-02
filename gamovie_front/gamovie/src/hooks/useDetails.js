import { useState, useEffect } from "react";
import getDetails from "services/getDetails";
import getCardsIds from "services/getCardsIds";
import getReviews from "services/getReviews";

export default function useDetails({ path }) {
    const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState({});
    const [totalElements, setTotalElements] = useState(0)
    const [cardsIds, setCardsIds] = useState([])
    const [reviews, setReviews] = useState([])

    useEffect(function () {
        setLoading(true);
        getDetails({ path }).then((data) => {
            setDetails(data);
            getCardsIds({ content: path.split('/')[0] }).then(({ cardsIds, totalElements }) => {
                setTotalElements(totalElements)
                setCardsIds(cardsIds)
                getReviews({ contentType: path.split('/')[0], contentId: path.split('/')[1] }).then((reviews) => {
                    setReviews(reviews)
                    setLoading(false);
                })
            })
        });
    }, [path])

    return { loading, details, reviews, totalElements, cardsIds };
}