
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const FeaturedProducts = () => {
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Featured Assets</h2>
          <p className="mt-4 text-lg text-gray-600">
            Hand-picked premium digital assets for your next project
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
