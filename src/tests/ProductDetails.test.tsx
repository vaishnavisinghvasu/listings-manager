import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ProductDetails } from "../features/products/ProductDetails";
import { setupServer } from "msw/node";
import { handlers } from "../mocks/handlers";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("loads product details", async () => {
  render(
    <MemoryRouter initialEntries={["/products/1"]}>
      <Routes>
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText(/loading product/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText("Noise-Canceling Headphones")).toBeInTheDocument();
  });
});
