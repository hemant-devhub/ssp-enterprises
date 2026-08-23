import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { useLocation } from "react-router-dom";
import "./Header.css";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const scroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  useEffect(() => {
    setMobile(false);
  }, [location.pathname]);

  const showWhiteHeader = !isHome || scrolled;

  return (
    <>
      {/* NAVBAR */}
      <header className="header">
        <div className="header-container">
          <div
            className={`header-navbar ${
              showWhiteHeader
                ? "header-navbar-white"
                : "header-navbar-transparent"
            }`}
          >
            {/* LOGO */}
            <a href="/" className="header-logo-link">
              <img
                src={
                  showWhiteHeader
                    ? "/ssp-logo-black.png"
                    : "/ssp-logo-white.png"
                }
                alt="Logo"
                className="header-logo"
              />
            </a>

            {/* DESKTOP */}
            <div className="desktop-navigation">
              <nav className="navigation">
                {navItems.map((item) => (
                  <motion.a
                    whileHover={{ y: -2 }}
                    key={item.title}
                    href={item.href}
                    className={`navigation-link ${
                      showWhiteHeader
                        ? "navigation-link-black"
                        : "navigation-link-white"
                    }`}
                  >
                    {item.title}

                    <span className="navigation-link-underline"></span>
                  </motion.a>
                ))}
              </nav>

              <Button
                onClick={() => (window.location.href = "/contact")}
                className="quote-button"
              >
                Get Free Quote

                <ArrowRight className="quote-button-icon" />
              </Button>
            </div>

            {/* MOBILE */}
            <button
              onClick={() => setMobile(true)}
              className="mobile-menu-button"
              aria-label="Open menu"
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobile && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="mobile-overlay"
              onClick={() => setMobile(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.35,
              }}
              className="mobile-menu"
            >
              <div className="mobile-menu-header">
                <img
                  src="/ssp-logo-black.png"
                  alt="Logo"
                  className="mobile-logo"
                />

                <button
                  onClick={() => setMobile(false)}
                  className="mobile-close-button"
                  aria-label="Close menu"
                >
                  <X />
                </button>
              </div>

              <div className="mobile-navigation">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    href={item.href}
                    className="mobile-navigation-link"
                  >
                    {item.title}
                  </motion.a>
                ))}

                <Button
                  onClick={() => (window.location.href = "/contact")}
                  className="mobile-quote-button"
                >
                  Get Free Quote
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}