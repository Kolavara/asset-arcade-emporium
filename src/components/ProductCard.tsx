
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, isInCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="overflow-hidden transition-all border-transparent h-full hover:border-brand-200 hover:shadow-md">
        <div className="relative overflow-hidden aspect-video bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
          {product.featured && (
            <Badge className="absolute top-2 left-2" variant="secondary">
              Featured
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between">
            <div>
              <h3 className="font-medium text-gray-900 truncate">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
            <div className="text-lg font-semibold text-brand-700">${product.price.toFixed(2)}</div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button
            variant={isInCart(product.id) ? "secondary" : "default"}
            className="w-full"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {isInCart(product.id) ? "Added to cart" : "Add to cart"}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
