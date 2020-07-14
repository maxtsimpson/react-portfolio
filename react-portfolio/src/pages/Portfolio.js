import React, { useEffect, useState } from "react";
import PortfolioCard from "../components/PortfolioCard"
import API from "../utils/API";
import { Row, Col, Card, CardTitle, Icon } from 'react-materialize'

const Portfolio = props => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        API.getProjectList()
            .then(results => {
                setProjects(results)
            })
            .catch(error => console.error(error))
    }, [])

    const numberOfRows = 4
    //need to edit the below to pass in the col values depending on how many cards i want in each row


    //this sets the rows array to be an array of fixed size as the number of rows you want
    //i.e. if you have 15 projects and want 4 rows it will give you 3.something rounded up to 4
    const rows = [...Array(Math.ceil(projects.length / numberOfRows))];
    // chunk the products into the array of rows. the row isnt used here just the index
    //this will split the projects in the project array into equalish chunks to put in your pre-determined array (rows)
    const projectRows = rows.map((row, index) => projects.slice(index * numberOfRows, index * numberOfRows + numberOfRows))
    // map the rows as a react materialise row
    const content = projectRows.map((row, index) => (
        <Row key={index}>
            {row.map(project => <PortfolioCard key={project.id} project={project}></PortfolioCard>)}
        </Row>
        )
    )

    return (
        <div>
            {content}
        </div>
    )
}

export default Portfolio;