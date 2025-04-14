
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative py-16 overflow-hidden bg-gradient-to-r from-brand-50 to-purple-50">
      <div className="container px-4 mx-auto md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Premium Digital Assets for Creators
            </h1>
            <p className="text-lg text-gray-600 md:text-xl">
              Discover thousands of high-quality digital assets to elevate your projects. Templates, graphics, code snippets, and more.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700">
                <Link to="/products">Browse Assets</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/category/featured">Featured Collection</Link>
              </Button>
            </div>
          </div>
          <div className="relative pl-10 md:pl-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500&q=80" 
                    alt="Digital asset preview" 
                    className="object-cover w-full h-40"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500&q=80" 
                    alt="Digital asset preview" 
                    className="object-cover w-full h-64"
                  />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500&q=80" 
                    alt="Digital asset preview" 
                    className="object-cover w-full h-64"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500&q=80" 
                    alt="Digital asset preview" 
                    className="object-cover w-full h-40"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
