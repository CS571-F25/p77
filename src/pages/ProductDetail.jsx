import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Container, Row, Col, Card, Button, Form, Badge } from "react-bootstrap";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductPlaceholderIcon from "../components/ProductPlaceholderIcon";

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const product = products.find((p) => p.id === id)
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <Container className="py-4">
        <h1 className="mb-3">Product Not Found</h1>
        <p className="text-muted">
          We couldn&apos;t find that product. Try browsing from the home page.
        </p>
        <Button variant="dark" onClick={() => navigate("/")}>
          Go home
        </Button>
      </Container>
    )
  }

  const isOnSale = product.onSale && product.salePrice

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  return (
    <Container className="py-4">
      <Row className="g-4">
        <Col md={5}>
          <Card className="shadow-sm">
            {product.image ? (
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                style={{ objectFit: "contain", maxHeight: "320px" }}
              />
            ) : (
              <ProductPlaceholderIcon />
            )}
          </Card>
        </Col>

        <Col md={7}>
          <h1 className="h3 mb-2">{product.name}</h1>
          <p className="text-muted mb-1">{product.category}</p>

          <div className="mb-3">
            {isOnSale ? (
              <>
                <span className="text-danger fw-bold fs-4 me-2">
                  ${product.salePrice.toFixed(2)}
                </span>
                <span className="text-muted text-decoration-line-through">
                  ${product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="fw-bold fs-4">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          {product.badge && (
            <Badge bg="warning" text="dark" className="mb-3">
              {product.badge}
            </Badge>
          )}

          <p className="text-muted">
            {product.desc}
          </p>

          <Form className="d-flex align-items-center gap-2 mb-3" style={{ maxWidth: "260px" }}>
            <Form.Label className="mb-0">Quantity</Form.Label>
            <Form.Select
              size="sm"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map((q) => (
                <option key={q} value={q}>
                  {q}
                </option>
              ))}
            </Form.Select>
          </Form>

          <div className="d-flex gap-2">
            <Button variant="dark" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <Button variant="outline-secondary" onClick={() => navigate(-1)}>
              Back
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
