import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-bold text-gradient font-mono"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            &lt;SG /&gt;
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 link-underline font-medium"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            className="hidden lg:block px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm glow-primary hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl pt-24 px-6 lg:hidden"
          >
            <ul className="flex flex-col gap-5">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold glow-primary"
                >
                  Let's Talk
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
