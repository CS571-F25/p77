import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router";
import ProductPlaceholderIcon from "./ProductPlaceholderIcon";
import { useCart } from "../context/CartContext"

export default function ProductCard({product}) {
    const {addToCart} = useCart()
    const onSale = product.onSale && product.salePrice
    return (
        <Card className="shadow-sm">
            {product.image ? (
                <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                  style={{
                    height: "180px",
                    width: "100%",
                    objectFit: "contain"
                }}
                />
            ) : (
                <ProductPlaceholderIcon />
            )}

            <Card.Body className="d-flex flex-column">
                <Card.Title className="fs-6 mb-1">{product.name}</Card.Title>
                <div className="mb-2">
                {onSale ? (
                    <>
                    <span className="text-danger fw-bold">
                        ${product.salePrice.toFixed(2)}
                    </span>{" "}
                    <span className="text-muted text-decoration-line-through">
                        ${product.price.toFixed(2)}
                    </span>
                    </>
                ) : (
                    <span className="fw-bold">
                    ${product.price.toFixed(2)}
                    </span>
                )}
                </div>

                {product.badge && (
                    <Badge bg="warning" text="dark" className="mb-2">
                        {product.badge}
                    </Badge>
                )}

                <div className="mt-auto d-flex gap-2">
                    <Button
                        as={Link}
                        to={`/product/${product.id}`}
                        variant="outline-dark"
                        size="sm"
                    >
                        View
                    </Button>
                    <Button variant="dark" size="sm" onClick={()=>addToCart(product)} aria-label={`Add ${product.name} to cart`}>
                        Add to Cart
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}