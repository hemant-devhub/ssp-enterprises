import { Button } from "./ui/button";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Building2,
  Factory,
  ShieldCheck,
} from "lucide-react";

import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToContact = () => {
    document
      .getElementById("contact-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-[#123654] to-slate-900">

      {/* Grid Background */}

      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* Glow Effects */}

      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-orange-500/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/20 blur-[120px]" />

      <div className="max-w-8xl mx-auto px-8 pt-44 pb-24 relative z-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-orange-400 text-sm font-medium">
              Excellence In Fabrication & Erection
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold text-white leading-tight">

              Building India's

              <span className="block text-orange-500">
                Industrial Future
              </span>

            </h1>

            <p className="mt-8 text-xl text-slate-300 leading-relaxed max-w-2xl">

              SSP Enterprises delivers premium fabrication,
              erection and industrial engineering solutions
              for Steel Plants, Sugar Mills, Paper Mills,
              Power Houses and heavy industrial projects.

            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Button
                size="lg"
                onClick={scrollToContact}
                className="h-14 px-8 rounded-full bg-orange-500 hover:bg-orange-600 text-white shadow-xl"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                <Play className="mr-2 h-4 w-4" />
                View Projects
              </Button>

            </div>

            {/* Features */}

            <div className="grid md:grid-cols-3 gap-5 mt-14">

              <div className="flex items-center gap-3 text-white">
                <CheckCircle2 className="text-green-400" />
                <span>Certified Team</span>
              </div>

              <div className="flex items-center gap-3 text-white">
                <CheckCircle2 className="text-green-400" />
                <span>On-Time Delivery</span>
              </div>

              <div className="flex items-center gap-3 text-white">
                <CheckCircle2 className="text-green-400" />
                <span>Industrial Expertise</span>
              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <div className="overflow-hidden rounded-[32px] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,.4)]">

              <img
                src="/project1.jpg"
                alt="Industrial Fabrication"
                className="w-full h-[650px] object-cover"
              />

            </div>

            {/* Stats Card */}

            <div className="absolute -left-10 top-10 bg-white rounded-3xl p-6 shadow-2xl">

              <h3 className="text-4xl font-bold text-[#123654]">
                250+
              </h3>

              <p className="text-gray-500">
                Projects Delivered
              </p>

            </div>

            <div className="absolute -right-10 bottom-10 bg-orange-500 text-white rounded-3xl p-6 shadow-2xl">

              <h3 className="text-4xl font-bold">
                100%
              </h3>

              <p>Client Satisfaction</p>

            </div>

          </motion.div>

        </div>

        {/* Bottom Cards */}

        <div className="grid md:grid-cols-3 gap-6 mt-20">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-white">

            <Factory className="mb-4 text-orange-400" />

            <h3 className="font-semibold text-xl mb-2">
              Steel Plants
            </h3>

            <p className="text-slate-400">
              Complete fabrication and erection solutions.
            </p>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-white">

            <Building2 className="mb-4 text-orange-400" />

            <h3 className="font-semibold text-xl mb-2">
              Industrial Projects
            </h3>

            <p className="text-slate-400">
              Customized heavy engineering structures.
            </p>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-white">

            <ShieldCheck className="mb-4 text-orange-400" />

            <h3 className="font-semibold text-xl mb-2">
              Quality Assurance
            </h3>

            <p className="text-slate-400">
              Strict quality and safety standards.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;