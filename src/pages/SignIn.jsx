import { Card, Container, Form, Button } from "react-bootstrap";

export default function SignIn() {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
            <Card className="shadow" style={{ width: "420px" }}>
                <Card.Body className="p-4">
                    <h1 className="mb-1 text-center">Welcome</h1>
                    <p className="text-muted text-center mb-4">Sign in to your account</p>
                    <Form>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Sign In
                        </Button>
                        <div className="mt-1">
                            <a className="small">Forgot password?</a>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}