import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [show, setShow] = useState(false);

    const contactSubmit = () => {
        fetch('https://sheet.best/api/sheets/a6b602e8-b060-4386-b32f-f4ee270a3625', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, message, created_at: new Date() }),
        }).then((data) => {
                console.log('Success:', data);
                setShow(true);
            }).catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <section id="contact" className="light-bg">
            {
                show && (
                        <div style={{ position: "fixed", top: '10px', left: '50%', right: 0, zIndex: 999, transform: 'translate(-50%, 0%)' }}>
                            <Alert variant="success" onClose={() => setShow(false)} dismissible>
                                Detailed submitted Successfully!
                            </Alert>
                        </div>
                    )
            }
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