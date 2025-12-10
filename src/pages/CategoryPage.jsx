import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const SLUG_TO_CATEGORY = {
  keyboards: "Mechanical Keyboards",
  mice: "Gaming Mice",
  consoles: "Consoles",
  accessories: "Accessories",
}

export default function CategoryPage() {
  const { slug } = useParams();
  const categoryName = SLUG_TO_CATEGORY[slug];

  if (!categoryName) {
    return (
      <Container className="py-4">
        <h1 className="mb-3">Category Not Found</h1>
        <p className="text-muted">
          We don't recognize this category. Please use the navigation above.
        </p>
      </Container>
    )
  }

  const items = products.filter((p) => p.category === categoryName);

  return (
    <Container className="py-4">
      <h1 className="mb-3">{categoryName}</h1>
      {items.length === 0 ? (
        <p className="text-muted">No products found in this category yet.</p>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-3">
          {items.map((product) => (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  )
}
