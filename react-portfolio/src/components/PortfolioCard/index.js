import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobeAsia, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Card, CardTitle, Icon } from 'react-materialize'
import "./style.css";

function PortfolioCard(props) {

    const { id, name, projectImage = "https://materializecss.com/images/sample-1.jpg", siteURL, repoURL, description } = props.project

    return (
        <Col
            m={6}
            s={12}
        >
            <Card
                className="blue-grey darken-4 white-text small"
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image={projectImage} reveal waves="light" />}
                reveal={
                    <p className="blue-grey-text text-darken-4">{description}</p>
                }
                revealIcon={<Icon>more_vert</Icon>}
                title={name}
            >
                <a className="left btn-floating btn-small waves-effect waves-light teal"
                    href={repoURL}
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a className="right btn-floating btn-small waves-effect waves-light teal"
                    href={siteURL}
                >
                    <FontAwesomeIcon icon={faGlobeAsia} />
                </a>
            </Card>
        </Col>
    )
}

export default PortfolioCard