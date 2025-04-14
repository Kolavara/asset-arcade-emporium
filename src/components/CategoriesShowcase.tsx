
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Code, FileText, Image, Music } from "lucide-react";

const categories = [
  {
    name: "Templates",
    icon: <FileText className="w-8 h-8 text-brand-600" />,
    description: "Website and app templates for designers and developers",
    path: "/category/templates",
    color: "bg-blue-50"
  },
  {
    name: "Graphics",
    icon: <Image className="w-8 h-8 text-brand-600" />,
    description: "Illustrations, icons, and design assets",
    path: "/category/graphics",
    color: "bg-purple-50"
  },
  {
    name: "Code",
    icon: <Code className="w-8 h-8 text-brand-600" />,
    description: "Scripts, plugins, and code snippets",
    path: "/category/code",
    color: "bg-green-50"
  },
  {
    name: "Audio",
    icon: <Music className="w-8 h-8 text-brand-600" />,
    description: "Music, sound effects, and audio tracks",
    path: "/category/audio",
    color: "bg-orange-50"
  }
];

const CategoriesShowcase = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Explore Categories</h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover high-quality digital assets across popular categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.name} to={category.path}>
              <Card className={`h-full transition-transform hover:shadow-md hover:-translate-y-1 ${category.color} border-none`}>
                <CardContent className="flex flex-col items-center p-6 text-center h-full">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white shadow-sm">
                    {category.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesShowcase;
