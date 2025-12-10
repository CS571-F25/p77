import { Container, Row, Col, Alert } from "react-bootstrap";
import { useSearchParams } from "react-router"; // or react-router-dom depending on version
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function SearchResults() {
  const [params] = useSearchParams();
  const q = (params.get("q") || "").trim().toLowerCase();

  const results = q
    ? products.filter((p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      )
    : []

  return (
    <Container className="py-4">
      <h1 className="mb-2 text-center">Search</h1>
      <p className="text-muted text-center mb-4">
        {q
          ? <>Showing results for <strong>"{q}"</strong> ({results.length} found)</>
          : "Type a product name in the search bar above."}
      </p>

      {q && results.length === 0 && (
        <Alert variant="light">No products match your search.</Alert>
      )}

      {results.length > 0 && (
        <Row className="g-3 align-items-start">
          {results.map((product) => (
            <Col
              key={product.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  )
}