import { useEffect, useState } from "react";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  description?: string;
};

export function useProducts({
  query = "",
  category = "",
  page = 1,
  limit = 10,
  sort = ""
}: {
  query?: string;
  category?: string;
  page?: number;
  limit?: number;
  sort?: string;
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams({
          query,
          category,
          page: String(page),
          limit: String(limit),
          sort
        });

        const res = await fetch(`/products?${params.toString()}`, {
          signal: controller.signal
        });

        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();

        setProducts(data.items || []);
        setTotal(data.total || 0);
      } catch (e: any) {
        if (e.name !== "AbortError") {
          setError(e.message || "Unknown error");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => controller.abort();
  }, [query, category, page, limit, sort]);

  // ⭐ Added sorting logic here
  let sortedProducts = [...products];

  if (sort === "price-asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "name-asc") {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  return { products: sortedProducts, total, loading, error };
}
