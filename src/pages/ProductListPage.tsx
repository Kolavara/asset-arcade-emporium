
import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ProductListPage = () => {
  const { category } = useParams<{ category: string }>();
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortOption, setSortOption] = useState("newest");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get all unique tags from products
  const allTags = Array.from(
    new Set(products.flatMap((product) => product.tags))
  );

  // Filter products based on category, search term, price range, and tags
  const filteredProducts = products.filter((product) => {
    const matchesCategory = category ? product.category.toLowerCase() === category.toLowerCase() : true;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1] * 2;
    const matchesTags = selectedTags.length === 0 || 
                         selectedTags.some(tag => product.tags.includes(tag));
    
    return matchesCategory && matchesSearch && matchesPrice && matchesTags;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "newest":
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      case "oldest":
        return new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime();
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "popularity":
        return b.downloads - a.downloads;
      default:
        return 0;
    }
  });

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((t) => t !== tag)
        : [...prevSelectedTags, tag]
    );
  };

  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto md:px-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Assets` : "All Digital Assets"}
          </h1>
          <p className="mt-2 text-gray-600">
            {sortedProducts.length} {sortedProducts.length === 1 ? "asset" : "assets"} available
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Filters Sidebar */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-lg font-medium">Search</h3>
              <Input
                type="search"
                placeholder="Search assets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium">Price Range</h3>
              <div className="px-2">
                <Slider
                  defaultValue={[0, 50]}
                  max={50}
                  step={1}
                  onValueChange={(value) => setPriceRange(value)}
                />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1] * 2}+</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium">Tags</h3>
              <div className="space-y-2">
                {allTags.map((tag) => (
                  <div key={tag} className="flex items-center">
                    <Checkbox
                      id={`tag-${tag}`}
                      checked={selectedTags.includes(tag)}
                      onCheckedChange={() => handleTagToggle(tag)}
                    />
                    <Label
                      htmlFor={`tag-${tag}`}
                      className="ml-2 text-sm font-medium text-gray-700 cursor-pointer"
                    >
                      {tag}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setSearchTerm("");
                  setPriceRange([0, 50]);
                  setSelectedTags([]);
                  setSortOption("newest");
                }}
              >
                Reset Filters
              </Button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="md:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing {sortedProducts.length} of {products.length} assets
              </p>
              <div className="w-48">
                <Select value={sortOption} onValueChange={setSortOption}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="popularity">Popularity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {sortedProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-8 text-center bg-gray-50 rounded-lg">
                <h3 className="mb-2 text-xl font-medium text-gray-900">No assets found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductListPage;
