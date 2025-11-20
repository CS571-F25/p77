import { Container, Row, Col, Card, Button, ListGroup, Form } from "react-bootstrap";
import { Link } from "react-router";

export default function Cart() {

  // TODO: replace this with real cart state / context later
  const cartItems = [
    {
      id: "gmmk-pro",
      name: "GMMK Pro 75% Mechanical Keyboard",
      price: 169.99,
      quantity: 1
    },
    {
      id: "logitech-g502",
      name: "Logitech G502 HERO Gaming Mouse",
      price: 49.99,
      quantity: 1
    }
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <Container className="py-4">
      <h1 className="mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <Card className="p-4 text-center">
          <h2 className="h5 mb-2">Your cart is empty</h2>
          <p className="text-muted mb-3">
            Browse keyboards, mice, and consoles to start building your setup.
          </p>
          <Button as={Link} to="/" variant="dark">
            Continue shopping
          </Button>
        </Card>
      ) : (
        <Row className="g-4">
          {/* Left: cart items */}
          <Col md={8}>
            <Card className="shadow-sm">
              <Card.Body>
                <h2 className="h5 mb-3">Items</h2>
                <ListGroup variant="flush">
                  {cartItems.map((item) => (
                    <ListGroup.Item
                      key={item.id}
                      className="d-flex justify-content-between align-items-start"
                    >
                      <div>
                        <div className="fw-semibold">{item.name}</div>
                        <div className="text-muted small">
                          ${item.price.toFixed(2)} each
                        </div>
                      </div>

                      <div className="text-end" style={{ minWidth: "140px" }}>
                        <Form.Select size="sm" value={item.quantity} disabled className="mb-1" style={{ maxWidth: "80px", marginLeft: "auto" }}>
                          {[1, 2, 3, 4, 5].map((q) => (
                            <option key={q} value={q}>
                              {q}
                            </option>
                          ))}
                        </Form.Select>
                        <div className="fw-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        <Button variant="link" size="sm" className="p-0 text-danger" disabled>
                          Remove
                        </Button>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          {/* Right: summary */}
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <h2 className="h5 mb-3">Order Summary</h2>

                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between mb-2 text-muted">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between mb-3 fw-semibold">
                  <span>Estimated total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <Button variant="dark" className="w-100 mb-2" disabled>
                  Proceed to Checkout
                </Button>

                <Button as={Link} to="/" variant="outline-secondary" className="w-100">
                  Continue shopping
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  )
}