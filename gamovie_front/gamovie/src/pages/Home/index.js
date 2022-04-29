import React from "react";
import styledComponents from "styled-components";
import MyNav from "components/MyNav";

const Section = styledComponents.section`
    display : flex;
    flex-direction : column;
`

export default function Home() {
    return (
        <>
            <MyNav />
            <Section>
                <h1>
                    Hellow Friends
                </h1>
                <p>Welcome to GAMOVIE</p>
            </Section>
        </>
    );
};