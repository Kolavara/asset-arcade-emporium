
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-600 to-purple-700 text-white">
      <div className="container px-4 mx-auto text-center md:px-6">
        <h2 className="text-3xl font-bold md:text-4xl">Ready to elevate your projects?</h2>
        <p className="mt-4 text-lg text-brand-100 md:text-xl max-w-2xl mx-auto">
          Join thousands of creators who use our digital assets to bring their projects to life.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" variant="secondary" className="bg-white text-brand-700 hover:bg-gray-100">
            <Link to="/products">Explore All Assets</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
