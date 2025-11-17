Listings Manager — Frontend Coding Exercise

This project is a solution to the iGnosis Tech Frontend Engineering Coding Exercise.
It implements a complete Listings Manager with search, filtering, sorting, pagination, and product details using a mocked API powered by MSW.

🚀 Tech Stack

React 18

TypeScript

React Router

MSW (Mock Service Worker)

Vitest + Testing Library

CSS Modules / Custom Styling

🎯 Features Implemented
✅ 1. Product List

Paginated product list

Shows name, price, category, stock status

Clean responsive layout

✅ 2. Search

Real-time search by product name

Case-insensitive matching

Works with pagination and filters

✅ 3. Filter

Filter products by category

Reset filter option included

✅ 4. Sorting

Sort by:

Name (A → Z)

Price (Low → High)

Price (High → Low)

Sorting works along with search & filter

✅ 5. Product Details Page

Displays full product details:

Name

Price

Category

Stock status

Description

Handles loading, error, and not-found states

✅ 6. State Handling

Smooth loading states

Clear error messages

Graceful empty state ("No products found")

✅ 7. Accessibility

Semantic HTML

Labels for inputs

Keyboard navigation friendly

Aria attributes added where needed

✅ 8. Testing (Vitest + React Testing Library)

Implemented 2 meaningful tests:

ProductList → loads and displays product list

ProductDetails → fetches and renders a single product

Both tests pass and mock API responses.

📦 Project Structure
src/
 ├── features/
 │    └── products/
 │         ├── ProductList.tsx
 │         ├── ProductDetails.tsx
 │         ├── useProducts.ts
 │         └── useProductDetails.ts
 ├── mocks/
 │    ├── handlers.ts
 │    └── data/products.json
 ├── tests/
 │    ├── ProductList.test.tsx
 │    └── ProductDetails.test.tsx
 ├── App.tsx
 └── main.tsx

🧪 Running Tests
yarn test

▶️ Running the App
nvm use
yarn install
npx msw init public --save
yarn dev


App runs at:
➡️ http://localhost:5173

📝 Design Decisions & Notes

I kept the UI clean, minimal, and readable—prioritizing clarity over heavy styling.

Toolbar (search, sort, filter) is custom-built without a UI library to show component design skills.

Pagination, sorting, search, and filter integrate seamlessly because all logic lives inside useProducts().

Mock API behavior matches real-world REST patterns, so replacing MSW with a real backend would be straightforward.

Tests focus on user-visible behavior instead of implementation details.

🚀 If I Had More Time

Add mobile-first responsive layout improvements

Add debounce for search input

Add global state (Zustand) for shared filter/search

Write more tests covering sorting & category filtering

Add animations and improved skeleton loaders

✔ Submission

This repository contains my completed solution for the iGnosis Tech frontend coding exercise.