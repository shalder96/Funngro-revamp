import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/homeData";
import Container from "@/components/Common/Container/Container";
import { cardHover } from "@/utils/motion";
import Button from "@/components/Common/Button";
import { staggerContainer, staggerItem } from "@/utils/motion";
import FunngroLogo from "@/components/Common/Logo/FunngroLogo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Toggle mobile menu open/close state
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Handle window resize to close mobile menu on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll event to change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () =>
      window.removeEventListener("scroll", handleScroll, { passive: true });
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-[background-color,backdrop-filter,box-shadow] duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,.08)]"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={cardHover}>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold tracking-tight text-emerald-500"
            >
              <FunngroLogo className="h-12 text-slate-900" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <NavLink key={item.path} to={item.path}>
                {({ isActive }) => (
                  <span
                    className={`relative font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-emerald-600"
                        : "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-md"
                    }`}
                  >
                    {item.title}

                    {isActive && (
                      <span className="absolute -bottom-2 left-0 h-0.75 w-full rounded-full bg-emerald-500" />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Button */}

          <div className="hidden items-center md:flex">
            <Button variant="primary">
              Get Started
            </Button>
          </div>

          {/* Mobile Button */}

          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            animate={{ rotate: menuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <X size={30} className="text-slate-800" />
            ) : (
              <Menu size={30} className="text-slate-800" />
            )}
          </motion.button>
        </div>
      </Container>

      {/* Mobile Menu */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-white/90 shadow-[0_15px_45px_rgba(0,0,0,.08)] backdrop-blur-xl md:hidden"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-6 p-6"
            >
              {navLinks.map((item) => (
                <motion.div key={item.path} variants={staggerItem}>
                  <NavLink
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "font-medium text-emerald-500"
                        : "font-medium text-slate-700 hover:text-emerald-500"
                    }
                  >
                    {item.title}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div variants={staggerItem}>
                <Button variant="primary" className="w-full">
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
