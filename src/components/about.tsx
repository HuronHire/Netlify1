export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Huron Hire
            </h2>
            <p className="text-lg text-gray-600">
              Your trusted partner for professional equipment hire in Perth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Professional Equipment Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                Huron Hire is a Perth-based equipment hire company specializing in access equipment 
                for construction, maintenance, and industrial applications. We pride ourselves on 
                providing reliable, well-maintained equipment with exceptional customer service.
              </p>
              <p className="text-gray-600 mb-6">
                Our team brings years of industry experience and deep understanding of equipment 
                requirements across various sectors. We're committed to helping you complete your 
                projects safely and efficiently.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Fully licensed and insured operations</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Regular equipment maintenance and safety inspections</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Competitive pricing and flexible hire terms</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Professional delivery and collection service</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📞</span>
                  <span className="text-gray-700">0418 959 338</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">✉️</span>
                  <span className="text-gray-700">hire@huronhire.com.au</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📍</span>
                  <span className="text-gray-700">Perth, Western Australia</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">🕒</span>
                  <span className="text-gray-700">Mon-Fri: 7AM-5PM, Sat: 8AM-12PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6">
              Contact us today for a competitive quote on your equipment hire needs
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}