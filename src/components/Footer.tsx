import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import sgLogo from "@/assets/sg-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img src={sgLogo} alt="SG Logo" className="h-8 w-auto" />
          </motion.a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            Code the Future, Design the Difference
          </p>

          {/* Quick Links */}
          <div className="flex gap-6">
            {["About", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
