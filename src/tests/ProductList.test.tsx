import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ProductList } from "../features/products/ProductList";
import { setupServer } from "msw/node";
import { handlers } from "../mocks/handlers";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("loads and displays product list", async () => {
  render(
    <MemoryRouter>
      <ProductList />
    </MemoryRouter>
  );

  expect(screen.getByText(/loading products/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText("Noise-Canceling Headphones")).toBeInTheDocument();
  });
});
