
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <div className="container flex flex-col items-center justify-center min-h-[60vh] px-4 py-16 mx-auto text-center md:px-6">
        <h1 className="text-7xl font-bold text-gray-900">404</h1>
        <h2 className="mb-4 text-2xl font-medium text-gray-700">Page Not Found</h2>
        <p className="max-w-md mb-8 text-gray-600">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/products">Browse Products</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
