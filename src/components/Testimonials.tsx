
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    content:
      "The templates I purchased saved me countless hours of development time. The code is clean, well-documented, and easily customizable.",
    author: "Alex Johnson",
    role: "Frontend Developer",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    content:
      "I've used digital assets from this marketplace for multiple client projects. The quality is consistently high and my clients love the results.",
    author: "Sarah Chen",
    role: "UI/UX Designer",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    content:
      "As a content creator, the audio assets have elevated my videos to a professional level. Worth every penny.",
    author: "Michael Rivera",
    role: "Content Creator",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-gray-600">
            Trusted by creators, designers, and developers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-gray-100 shadow-sm">
              <CardContent className="p-6">
                <p className="mb-6 text-gray-700 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 mr-4 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
