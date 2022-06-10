import React, { useEffect, useRef } from "react";
import useSearch from "hooks/useSearch";
import { Link } from "wouter";

export default function SearchBox({ keyword, setShowSearch }) {

    const { cards, notFound } = useSearch({ keyword, size: 3 });
    const ref = useRef(null);

    const handleClick = () => {
        setShowSearch(false)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setShowSearch(false)
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [setShowSearch]);

    return (
        <div className="search-box" ref={ref}>
            {notFound ? <p className="ps-2 search-element">No results</p>
                : <>
                    {cards && cards.map((card) => {
                        return <Link to={`/${card.content}/${card.id}`} key={`${card.id}-${card.content}`} onClick={handleClick}>
                            <div key={`${card.id}-${card.content}`} className="ps-2 search-element pointer">{card.name}</div>
                        </Link>
                    })}
                </>}

        </div>
    )
}