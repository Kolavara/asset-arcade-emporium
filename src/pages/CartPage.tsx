
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCart } from "@/hooks/use-cart";
import { Trash2, Minus, Plus, ArrowRight, ShoppingBag } from "lucide-react";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [discount, setDiscount] = useState(0);
  
  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };
  
  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === "discount10") {
      setCouponApplied(true);
      setDiscount(getTotalPrice() * 0.1);
    } else {
      setCouponApplied(false);
      setDiscount(0);
    }
  };
  
  const calculatedSubtotal = getTotalPrice();
  const calculatedTotal = calculatedSubtotal - discount;

  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto md:px-6">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="py-16 text-center">
            <div className="flex justify-center mb-6">
              <ShoppingBag className="w-16 h-16 text-gray-300" />
            </div>
            <h2 className="mb-4 text-2xl font-medium text-gray-900">Your cart is empty</h2>
            <p className="mb-8 text-gray-600">Looks like you haven't added any digital assets to your cart yet.</p>
            <Button asChild>
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Table>
                <TableCaption>Your shopping cart items.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[350px]">Product</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center">
                          <div className="w-16 h-16 mr-4 overflow-hidden rounded-md bg-gray-100">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div>
                            <Link 
                              to={`/product/${item.id}`}
                              className="font-medium text-gray-900 hover:text-brand-600"
                            >
                              {item.name}
                            </Link>
                            <p className="text-sm text-gray-500">{item.category}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <Button
                            variant="outline"
                            size="icon"
                            className="w-8 h-8"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <Input
                            type="number"
                            value={item.quantity}
                            min="1"
                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                            className="w-12 text-center"
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            className="w-8 h-8"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">${(item.price * item.quantity).toFixed(2)}</TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={clearCart}>
                  Clear Cart
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/products">Continue Shopping</Link>
                </Button>
              </div>
            </div>
            
            <div>
              <div className="p-6 border rounded-lg bg-gray-50 border-gray-200">
                <h2 className="mb-4 text-xl font-medium text-gray-900">Order Summary</h2>
                
                <div className="py-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${calculatedSubtotal.toFixed(2)}</span>
                  </div>
                  
                  {couponApplied && (
                    <div className="flex justify-between text-brand-600">
                      <span>Discount (10%)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="pt-3 mt-3 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span className="text-lg font-medium text-gray-900">Total</span>
                      <span className="text-lg font-bold text-brand-600">${calculatedTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 mt-6 border-t border-gray-200">
                  <div className="flex mb-4 space-x-2">
                    <Input
                      type="text"
                      placeholder="Coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button variant="outline" onClick={handleApplyCoupon}>Apply</Button>
                  </div>
                  
                  {couponApplied && (
                    <p className="p-2 mb-4 text-sm text-green-700 bg-green-50 rounded">
                      Coupon "DISCOUNT10" applied successfully!
                    </p>
                  )}
                  
                  <Button asChild className="w-full">
                    <Link to="/checkout">
                      Proceed to Checkout <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>

                  <p className="mt-4 text-xs text-center text-gray-500">
                    By proceeding, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
