# 🛍️ Listings Manager (React + TypeScript)

A fully functional Listings Manager web application built as part of the
iGnosis Tech Frontend Engineering Coding Exercise.
Includes search, sorting, filtering, pagination, and detailed product views using MSW (Mock API).

## ✨ Features

📄 Product Listing – Paginated list with clean UI  
🔍 Search – Instant, case-insensitive search by name  
🏷️ Filter – Category filtering  
🔃 Sorting – By name or price (low→high, high→low)  
📘 Product Details – Full details page with description  
⏳ State Handling – Loading, error, empty handling  
🧪 Testing – Vitest + React Testing Library  
🎨 Responsive UI – Clean and accessible layout  

## 🧩 Tech Stack

Frontend: React 18, TypeScript, CSS  
Routing: React Router  
Mock API: MSW (Mock Service Worker)  
Testing: Vitest + Testing Library  
Build Tool: Vite  

## 📂 Project Structure

```
listings-manager/
│
├── src/
│   ├── features/
│   │   └── products/
│   │        ├── ProductList.tsx
│   │        ├── ProductDetails.tsx
│   │        ├── useProducts.ts
│   │        └── useProductDetails.ts
│   ├── mocks/
│   │   ├── handlers.ts
│   │   └── data/products.json
│   ├── tests/
│   │   ├── ProductList.test.tsx
│   │   └── ProductDetails.test.tsx
│   ├── App.tsx
│   └── main.tsx
│
└── README.md
```

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```
git clone https://github.com/vaishnavisinghvasu/listings-manager.git
cd listings-manager
```

### 2️⃣ Install dependencies
```
nvm use
yarn install
```

### 3️⃣ Initialize MSW (one-time)
```
npx msw init public --save
```

### 4️⃣ Start the development server
```
yarn dev
```

Runs at: http://localhost:5173

## 🧪 Running Tests
```
yarn test
```

ProductList → loads and displays list  
ProductDetails → fetches and displays product  

## 🛠️ Usage

Browse all products  
Search by name  
Filter by category  
Sort by price or name  
Click any product to view details  
Experience loading/error states  

## 📝 Design Decisions

Toolbar UI built manually (no component library)  
All product list logic managed inside custom hook  
Simple, clean, accessible design  
MSW ensures realistic API-like behavior  
Tests focus on user experience, not internals  

## 🚀 If I Had More Time

Mobile-first improvements  
Search debounce  
Zustand for global state  
More animations + skeleton loaders  
Additional test coverage (sorting, filtering)  

## ✔ Submission

This repository contains my completed solution for the
iGnosis Tech Frontend Engineering Coding Exercise.
