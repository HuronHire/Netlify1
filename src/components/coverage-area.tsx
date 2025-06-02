export default function CoverageArea() {
  const areas = [
    'Perth CBD', 'Fremantle', 'Joondalup', 'Midland', 'Armadale',
    'Rockingham', 'Wanneroo', 'Stirling', 'Canning', 'Gosnells',
    'Swan', 'Mundaring', 'Kalamunda', 'Serpentine-Jarrahdale'
  ];

  return (
    <section id="coverage" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Perth Metro Coverage
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We provide equipment hire services across Perth metropolitan area and surrounding regions. 
              Our central location ensures quick delivery and collection times.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Areas Include:</h3>
              <div className="grid grid-cols-2 gap-2">
                {areas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-blue-600 mr-2">📍</span>
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800 font-medium">
                Don't see your area listed? Contact us - we may still be able to service your location.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-6 h-96 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map</h3>
              <p className="text-gray-600 mb-4">Perth Metro Service Area</p>
              <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500">Map placeholder - Google Maps integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}