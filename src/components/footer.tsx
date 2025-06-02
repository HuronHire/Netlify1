export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">HURON HIRE</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional equipment hire services for construction, maintenance, and industrial 
              projects across Perth and surrounding areas.
            </p>
            <div className="flex space-x-4">
              <span className="text-gray-400">Follow us:</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Equipment</h4>
            <ul className="space-y-2">
              <li><a href="#equipment" className="text-gray-300 hover:text-white transition-colors">Electric Scissor Lifts</a></li>
              <li><a href="#equipment" className="text-gray-300 hover:text-white transition-colors">Rough Terrain Scissor Lifts</a></li>
              <li><a href="#equipment" className="text-gray-300 hover:text-white transition-colors">Boom Lifts</a></li>
              <li><a href="#equipment" className="text-gray-300 hover:text-white transition-colors">Plant Trailers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">📞 0418 959 338</li>
              <li className="text-gray-300">✉️ hire@huronhire.com.au</li>
              <li className="text-gray-300">📍 Perth, WA</li>
              <li className="text-gray-300">🕒 Mon-Fri: 7AM-5PM</li>
              <li className="text-gray-300">🕒 Sat: 8AM-12PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Huron Hire. All rights reserved. | Professional Equipment Hire Perth
          </p>
        </div>
      </div>
    </footer>
  );
}