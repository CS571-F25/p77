import { Container, Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router";

export default function OrderConfirmation() {
  let order = null;

  try {
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const lastId = localStorage.getItem("lastOrderId");
    order =
      (lastId && orders.find((o) => o.id === lastId)) ||
      orders[orders.length - 1] ||
      null;
  } catch (e) {
    console.error("Failed to read order", e);
  }

  if (!order) {
    return (
      <Container className="py-4">
        <Card className="p-4 text-center">
          <h1 className="h4 mb-2">No recent order found</h1>
          <p className="text-muted mb-3">
            Your recent order could not be loaded.
          </p>
          <Button as={Link} to="/" variant="dark">
            Back to home
          </Button>
        </Card>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <Card className="shadow-sm">
        <Card.Body>
          <h1 className="h4 mb-2">Thank you for your order!</h1>
          <p className="text-muted">
            Order <strong>#{order.id.slice(0, 8)}</strong> – placed on{" "}
            {new Date(order.createdAt).toLocaleString()}
          </p>

          <h2 className="h6 mt-4">Items</h2>
          <ListGroup variant="flush" className="mb-3">
            {order.items.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between"
              >
                <div>
                  <div className="small fw-semibold">{item.name}</div>
                  <div className="text-muted small">
                    Qty {item.quantity} × ${item.price.toFixed(2)}
                  </div>
                </div>
                <div className="fw-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <div className="d-flex justify-content-between fw-semibold mb-3">
            <span>Total paid</span>
            <span>${order.total.toFixed(2)}</span>
          </div>

          <Button as={Link} to="/" variant="dark">
            Continue shopping
          </Button>
        </Card.Body>
      </Card>
    </Container>
  )
}
