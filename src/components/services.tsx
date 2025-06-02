export default function Services() {
  const services = [
    {
      title: 'Equipment Hire',
      description: 'Daily, weekly, and monthly hire rates for all equipment types',
      icon: '🏗️'
    },
    {
      title: 'Delivery & Collection',
      description: 'Professional delivery and collection service across Perth metro',
      icon: '🚛'
    },
    {
      title: 'Training & Support',
      description: 'Equipment operation training and ongoing technical support',
      icon: '👨‍🏫'
    },
    {
      title: 'Maintenance Service',
      description: 'Regular equipment maintenance and safety inspections',
      icon: '🔧'
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive equipment hire solutions with professional support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-600 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Why Choose Huron Hire?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Safety First</h4>
              <p className="text-blue-100">All equipment regularly serviced and safety certified</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Competitive Rates</h4>
              <p className="text-blue-100">Transparent pricing with no hidden costs</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Local Expertise</h4>
              <p className="text-blue-100">Perth-based team with deep industry knowledge</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}