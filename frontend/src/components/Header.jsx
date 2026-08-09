import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

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

  useEffect(() => {
    const scroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <>
      {/* TOP BAR */}
      <div className="max-w-8xl mx-auto px-3 sm:px-6 lg:px-8 h-auto min-h-[44px] py-2 flex flex-col md:flex-row justify-between items-center gap-2">

        <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">

          <div className="flex items-center whitespace-nowrap gap-1.5 sm:gap-2 bg-white/10 rounded-full px-2 sm:px-3 py-1 text-[11px] sm:text-sm">
            <Phone size={12} className="shrink-0" />
            <span>+91 8700849865</span>
          </div>

          <div className="flex items-center whitespace-nowrap gap-1.5 sm:gap-2 bg-white/10 rounded-full px-2 sm:px-3 py-1 text-[11px] sm:text-sm">
            <Phone size={12} className="shrink-0" />
            <span>+91 7668167061</span>
          </div>

        </div>

        <div className="text-[11px] sm:text-sm text-center md:text-right text-white/90 tracking-wide">
          Excellence in Fabrication & Engineering
        </div>

      </div>

      {/* NAVBAR */}
      <header
        className={`fixed top-11 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-1"
            : "py-4"
        }`}
      >
        <div className="max-w-8xl mx-auto px-8">

          <div
            className={`transition-all duration-500 rounded-full px-8 h-20 flex items-center justify-between ${
              scrolled
                ? "bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-200 text-black"
                : "bg-white/20 backdrop-blur-xl border border-white/30 text-white"
            }`}
          >
            {/* LOGO */}
            <a href="/">
              <img
                src={scrolled ? "/ssp-logo-black.png" : "/ssp-logo-white.png"}
                alt="Logo"
                className="h-16 hover:scale-105 duration-300"
              />
            </a>

            {/* DESKTOP */}
            <div className="hidden lg:flex items-center gap-12">

              <nav className="flex gap-10">

                {navItems.map((item) => (
                  <motion.a
                    whileHover={{ y: -2 }}
                    key={item.title}
                    href={item.href}
                    className={`relative text-[15px] font-semibold group transition-colors duration-300 ${
                      scrolled
                        ? "text-black hover:text-orange-500"
                        : "text-white hover:text-orange-300"
                    }`}
                  >
                    {item.title}

                    <span className="absolute left-0 -bottom-2 h-[3px] bg-orange-500 rounded-full w-0 transition-all duration-300 group-hover:w-full"></span>

                  </motion.a>
                ))}

              </nav>

              <Button
                onClick={() => (window.location.href = "/contact")}
                className="rounded-full h-12 px-7 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-[#123654] hover:to-[#285075] transition-all shadow-xl hover:scale-105"
              >
                Get Free Quote

                <ArrowRight className="ml-2 h-4 w-4" />

              </Button>

            </div>

            {/* MOBILE */}

            <button
              onClick={() => setMobile(true)}
              className="lg:hidden"
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
              animate={{ opacity: .5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobile(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: .35
              }}
              className="fixed right-0 top-0 w-[320px] h-screen bg-white z-50 shadow-2xl"
            >
              <div className="flex justify-between items-center p-6 border-b">

                <img
                  src="/ssp-logo-black.png"
                  className="h-14"
                />

                <button onClick={() => setMobile(false)}>
                  <X />
                </button>

              </div>

              <div className="p-6 space-y-7">

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
                      delay: index * .08,
                    }}
                    href={item.href}
                    className="block font-semibold text-lg text-slate-700 hover:text-orange-500"
                  >
                    {item.title}
                  </motion.a>
                ))}

                <Button
                  className="w-full mt-8 rounded-full h-12 bg-orange-500 hover:bg-orange-600"
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