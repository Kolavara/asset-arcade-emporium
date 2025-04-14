
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CategoriesShowcase from "@/components/CategoriesShowcase";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <CategoriesShowcase />
      <FeaturedProducts />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default HomePage;
