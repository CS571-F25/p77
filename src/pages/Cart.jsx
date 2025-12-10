import { Container, Row, Col, Card, Button, ListGroup, Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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
                        <div className="d-flex align-items-center justify-content-end mb-1">
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            −
                          </Button>
                          <span className="mx-2" style={{ minWidth: "20px", textAlign: "center" }}>
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            +
                          </Button>
                        </div>
                        <div className="fw-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        <Button
                          variant="link"
                          size="sm"
                          className="p-0 text-danger"
                          onClick={() => removeFromCart(item.id)}
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          Remove
                        </Button>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

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

                <Button as={Link} to="/checkout" variant="dark" className="w-100 mb-2">
                  Proceed to Checkout
                </Button>

                <Button
                  as={Link}
                  to="/"
                  variant="outline-secondary"
                  className="w-100"
                >
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
