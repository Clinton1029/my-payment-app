import ProductCard from "./components/ProductCard";

const products = [
  {
    title: "Premium Wireless Headphones",
    price: 149.99,
    description: "Experience high-definition audio with unmatched elegance.",
    image: "/headphones.avif",
  },
  {
    title: "Smartwatch Pro X",
    price: 199.99,
    description: "Track your fitness, notifications, and more in luxury.",
    image: "/smartwatch.avif",
  },
  {
    title: "4K Ultra HD Camera",
    price: 499.99,
    description: "Capture life in cinematic clarity and precision.",
    image: "/camera.avif",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 bg-gradient-to-br from-gray-900 to-black">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        ✨ Premium Collection
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </main>
  );
}
