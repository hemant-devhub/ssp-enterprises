import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Factory,
  Settings,
  FileText,
  Zap,
  Layers,
  Wrench
} from "lucide-react";

import { services } from "../mock/data";

const iconMap = {
  Factory: <Factory className="w-7 h-7" />,
  Settings: <Settings className="w-7 h-7" />,
  FileText: <FileText className="w-7 h-7" />,
  Zap: <Zap className="w-7 h-7" />,
  Layers: <Layers className="w-7 h-7" />,
  Wrench: <Wrench className="w-7 h-7" />
};

export default function ServicesSection() {

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === services.length - 1 ? 0 : prev + 1
      );

    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === services.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );
  };

  const active = services[current];

  return (

    <section className="relative py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">

    <div className="absolute inset-0 pointer-events-none">
    <div className="absolute left-0 top-20 w-72 h-72 rounded-full bg-orange-200/20 blur-3xl"/>
    <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-[#285075]/10 blur-3xl"/>
    </div>

    <div className="max-w-8xl mx-auto px-8 relative z-10">

    {/* HEADER */}
    <div className="text-center">
      <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
      OUR SERVICES
      </span>

      <h2 className="mt-5 text-5xl lg:text-6xl font-bold text-slate-900">
        Engineering Solutions

        <span className="block text-[#285075]">
        Across Every Industry
        </span>
      </h2>

      <p className="max-w-3xl mx-auto mt-8 text-lg text-slate-600 leading-8">
        From heavy fabrication to complete industrial erection,
        SSP Enterprises delivers end-to-end engineering
        solutions tailored to every client's requirements.
      </p>
    </div>

    {/* INDUSTRY PILLS */}
    <div className="flex flex-wrap justify-center gap-4 mt-12">
      {services.map((item,index)=>(
      <button
        key={item.id}
        onClick={()=>setCurrent(index)}
        className={`px-6 py-3 rounded-full transition-all duration-300 font-medium

        ${index===current
        ? "bg-orange-500 text-white shadow-lg"
        : "bg-white border border-slate-200 hover:border-orange-400 hover:text-orange-500"}

        `}
      >
      {item.title}
      </button>
      ))}
    </div>

    {/* FEATURED CARD */}
    <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">

    {/* IMAGE */}
    <div className="relative">
      <div className="overflow-hidden rounded-[30px] shadow-2xl">
      <img
      src={active.image}
      alt={active.title}
      className="w-full h-[520px] object-cover transition-all duration-700 hover:scale-110"
      />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent rounded-[30px]"/>
      <div className="absolute bottom-8 left-8">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-5 py-2 text-white inline-flex">
        Featured Service
        </div>
      </div>
    </div>

    {/* CONTENT */}
    <div>
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-100 text-orange-500">
        {iconMap[active.icon]}
      </div>

      <h3 className="mt-8 text-5xl font-bold text-slate-900">
        {active.title}
      </h3>

      <p className="mt-8 text-lg leading-8 text-slate-600">
        {active.description}
      </p>

      <div className="grid grid-cols-2 gap-5 mt-10">
        {[
        "Industrial Expertise",
        "Certified Engineers",
        "Modern Equipment",
        "Quality Assurance",
        "Safety Standards",
        "Pan India Projects"
        ].map(item=>(
        <div
          key={item}
          className="flex items-center gap-3"
        >

        <div className="w-2 h-2 rounded-full bg-orange-500"/>
        <span className="text-slate-700">
          {item}
        </span>

      </div>
      ))}
    </div>

        <div className="flex gap-4 mt-12">
          <Button className="rounded-full h-14 px-8 bg-orange-500 hover:bg-orange-600">
            Explore Service
            <ArrowRight className="ml-2 w-4 h-4"/>
          </Button>

          <Button
            variant="outline"
            className="rounded-full h-14 w-14 p-0"
            onClick={prevSlide}
          >
            <ChevronLeft/>
          </Button>

          <Button
            variant="outline"
            className="rounded-full h-14 w-14 p-0"
            onClick={nextSlide}
          >
            <ChevronRight/>
          </Button>

        </div>
      </div>
    </div>

    {/* EXPLORE MORE */}
    <div className="mt-28">
      <div className="flex items-center justify-between mb-12">
        <div>
          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            EXPLORE MORE
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Complete Engineering Solutions
          </h2>
        </div>

        <Button
          variant="outline"
          className="rounded-full hidden lg:flex"
          onClick={() => window.location.href="/services"}
        >
          View All Services
        </Button>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {services.map((service,index)=>(
          <Card
            key={service.id}
            className="
              group
              overflow-hidden
              rounded-[30px]
              border
              border-slate-200
              bg-white
              shadow-lg
              transition-all
              duration-500
              hover:-translate-y-4
              hover:border-orange-400
              hover:shadow-[0_25px_80px_rgba(0,0,0,.18)]
              "
          >
            <div className="relative overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10"/>
              
              <div className="absolute top-5 left-5 bg-white/15 backdrop-blur-lg rounded-xl p-3 text-white">
                {iconMap[service.icon]}
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl font-bold">
                  {service.title}
                </h3>
              </div>
            </div>

            <CardContent className="p-8">
              <p className="text-slate-600 leading-7">
                {service.description}
              </p>

              <Button
                variant="ghost"
                className="mt-6 p-0 text-orange-500 hover:bg-transparent"
              >
                Explore Service
                <ArrowRight className="ml-2 w-4 h-4"/>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>

    {/* OUR PROCESS */}
    <div className="mt-28">
      <div className="text-center max-w-3xl mx-auto">
        <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
          OUR PROCESS
        </span>

        <h2 className="text-5xl font-bold text-slate-900 mt-4">
          Engineering Excellence
          In Every Step
        </h2>

        <p className="mt-5 text-slate-600 leading-8">
          Our workflow ensures every project is completed
          with precision, safety and unmatched quality.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-10 mt-20">
        {[
          {
            icon:<Settings className="w-10 h-10"/>,
            title:"Structure Manufacturing",
            color:"bg-blue-50 text-blue-600",
            desc:"Every structural component is manufactured using precision engineering and advanced machinery."
          },

          {
            icon:<Wrench className="w-10 h-10"/>,
            title:"Installation & Erection",
            color:"bg-orange-50 text-orange-600",
            desc:"Professional installation carried out by experienced engineers following strict safety standards."
          },

          {
            icon:<Factory className="w-10 h-10"/>,
            title:"Maintenance Support",
            color:"bg-green-50 text-green-600",
            desc:"Long-term support, inspections and maintenance services for reliable industrial performance."
          }

        ].map((item,index)=>(
          <Card
            key={index}
            className="rounded-[30px] border-0 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3"
          >
            <CardContent className="p-10">
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center ${item.color}`}>
                {item.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-5 text-slate-600 leading-8">
                {item.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

    </div>

    {/* CTA */}
    <div className="relative mt-32 overflow-hidden rounded-[40px]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2742] via-[#163B5B] to-[#285075]" />
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px"
        }}
      />

      {/* Glow */}
      <div className="absolute -left-20 top-0 w-80 h-80 rounded-full bg-orange-500/30 blur-[120px]" />
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-white/10 blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <span className="uppercase tracking-[4px] text-orange-400 font-semibold">
              START YOUR PROJECT
            </span>

            <h2 className="mt-6 text-5xl lg:text-6xl font-bold text-white leading-tight">
              Let's Build
              <br />
              Your Next Landmark
            </h2>

            <p className="mt-8 text-xl text-slate-300 leading-9 max-w-xl">
              From heavy fabrication to complete industrial
              erection, SSP Enterprises delivers engineering
              excellence trusted by industries across India.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <Button
                className="rounded-full h-14 px-8 bg-orange-500 hover:bg-orange-600"
                onClick={() => window.location.href="/quote"}
              >
                Request Proposal
              </Button>

              <Button
                variant="outline"
                className="rounded-full h-14 px-8 border-white text-white hover:bg-white hover:text-[#123654]"
                onClick={() => window.open("tel:+918700849865")}
              >
                Call Now
              </Button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                number:"250+",
                label:"Projects"
              },
              {
                number:"15+",
                label:"Years"
              },
              {
                number:"120+",
                label:"Experts"
              },
              {
                number:"100%",
                label:"Quality"
              }

            ].map((item)=>(

              <div
                key={item.label}
                className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-8 text-center"
              >

                <h2 className="text-5xl font-bold text-orange-400">
                  {item.number}
                </h2>

                <p className="text-slate-300 mt-3">
                  {item.label}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>

    </div>
    </section>
  );
}