import { useState } from "react";
import { Card, Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function SignUp() {
  const { register } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (password !== confirm) {
      setError("Passwords do not match.")
      return;
    }

    setLoading(true);
    try {
      await register(email.trim(), password);
      navigate("/"); // go to home after signup
    } catch (err) {
      setError(err.message || "Failed to create account.")
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "70vh" }}
    >
      <Card className="shadow" style={{ width: "420px" }}>
        <Card.Body className="p-4">
          <h1 className="mb-1 text-center">Create Account</h1>
          
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="signupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="signupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="signupConfirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                autoComplete="new-password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 mt-2"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Sign Up"}
            </Button>

            <div className="mt-2 text-center small">
              <span className="text-muted">
                Already have an account?{" "}
                <Link to="/signin">Sign in</Link>
              </span>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}
