import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

interface NavbarProps {
  logo?: string;
  links?: Array<{ label: string; href: string }>;
}

const Navbar = ({
  logo = "Girls Illuminated",
  links = [
    { label: "Home", href: "#" },
    { label: "Our Program", href: "#program" },
    { label: "About", href: "/about-us" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-offWhite shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="#"
            className="text-2xl tracking-wider font-texGyreBonum text-radiantRed"
            style={{ minWidth: "120px" }} // Minimum size requirement
          >
            <div className="flex flex-col">
              <span>Girls</span>
              <span>Illuminated</span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-charcoal hover:text-radiantRed transition-colors duration-300 font-openSans"
            >
              {link.label}
            </a>
          ))}
          <Button className="bg-radiantRed hover:bg-radiantRed/90 text-white font-openSans">
            Register Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-charcoal hover:text-radiantRed focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-offWhite py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-charcoal hover:text-radiantRed transition-colors duration-300 py-2 font-openSans"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button className="bg-radiantRed hover:bg-radiantRed/90 text-white w-full font-openSans">
              Register Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
