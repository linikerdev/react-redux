import React from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default props => (
    <Form>
        <Row>
            <Col xs="6" md='11'>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
            </Col>
            <Col md='1'>
                <FormGroup>
                    <Label for="exampleEmail">{''}</Label>
                    <Button color="danger">
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </FormGroup>
            </Col>
        </Row>
    </Form>
)