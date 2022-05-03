import React from "react";
import styledComponents from "styled-components";

const Section = styledComponents.section`
    display : flex;
    flex-direction : column;
`

export default function Home() {
    return (
        <>
            <Section>
                <h1>
                    Hellow Friends
                </h1>
                <p>Welcome to GAMOVIE</p>
            </Section>
        </>
    );
};