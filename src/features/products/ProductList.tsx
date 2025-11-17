import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import Toolbar from "../../components/Toolbar";

export function ProductList() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;

  const { products, total, loading, error } = useProducts({
    query,
    category,
    page,
    limit,
    sort,
  });

  const lastPage = Math.max(1, Math.ceil(total / limit));

  // ⭐ Reset page when search/filter/sort changes
  useEffect(() => {
    setPage(1);
  }, [query, category, sort]);

  return (
    <section 
      aria-labelledby="products-heading" 
      style={{ 
        padding: "32px 24px",
        maxWidth: 1200,
        margin: "0 auto",
        minHeight: "100vh",
        backgroundColor: "rgb(248, 250, 252)"
      }}
    >
      {/* Header */}
      <header style={{ marginBottom: 32 }}>
        <h1 
          id="products-heading"
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#1a202c",
            marginBottom: 8,
            textAlign: "center"
          }}
        >
          Products
        </h1>
        <p style={{
          textAlign: "center",
          color: "rgb(154, 166, 178)",
          fontSize: "16px",
          margin: 0
        }}>
          Discover our amazing collection of products
        </p>
      </header>

      {/* Toolbar: Search, Filter, Sort */}
      <div style={{ marginBottom: 32 }}>
        <Toolbar
          query={query}
          setQuery={setQuery}
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
        />
      </div>

      {/* Results Summary */}
      {!loading && !error && (
        <div style={{ 
          marginBottom: 24,
          padding: "12px 16px",
          backgroundColor: "white",
          borderRadius: 8,
          border: "1px solid rgba(188, 204, 220, 0.3)",
          color: "rgb(154, 166, 178)",
          fontSize: "14px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
        }}>
          Showing {products.length} of {total} products
          {query && ` for "${query}"`}
          {category && ` in ${category}`}
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          height: 200,
          color: "rgb(154, 166, 178)"
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{
              width: "40px",
              height: "40px",
              border: "3px solid rgb(217, 234, 253)",
              borderTop: "3px solid rgb(188, 204, 220)",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              margin: "0 auto 16px"
            }} />
            <p style={{ margin: 0 }}>Loading products...</p>
          </div>
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
            marginBottom: 24,
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
          }}
        >
          <p style={{ margin: 0, fontWeight: 500 }}>Error loading products</p>
          <p style={{ margin: "8px 0 0 0", fontSize: "14px" }}>{error}</p>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && products.length === 0 && (
        <div style={{
          padding: 48,
          backgroundColor: "white",
          borderRadius: 12,
          textAlign: "center",
          border: "1px solid rgba(188, 204, 220, 0.3)",
          color: "rgb(154, 166, 178)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
        }}>
          <p style={{ margin: 0, fontSize: "18px", fontWeight: 500 }}>
            No products found
          </p>
          <p style={{ margin: "8px 0 0 0", fontSize: "14px" }}>
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}

      {/* Product Grid */}
      <div 
        aria-live="polite" 
        style={{ 
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 24,
          marginBottom: 32
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "white",
              borderRadius: 12,
              padding: 24,
              border: "1px solid rgba(188, 204, 220, 0.3)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              transition: "all 0.2s ease",
              cursor: "pointer",
              height: "fit-content"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
            }}
          >
            <Link
              to={`/products/${product.id}`}
              style={{ 
                textDecoration: "none",
                color: "inherit",
                display: "block"
              }}
            >
              {/* Product Header */}
              <div style={{ marginBottom: 16 }}>
                <h3 style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "#1a202c",
                  margin: "0 0 8px 0",
                  lineHeight: 1.4
                }}>
                  {product.name}
                </h3>
                
                <p style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#2d3748",
                  margin: "0 0 12px 0"
                }}>
                  ₹{product.price}
                </p>
              </div>

              {/* Product Meta */}
              <div style={{ marginBottom: 16 }}>
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "4px 12px",
                  backgroundColor: "rgb(248, 250, 252)",
                  borderRadius: 6,
                  border: "1px solid rgba(188, 204, 220, 0.3)"
                }}>
                  <span style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "rgb(154, 166, 178)",
                    textTransform: "uppercase"
                  }}>
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Stock Status */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 8
              }}>
                <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: product.inStock ? "#38a169" : "#e53e3e"
                }} />
                <span style={{
                  fontSize: "14px",
                  color: product.inStock ? "#38a169" : "#e53e3e",
                  fontWeight: 500
                }}>
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {!loading && products.length > 0 && (
        <nav
          aria-label="Pagination"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
            padding: 24,
            backgroundColor: "white",
            borderRadius: 12,
            border: "1px solid rgba(188, 204, 220, 0.3)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
          }}
        >
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            style={{
              padding: "10px 20px",
              border: "1px solid rgb(188, 204, 220)",
              backgroundColor: page === 1 ? "rgb(248, 250, 252)" : "white",
              color: page === 1 ? "rgb(154, 166, 178)" : "#2d3748",
              borderRadius: 8,
              cursor: page === 1 ? "not-allowed" : "pointer",
              fontWeight: 500,
              fontSize: "14px",
              transition: "all 0.2s ease",
              display: "flex",
              alignItems: "center",
              gap: 8
            }}
            onMouseOver={(e) => {
              if (page !== 1) {
                e.target.style.backgroundColor = "rgb(217, 234, 253)";
                e.target.style.borderColor = "rgb(188, 204, 220)";
              }
            }}
            onMouseOut={(e) => {
              if (page !== 1) {
                e.target.style.backgroundColor = "white";
              }
            }}
          >
            ← Previous
          </button>

          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "rgb(154, 166, 178)",
            fontSize: "14px"
          }}>
            <span>Page</span>
            <strong style={{ color: "#2d3748" }}>{page}</strong>
            <span>of</span>
            <strong style={{ color: "#2d3748" }}>{lastPage}</strong>
          </div>

          <button
            onClick={() => setPage((p) => Math.min(lastPage, p + 1))}
            disabled={page === lastPage}
            style={{
              padding: "10px 20px",
              border: "1px solid rgb(188, 204, 220)",
              backgroundColor: page === lastPage ? "rgb(248, 250, 252)" : "white",
              color: page === lastPage ? "rgb(154, 166, 178)" : "#2d3748",
              borderRadius: 8,
              cursor: page === lastPage ? "not-allowed" : "pointer",
              fontWeight: 500,
              fontSize: "14px",
              transition: "all 0.2s ease",
              display: "flex",
              alignItems: "center",
              gap: 8
            }}
            onMouseOver={(e) => {
              if (page !== lastPage) {
                e.target.style.backgroundColor = "rgb(217, 234, 253)";
                e.target.style.borderColor = "rgb(188, 204, 220)";
              }
            }}
            onMouseOut={(e) => {
              if (page !== lastPage) {
                e.target.style.backgroundColor = "white";
              }
            }}
          >
            Next →
          </button>
        </nav>
      )}

      {/* CSS for loading animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </section>
  );
}