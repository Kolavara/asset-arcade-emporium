
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  Star, 
  Calendar, 
  Download, 
  ExternalLink,
  Share2,
  Heart
} from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import ProductCard from "@/components/ProductCard";

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart, isInCart } = useCart();
  const [isWishlist, setIsWishlist] = useState(false);
  
  const product = products.find((p) => p.id === productId);
  
  if (!product) {
    return (
      <Layout>
        <div className="container px-4 py-16 mx-auto text-center md:px-6">
          <h1 className="text-3xl font-bold">Product Not Found</h1>
          <p className="mt-4 text-lg text-gray-600">
            The product you're looking for doesn't exist.
          </p>
          <Button asChild className="mt-8">
            <Link to="/products">Browse Products</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  // Find related products (same category, different id)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const toggleWishlist = () => {
    setIsWishlist(!isWishlist);
  };

  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative overflow-hidden rounded-lg bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
            />
            {product.featured && (
              <Badge className="absolute top-4 left-4" variant="secondary">
                Featured
              </Badge>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Breadcrumbs */}
            <nav className="flex text-sm text-gray-500">
              <Link to="/" className="hover:text-brand-600">Home</Link>
              <span className="mx-2">/</span>
              <Link to={`/category/${product.category.toLowerCase()}`} className="hover:text-brand-600">
                {product.category}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{product.name}</span>
            </nav>

            {/* Title and price */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <div className="flex items-center mt-2 space-x-4">
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-gray-900">{product.rating.toFixed(1)}</span>
                </div>
                <div className="flex items-center">
                  <Download className="w-4 h-4 mr-1 text-gray-500" />
                  <span className="text-sm text-gray-600">{product.downloads} downloads</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    {new Date(product.dateAdded).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-3xl font-bold text-brand-600">${product.price.toFixed(2)}</p>
            </div>

            {/* Author info */}
            <div className="flex items-center py-4 border-t border-b border-gray-200">
              <img
                src={product.authorImage}
                alt={product.authorName}
                className="w-10 h-10 mr-4 rounded-full"
              />
              <div>
                <p className="text-sm text-gray-600">Created by</p>
                <p className="font-medium text-gray-900">{product.authorName}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700">{product.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-gray-600">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <Button
                className="flex-1 md:flex-none md:min-w-[200px]"
                onClick={handleAddToCart}
                disabled={isInCart(product.id)}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                {isInCart(product.id) ? "Added to Cart" : "Add to Cart"}
              </Button>
              
              <Button
                variant="outline"
                className="flex-1 md:flex-none md:min-w-[180px]"
                onClick={toggleWishlist}
              >
                <Heart className={`w-4 h-4 mr-2 ${isWishlist ? "fill-red-500 text-red-500" : ""}`} />
                {isWishlist ? "Saved" : "Save for Later"}
              </Button>
              
              <Button variant="ghost" size="icon">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Live Demo */}
            {product.liveDemoUrl && (
              <div>
                <Button variant="outline" asChild>
                  <a href={product.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Demo
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Product details tabs */}
        <div className="mt-16">
          <Tabs defaultValue="details">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="license">License</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">About This Item</h3>
                    <p className="text-gray-700">
                      {product.description}
                    </p>
                    <p className="text-gray-700">
                      This digital asset comes with full documentation and support. All files are professionally designed and organized to help you implement them quickly in your projects.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="specs" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Technical Specifications</h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="p-4 border rounded-lg border-gray-200">
                        <div className="text-sm font-medium text-gray-500">File Format</div>
                        <div className="mt-1 font-medium">Multiple formats available</div>
                      </div>
                      <div className="p-4 border rounded-lg border-gray-200">
                        <div className="text-sm font-medium text-gray-500">Compatible With</div>
                        <div className="mt-1 font-medium">All major software</div>
                      </div>
                      <div className="p-4 border rounded-lg border-gray-200">
                        <div className="text-sm font-medium text-gray-500">File Size</div>
                        <div className="mt-1 font-medium">Varies by format</div>
                      </div>
                      <div className="p-4 border rounded-lg border-gray-200">
                        <div className="text-sm font-medium text-gray-500">Released</div>
                        <div className="mt-1 font-medium">{new Date(product.dateAdded).toLocaleDateString()}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="license" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">License Information</h3>
                    <p className="text-gray-700">
                      This digital asset comes with a standard license that allows you to use it in a single end product, either personal or commercial.
                    </p>
                    <ul className="pl-5 mt-4 space-y-2 text-gray-700 list-disc">
                      <li>Use in a single end product</li>
                      <li>Use by you or one client</li>
                      <li>Use in a free or commercial product</li>
                      <li>Modification rights</li>
                    </ul>
                    <p className="mt-4 text-gray-700">
                      If you need an extended license for multiple products or distributions, please contact the author.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">You Might Also Like</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
