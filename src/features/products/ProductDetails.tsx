import { useParams, Link } from "react-router-dom";
import { useProductDetails } from "../../hooks/useProductDetails";

export function ProductDetails() {
  const { id } = useParams();
  const { product, loading, error } = useProductDetails(id);

  return (
    <section
      style={{
        padding: "32px 24px",
        maxWidth: 800,
        margin: "0 auto",
        minHeight: "80vh",
        backgroundColor: "rgb(248, 250, 252)",
      }}
    >
      {/* Back Navigation */}
      <div style={{ marginBottom: 32 }}>
        <Link 
          to="/products" 
          style={{ 
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
            color: "rgb(154, 166, 178)",
            fontWeight: 500,
            fontSize: "14px",
            padding: "8px 16px",
            borderRadius: 8,
            transition: "all 0.2s ease",
            backgroundColor: "white",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
          }}
          onMouseOver={(e) => {
            e.target.style.color = "rgb(188, 204, 220)";
            e.target.style.backgroundColor = "rgb(248, 250, 252)";
          }}
          onMouseOut={(e) => {
            e.target.style.color = "rgb(154, 166, 178)";
            e.target.style.backgroundColor = "white";
          }}
        >
          <span style={{ fontSize: "18px" }}>←</span>
          Back to products
        </Link>
      </div>

      {/* Loading State */}
      {loading && (
        <div 
          style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            height: 200,
            color: "rgb(154, 166, 178)"
          }}
        >
          <p>Loading product details...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div 
          role="alert" 
          style={{ 
            padding: 24,
            backgroundColor: "white",
            borderRadius: 12,
            border: "1px solid rgba(154, 166, 178, 0.2)",
            color: "rgb(154, 166, 178)",
            textAlign: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
          }}
        >
          <p style={{ margin: 0, fontWeight: 500 }}>Error loading product</p>
          <p style={{ margin: "8px 0 0 0", fontSize: "14px" }}>{error}</p>
        </div>
      )}

      {/* Not Found State */}
      {!loading && !error && !product && (
        <div 
          style={{ 
            padding: 48,
            backgroundColor: "white",
            borderRadius: 12,
            textAlign: "center",
            border: "1px solid rgba(154, 166, 178, 0.2)",
            color: "rgb(154, 166, 178)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
          }}
        >
          <p style={{ margin: 0, fontSize: "18px", fontWeight: 500 }}>
            Product not found
          </p>
          <p style={{ margin: "8px 0 0 0", fontSize: "14px" }}>
            The product you're looking for doesn't exist or has been removed.
          </p>
        </div>
      )}

      {/* Product Details */}
      {product && (
        <article 
          aria-labelledby="product-heading"
          style={{
            backgroundColor: "white",
            borderRadius: 16,
            padding: 32,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            border: "1px solid rgba(188, 204, 220, 0.3)"
          }}
        >
          {/* Product Header */}
          <header style={{ marginBottom: 24, borderBottom: "1px solid rgba(188, 204, 220, 0.3)", paddingBottom: 24 }}>
            <h1
              id="product-heading"
              style={{
                fontSize: "2.25rem",
                fontWeight: 700,
                marginBottom: 12,
                color: "#1a202c",
                lineHeight: 1.2
              }}
            >
              {product.name}
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <p style={{ 
                fontSize: "1.5rem", 
                fontWeight: 600, 
                color: "#2d3748",
                margin: 0
              }}>
                ₹{product.price}
              </p>

              <span 
                style={{ 
                  padding: "4px 12px",
                  borderRadius: 20,
                  fontSize: "14px",
                  fontWeight: 500,
                  backgroundColor: product.inStock ? "rgba(72, 187, 120, 0.1)" : "rgba(245, 101, 101, 0.1)",
                  color: product.inStock ? "#38a169" : "#e53e3e",
                  border: `1px solid ${product.inStock ? "rgba(72, 187, 120, 0.2)" : "rgba(245, 101, 101, 0.2)"}`
                }}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
          </header>

          {/* Product Meta */}
          <div style={{ marginBottom: 24 }}>
            <div 
              style={{ 
                display: "flex", 
                alignItems: "center",
                gap: 12,
                padding: "12px 16px",
                backgroundColor: "rgb(248, 250, 252)",
                borderRadius: 8,
                marginBottom: 12
              }}
            >
              <strong style={{ color: "rgb(154, 166, 178)", fontSize: "14px", minWidth: 80 }}>
                Category:
              </strong>
              <span style={{ color: "#2d3748", fontWeight: 500 }}>
                {product.category}
              </span>
            </div>
          </div>

          {/* Product Description */}
          {product.description && (
            <section style={{ marginTop: 32 }}>
              <h3 
                style={{ 
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "#2d3748",
                  marginBottom: 16
                }}
              >
                Description
              </h3>
              <div 
                style={{ 
                  padding: 20,
                  backgroundColor: "rgb(248, 250, 252)",
                  borderRadius: 8,
                  border: "1px solid rgba(188, 204, 220, 0.3)"
                }}
              >
                <p 
                  style={{ 
                    margin: 0,
                    color: "#4a5568",
                    lineHeight: 1.6,
                    fontSize: "15px"
                  }}
                >
                  {product.description}
                </p>
              </div>
            </section>
          )}

          {/* Action Buttons */}
          <footer style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid rgba(188, 204, 220, 0.3)" }}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                disabled={!product.inStock}
                style={{
                  padding: "12px 24px",
                  backgroundColor: product.inStock ? "rgb(217, 234, 253)" : "rgb(248, 250, 252)",
                  color: product.inStock ? "#2d3748" : "rgb(154, 166, 178)",
                  border: `1px solid ${product.inStock ? "rgb(188, 204, 220)" : "rgb(188, 204, 220)"}`,
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: "14px",
                  cursor: product.inStock ? "pointer" : "not-allowed",
                  transition: "all 0.2s ease"
                }}
                onMouseOver={(e) => {
                  if (product.inStock) {
                    e.target.style.backgroundColor = "rgb(188, 204, 220)";
                    e.target.style.color = "white";
                  }
                }}
                onMouseOut={(e) => {
                  if (product.inStock) {
                    e.target.style.backgroundColor = "rgb(217, 234, 253)";
                    e.target.style.color = "#2d3748";
                  }
                }}
              >
                Add to Cart
              </button>
              
              <button
                style={{
                  padding: "12px 24px",
                  backgroundColor: "transparent",
                  color: "rgb(154, 166, 178)",
                  border: "1px solid rgb(188, 204, 220)",
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: "14px",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "rgb(248, 250, 252)";
                  e.target.style.color = "#2d3748";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "rgb(154, 166, 178)";
                }}
              >
                Add to Wishlist
              </button>
            </div>
          </footer>
        </article>
      )}
    </section>
  );
}