export default function EquipmentCategories() {
  const categories = [
    {
      id: 'electric-scissor-lifts',
      title: 'Electric Scissor Lifts',
      description: 'Perfect for indoor applications with zero emissions and quiet operation',
      features: ['4m to 12m working height', 'Zero emissions', 'Compact design', 'Easy maneuverability'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 'rough-terrain-scissor-lifts', 
      title: 'Rough Terrain Scissor Lifts',
      description: 'Built for outdoor construction sites with all-terrain capabilities',
      features: ['6m to 15m working height', 'All-terrain tires', 'Weather resistant', 'Heavy-duty construction'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 'boom-lifts',
      title: 'Boom Lifts',
      description: 'Articulating and telescopic boom lifts for maximum reach and flexibility',
      features: ['12m to 25m working height', 'Articulating arms', 'Extended reach', 'Precise positioning'],
      image: '/api/placeholder/400/300'
    },
    {
      id: 'plant-trailers',
      title: 'Plant Trailers',
      description: 'Professional equipment transport solutions for your machinery',
      features: ['Various load capacities', 'Ramp access', 'Tie-down points', 'Road registered'],
      image: '/api/placeholder/400/300'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="equipment" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Equipment Range
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional grade access equipment for construction, maintenance, and industrial applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Equipment Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {category.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-blue-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={scrollToContact}
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}