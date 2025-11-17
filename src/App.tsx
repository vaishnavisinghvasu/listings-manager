import { Routes, Route, Link } from 'react-router-dom'
import { ProductList } from './features/products/ProductList'
import { ProductDetails } from './features/products/ProductDetails'
import { useState } from 'react'

export default function App() {
  const [hover, setHover] = useState(false)

  return (
    <div>
      {/* Top Header */}
      <header
        style={{
          padding: "20px 30px",
          borderBottom: "1px solid #eee",
          marginBottom: "20px",
        }}
      >
        <nav>
          <Link
            to="/"
            aria-label="Home"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              fontSize: "28px",
              fontWeight: 800,
              textDecoration: "none",
              color: hover ? "#4338CA" : "#4F46E5",
              transition: "0.2s ease",
              letterSpacing: "0.5px",
            }}
          >
            Listings Manager
          </Link>
        </nav>
      </header>

      {/* Main Page Body */}
      <main style={{ padding: "0 30px" }}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </main>
    </div>
  )
}
