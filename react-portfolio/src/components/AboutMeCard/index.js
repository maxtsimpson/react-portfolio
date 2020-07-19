import React from "react";
import { Row, Col, Card, CardTitle, Icon } from 'react-materialize'
import "./style.css";

function AboutMeCard() {
    return (
        // <Card
        //     className="blue-grey darken-4 white-text small"
        //     header={<CardTitle image="images/oil_painting_oxy.png"/>}
        //     id="aboutMeCard"
        // >
            <section id="aboutMe"
            className="blue-grey darken-4 white-text small center"
            >
            <img src="images/oil_painting_oxy.png"></img>
            <p>
                I'm a developer looking to expand into a full stack developer. I spend my days at work doing
                entirely back end work, and would like
                to start working on front end systems so i can develop a whole application. I don't find
                putting visual style elements together very easy
                so am grateful for bootstrap.
            </p>
            <p>
                In my spare time, i go to a boxing gym, play with my daughters Quinn and Piper, our dog archie
                and just
                generally try and relax. My favourite place is the beach,
                nowadays i live about 40 mins away so i don't get there very often. One day when i make big
                dev dollars i'll move to the right side of the freeway and
                hit the beach every day.
            </p>
            </section>
        // </Card>
            )
}

export default AboutMeCard