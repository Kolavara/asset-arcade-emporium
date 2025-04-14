
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/use-cart";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const isMobile = useIsMobile();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Templates", path: "/category/templates" },
    { name: "Graphics", path: "/category/graphics" },
    { name: "Code", path: "/category/code" },
    { name: "Audio", path: "/category/audio" }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-brand-700">DigitalAssets</span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-brand-600"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}

        {/* Search Bar - Desktop */}
        {!isMobile && (
          <div className="hidden mx-4 md:block md:w-1/3">
            <div className="relative">
              <Search className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-500 left-3" />
              <Input
                type="search"
                placeholder="Search assets..."
                className="pl-10 pr-4"
              />
            </div>
          </div>
        )}

        {/* Cart & Profile - Both Mobile and Desktop */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative p-2">
            <ShoppingCart className="w-5 h-5 text-gray-700" />
            {cartItems.length > 0 && (
              <Badge variant="destructive" className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs">
                {cartItems.length}
              </Badge>
            )}
          </Link>
          
          <Link to="/account">
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5 text-gray-700" />
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="absolute w-full px-4 py-4 bg-white border-b border-gray-200 shadow-md md:hidden">
          <div className="flex flex-col space-y-4">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-500 left-3" />
              <Input
                type="search"
                placeholder="Search assets..."
                className="pl-10 pr-4"
              />
            </div>
            
            {/* Mobile Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="py-2 text-sm font-medium text-gray-700 transition-colors hover:text-brand-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
