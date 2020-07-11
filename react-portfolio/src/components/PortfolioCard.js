import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Card, CardTitle, Icon } from 'react-materialize'

function PortfolioCard({ projectName, projectImage="https://materializecss.com/images/sample-1.jpg", siteURL, repoURL, projectDescription }) {

    return (
        <Row>
            <Col
                m={6}
                s={12}
            >
                <Card
                    className="blue-grey darken-4 white-text"
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={projectImage} reveal waves="light" />}
                    reveal={
                            <p>{projectDescription}</p>
                            // <p className="blue-grey-text text-darken-4">{projectDescription}</p>
                    }
                    revealIcon={<Icon>more_vert</Icon>}
                    title={projectName}
                >
                    <a href={repoURL}>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href={siteURL}>
                        <FontAwesomeIcon icon={faGlobeAsia} />
                    </a>
                </Card>
            </Col>
        </Row>
    )
}

export default PortfolioCard