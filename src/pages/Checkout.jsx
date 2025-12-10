import { useState } from "react";
import { Container, Row, Col, Card, Form, Button, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useCart } from "../context/CartContext";

const SHIPPING_RATES = {
  standard: 5.99,
  express: 14.99
}

export default function Checkout() {
  const navigate = useNavigate()
  const { cartItems, clearCart } = useCart()

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    shippingMethod: "standard",
  })

  const shippingCost = SHIPPING_RATES[form.shippingMethod]
  const total = subtotal + shippingCost

  const [validated, setValidated] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  if (!cartItems || cartItems.length === 0) {
    return (
      <Container className="py-4">
        <Card className="p-4 text-center">
          <h2 className="h5 mb-2">Your cart is empty</h2>
          <p className="text-muted mb-3">
            Add some items to your cart before checking out.
          </p>
          <Button variant="dark" onClick={() => navigate("/")}>
            Continue shopping
          </Button>
        </Card>
      </Container>
    )
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    const formEl = event.currentTarget
    event.preventDefault()

    if (!formEl.checkValidity()) {
      event.stopPropagation()
      setValidated(true)
      return
    }

    setValidated(true)
    setSubmitting(true)

    const order = {
      id:
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : Date.now().toString(),
      createdAt: new Date().toISOString(),
      items: cartItems,
      subtotal: subtotal,
      shippingCost: shippingCost,
      total: total,
      shippingMethod: form.shippingMethod,
      shippingAddress: {
        fullName: form.fullName,
        email: form.email,
        address: form.address,
        city: form.city,
        postalCode: form.postalCode,
        country: form.country,
      },
    }

    try {
      const existing = JSON.parse(localStorage.getItem("orders") || "[]")
      existing.push(order);
      localStorage.setItem("orders", JSON.stringify(existing))
      localStorage.setItem("lastOrderId", order.id)
    } catch (e) {
      console.error("Failed to save order", e)
    }

    clearCart()
    navigate("/order-confirmation")
  }

  return (
    <Container className="py-4">
      <h1 className="mb-4">Checkout</h1>
      <Row className="g-4">
        {/* Left: shipping / contact form */}
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <h2 className="h5 mb-3">Shipping Details</h2>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="checkoutFullName">
                  <Form.Label>Full name</Form.Label>
                  <Form.Control
                    required
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your name.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="checkoutEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="checkoutAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    required
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your address.
                  </Form.Control.Feedback>
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="checkoutCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        required
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your city.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-3" controlId="checkoutPostal">
                      <Form.Label>Postal Code</Form.Label>
                      <Form.Control
                        required
                        name="postalCode"
                        value={form.postalCode}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your postal code.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-3" controlId="checkoutCountry">
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        required
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your country.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="checkoutShipping">
                  <Form.Label>Shipping method</Form.Label>
                  <Form.Select
                    name="shippingMethod"
                    value={form.shippingMethod}
                    onChange={handleChange}
                  >
                    <option value="standard">Standard (3–5 business days) - $5.99</option>
                    <option value="express">Express (1–2 business days) - $14.99</option>
                  </Form.Select>
                </Form.Group>

                {/* Payment section – purely visual, not stored */}
                <h2 className="h5 mt-4 mb-3">Payment (Demo Only)</h2>
                <p className="text-muted small">
                  This is a demo checkout. Do not enter real card details.
                </p>
                <Row>
                  <Col md={8}>
                    <Form.Group className="mb-3" controlId="checkoutCardNumber">
                      <Form.Label>Card number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="4242 4242 4242 4242"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={2}>
                    <Form.Group className="mb-3" controlId="checkoutExpiry">
                      <Form.Label>Expiry</Form.Label>
                      <Form.Control type="text" placeholder="12/34" />
                    </Form.Group>
                  </Col>
                  <Col md={2}>
                    <Form.Group className="mb-3" controlId="checkoutCvc">
                      <Form.Label>CVC</Form.Label>
                      <Form.Control type="text" placeholder="123" />
                    </Form.Group>
                  </Col>
                </Row>

                <Button
                  type="submit"
                  variant="dark"
                  className="w-100 mt-2"
                  disabled={submitting}
                >
                  {submitting ? "Placing order..." : "Place order"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Right: order summary */}
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <h2 className="h5 mb-3">Order Summary</h2>
              <ListGroup variant="flush" className="mb-3">
                {cartItems.map((item) => (
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

              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between text-muted mb-2">
                <span>Shipping</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
