import { Button } from "./ui/button";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Professional Equipment Hire
          <span className="block text-blue-600">Perth, Western Australia</span>
        </h1>
        
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Reliable access lifts, scissor lifts, boom lifts, and plant trailers for construction, 
          maintenance, and industrial projects across Perth and surrounding areas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
          >
            Get Quote Now
          </Button>
          <div className="flex items-center text-gray-600">
            <span className="text-2xl mr-2">📞</span>
            <span className="text-lg font-semibold">Call: 0418 959 338</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Same Day Service</h3>
            <p className="text-gray-600">Quick response for urgent equipment needs</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fully Insured</h3>
            <p className="text-gray-600">Comprehensive coverage for peace of mind</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
            <p className="text-gray-600">Professional guidance and equipment training</p>
          </div>
        </div>
      </div>
    </section>
  );
}