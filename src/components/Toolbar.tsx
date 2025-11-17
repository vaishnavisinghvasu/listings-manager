// src/components/Toolbar.tsx
import React from "react";

type Props = {
  query: string;
  setQuery: (s: string) => void;
  category: string;
  setCategory: (c: string) => void;
  sort: string;
  setSort: (s: string) => void;
};

export default function Toolbar({
  query,
  setQuery,
  category,
  setCategory,
  sort,
  setSort,
}: Props) {
  return (
    <div
      role="region"
      aria-label="Products toolbar"
      style={{
        display: "flex",
        gap: 16,
        padding: 24,
        backgroundColor: "white",
        borderRadius: 12,
        border: "1px solid rgba(188, 204, 220, 0.3)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        alignItems: "flex-end",
        flexWrap: "wrap",
      }}
    >
      {/* Search Input */}
      <div style={{ display: "flex", flexDirection: "column", minWidth: 240 }}>
        <label 
          htmlFor="search-input"
          style={{ 
            marginBottom: 8, 
            fontSize: "14px", 
            fontWeight: 600,
            color: "#2d3748"
          }}
        >
          Search Products
        </label>
        <div style={{ position: "relative" }}>
          <input
            id="search-input"
            aria-label="Search products"
            placeholder="Search by product name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ 
              padding: "10px 12px 10px 40px",
              width: "100%",
              border: "1px solid rgb(188, 204, 220)",
              borderRadius: 8,
              fontSize: "14px",
              backgroundColor: "rgb(248, 250, 252)",
              transition: "all 0.2s ease",
              outline: "none"
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "rgb(154, 166, 178)";
              e.target.style.backgroundColor = "white";
              e.target.style.boxShadow = "0 0 0 3px rgba(188, 204, 220, 0.2)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "rgb(188, 204, 220)";
              e.target.style.backgroundColor = "rgb(248, 250, 252)";
              e.target.style.boxShadow = "none";
            }}
          />
          <span 
            style={{
              position: "absolute",
              left: 12,
              top: "50%",
              transform: "translateY(-50%)",
              color: "rgb(154, 166, 178)",
              fontSize: "16px"
            }}
          >
            🔍
          </span>
          {query && (
            <button
              onClick={() => setQuery("")}
              style={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                color: "rgb(154, 166, 178)",
                cursor: "pointer",
                padding: 4,
                borderRadius: 4,
                fontSize: "16px"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "rgb(188, 204, 220)";
                e.currentTarget.style.backgroundColor = "rgba(188, 204, 220, 0.1)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "rgb(154, 166, 178)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category Filter */}
      <div style={{ display: "flex", flexDirection: "column", minWidth: 200 }}>
        <label 
          htmlFor="category-select"
          style={{ 
            marginBottom: 8, 
            fontSize: "14px", 
            fontWeight: 600,
            color: "#2d3748"
          }}
        >
          Category
        </label>
        <select
          id="category-select"
          aria-label="Filter by category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ 
            padding: "10px 12px",
            border: "1px solid rgb(188, 204, 220)",
            borderRadius: 8,
            fontSize: "14px",
            backgroundColor: "rgb(248, 250, 252)",
            color: "#2d3748",
            cursor: "pointer",
            transition: "all 0.2s ease",
            outline: "none",
            appearance: "none",
            backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'><path fill='%239AA6B2' d='M2 0L0 2h4zm0 5L0 3h4z'/></svg>")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 12px center",
            backgroundSize: "8px 10px",
            paddingRight: "32px"
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "rgb(154, 166, 178)";
            e.target.style.backgroundColor = "white";
            e.target.style.boxShadow = "0 0 0 3px rgba(188, 204, 220, 0.2)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "rgb(188, 204, 220)";
            e.target.style.backgroundColor = "rgb(248, 250, 252)";
            e.target.style.boxShadow = "none";
          }}
        >
          <option value="">All Categories</option>
          <option value="electronics">📱 Electronics</option>
          <option value="clothing">👕 Clothing</option>
          <option value="home">🏠 Home & Kitchen</option>
          <option value="books">📚 Books</option>
          <option value="sports">⚽ Sports</option>
          <option value="beauty">💄 Beauty</option>
        </select>
      </div>

      {/* Sort Select */}
      <div style={{ display: "flex", flexDirection: "column", minWidth: 200 }}>
        <label 
          htmlFor="sort-select"
          style={{ 
            marginBottom: 8, 
            fontSize: "14px", 
            fontWeight: 600,
            color: "#2d3748"
          }}
        >
          Sort By
        </label>
        <select
          id="sort-select"
          aria-label="Sort products"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          style={{ 
            padding: "10px 12px",
            border: "1px solid rgb(188, 204, 220)",
            borderRadius: 8,
            fontSize: "14px",
            backgroundColor: "rgb(248, 250, 252)",
            color: "#2d3748",
            cursor: "pointer",
            transition: "all 0.2s ease",
            outline: "none",
            appearance: "none",
            backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'><path fill='%239AA6B2' d='M2 0L0 2h4zm0 5L0 3h4z'/></svg>")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 12px center",
            backgroundSize: "8px 10px",
            paddingRight: "32px"
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "rgb(154, 166, 178)";
            e.target.style.backgroundColor = "white";
            e.target.style.boxShadow = "0 0 0 3px rgba(188, 204, 220, 0.2)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "rgb(188, 204, 220)";
            e.target.style.backgroundColor = "rgb(248, 250, 252)";
            e.target.style.boxShadow = "none";
          }}
        >
          <option value="">Default Order</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
          <option value="newest">Newest First</option>
        </select>
      </div>

      {/* Clear Filters Button */}
      {(query || category || sort) && (
        <button
          onClick={() => {
            setQuery("");
            setCategory("");
            setSort("");
          }}
          style={{
            padding: "10px 16px",
            border: "1px solid rgb(188, 204, 220)",
            backgroundColor: "transparent",
            color: "rgb(154, 166, 178)",
            borderRadius: 8,
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
            transition: "all 0.2s ease",
            display: "flex",
            alignItems: "center",
            gap: 6,
            height: "fit-content"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "rgb(248, 250, 252)";
            e.currentTarget.style.color = "#2d3748";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "rgb(154, 166, 178)";
          }}
        >
          <span>✕</span>
          Clear Filters
        </button>
      )}
    </div>
  );
}