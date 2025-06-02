import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-header-dark text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold tracking-tight">HURON HIRE</h1>
            <span className="text-sm text-gray-300 hidden sm:block">Professional Equipment Hire</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="hover:text-blue-300 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('equipment')}
              className="hover:text-blue-300 transition-colors"
            >
              Equipment
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="hover:text-blue-300 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('coverage')}
              className="hover:text-blue-300 transition-colors"
            >
              Coverage
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-blue-300 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-blue-300 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 hover:text-blue-300 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('equipment')}
              className="block w-full text-left py-2 hover:text-blue-300 transition-colors"
            >
              Equipment
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 hover:text-blue-300 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('coverage')}
              className="block w-full text-left py-2 hover:text-blue-300 transition-colors"
            >
              Coverage
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 hover:text-blue-300 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 hover:text-blue-300 transition-colors"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}