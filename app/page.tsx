// app/page.tsx
// This is the home page, which renders our ProductCard in the center of the screen.

import ProductCard from "./components/ProductCard";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <ProductCard />
    </main>
  );
}
