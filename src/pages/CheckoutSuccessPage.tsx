
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Download, ArrowLeft } from "lucide-react";

const CheckoutSuccessPage = () => {
  return (
    <Layout>
      <div className="container px-4 py-16 mx-auto text-center md:px-6">
        <div className="max-w-md mx-auto">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="w-20 h-20 text-green-500" />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-gray-900">Payment Successful!</h1>
          <p className="mb-8 text-lg text-gray-600">
            Thank you for your purchase. Your digital assets are now ready for download.
          </p>
          
          <div className="p-6 mb-8 border rounded-lg shadow-sm">
            <h2 className="mb-4 text-xl font-medium text-gray-900">Order Details</h2>
            <div className="mb-4">
              <p className="text-sm text-gray-500">Order Number</p>
              <p className="font-medium text-gray-900">#DA{Math.floor(Math.random() * 10000)}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-500">Date</p>
              <p className="font-medium text-gray-900">{new Date().toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium text-gray-900">customer@example.com</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <Button asChild className="w-full">
              <Link to="/account/downloads">
                <Download className="w-4 h-4 mr-2" />
                Go to Downloads
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Return to Home
              </Link>
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-gray-500">
            A confirmation email has been sent to your email address with all the details.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutSuccessPage;
