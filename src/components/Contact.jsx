import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
// import writeExcel from "../scripts/write-excel";

const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const contactSubmit = async () => {
        try {
            // const response = await writeExcel([{
            //     email, message,
            // }])
            // console.log(response);
            return (
                <Alert variant="success">
                    Detailed submitted Successfully!
                </Alert>
            )
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="light-bg">
            <Row>
                <Col>
                    <Form className="ms-4">
                        <Form.Group as={Row} className="mb-3" controlId="email">
                            <Form.Label column md="auto" className="swap code">From Email: </Form.Label>
                            <Col>
                                <Form.Control type="email" className="light-bg swap transparent-input" defaultValue={email} placeholder="Enter Email..." onChange={(e) => setEmail(e.target.value)} />
                            </Col>
                            {/* <Form.Text className="text-muted">
                                I'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="message">
                            <Form.Label column md="auto" className="swap code">Message: </Form.Label>
                            <Col>
                                <Form.Control className="light-bg swap transparent-input" as="textarea" defaultValue={message} rows={3} placeholder="Enter Message..." onChange={(e) => setMessage(e.target.value)} />
                            </Col>
                            {/* <Form.Text className="text-muted">
                                I'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Button variant="success" type="button" onClick={contactSubmit}>
                            Contact Me
                        </Button>
                    </Form>
                </Col>
            </Row>
        </section>
    )
}

export default Contact;