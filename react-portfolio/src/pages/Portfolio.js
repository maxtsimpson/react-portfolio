import React, { useEffect, useState } from "react";
import PortfolioCard from "../components/PortfolioCard"
import API from "../utils/API";
import { Row, Col, Card, CardTitle, Icon } from 'react-materialize'

const Portfolio = props => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        API.getProjectList()
            .then(results => {
                console.log(results)
                setProjects(results)
            })
            .catch(error => console.error(error))
    }, [])

    let i = 0;

    return (
        projects.map(project => {
            if (i % 2 === 0) {
                <Row></Row>
                //every second or third put it on a new row
            }
            <PortfolioCard key={project.id} project={project}></PortfolioCard>
            i++
        })
    )
}

export default Portfolio;