import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home () {
    const keyboards = products.filter(
        (p) => p.category === "Mechanical Keyboards"
    )
    const mice = products.filter(
        (p) => p.category === "Gaming Mice"
    )
    const consoles = products.filter(
        (p) => p.category === "Consoles"
    )

    return (
        <Container className="py-4">
            {/*Maybe turn into a carousel*/}
            <Card className="mb-4 text-white">
                <Card.Body className="p-4" style={{background: "#111"}}>
                    <Row className="align-items-center">
                        <Col md={8}>
                            <h1 className="mb-2">Build Your Ultimate Setup</h1>
                            <p className="mb-3">
                                Mechanical keyboards, precision gaming mice, and next-gen consoles - all in one place.
                            </p>
                            <Button as={Link} to="/category/keyboards" variant="light">
                                Shop Keyboards
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            {/* Category tiles */}
            <Row className="mb-4 g-3">
                {[
                {
                    label: "Mechanical Keyboards",
                    to: "/category/keyboards"
                },
                {
                    label: "Gaming Mice",
                    to: "/category/mice"
                },
                {
                    label: "Consoles",
                    to: "/category/consoles"
                },
                {
                    label: "Accessories",
                    to: "/category/accessories"
                }
                ].map((cat) => (
                <Col key={cat.label} xs={6} md={3}>
                    <Card
                    as={Link}
                    to={cat.to}
                    className="text-center p-3 h-100 text-decoration-none"
                    >
                    <Card.Body>
                        <Card.Title className="fs-6 mb-0">
                        {cat.label}
                        </Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>

            {/* Keyboards */}
            <section className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="h4 mb-0">Mechanical Keyboards</h2>
                <Button
                    as={Link}
                    to="/category/keyboards"
                    variant="link"
                    className="p-0"
                >
                    View all →
                </Button>
                </div>
                <Row xs={1} sm={2} md={3} lg={4} className="g-3">
                {keyboards.map((p) => (
                    <Col key={p.id}>
                    <ProductCard product={p} />
                    </Col>
                ))}
                </Row>
            </section>

            {/* Gaming Mice */}
            <section className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="h4 mb-0">Gaming Mice</h2>
                <Button
                    as={Link}
                    to="/category/mice"
                    variant="link"
                    className="p-0"
                >
                    View all →
                </Button>
                </div>
                <Row xs={1} sm={2} md={3} lg={4} className="g-3">
                {mice.map((p) => (
                    <Col key={p.id}>
                    <ProductCard product={p} />
                    </Col>
                ))}
                </Row>
            </section>

            {/* Consoles */}
            <section>
                <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="h4 mb-0">Consoles</h2>
                <Button
                    as={Link}
                    to="/category/consoles"
                    variant="link"
                    className="p-0"
                >
                    View all →
                </Button>
                </div>
                <Row xs={1} sm={2} md={3} lg={4} className="g-3">
                {consoles.map((p) => (
                    <Col key={p.id}>
                    <ProductCard product={p} />
                    </Col>
                ))}
                </Row>
            </section>
        </Container>
    )
}