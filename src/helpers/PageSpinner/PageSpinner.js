import React from 'react'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { CircularProgress } from '@material-ui/core';

const PageSpinner = () => <Row>
    <Col className="text-center">
        {/* <Spinner animation="border" variant="danger" /> */}
        <CircularProgress color="dark" />
    </Col>
</Row>;

export default PageSpinner;