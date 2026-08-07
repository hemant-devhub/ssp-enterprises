import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { projects } from '../mock/data';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('Show All');

  const categories = [
    'Show All',
    'Steel plants',
    'Sugar Mill', 
    'Paper Mill',
    'Power House',
    'Structural fabrication',
    'Customized Fabrication'
  ];

  const filteredProjects = activeFilter === 'Show All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

return (
  <section className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100">

    {/* Background Grid */}
    <div className="absolute inset-0 -z-10">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(40,80,117,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(40,80,117,.15) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute -left-40 top-20 w-[500px] h-[500px] bg-orange-400/20 blur-[180px] rounded-full" />
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-[#285075]/15 blur-[200px] rounded-full" />
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* SECTION HEADER */}
      <div className="text-center max-w-5xl mx-auto">
        <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
          OUR PORTFOLIO
        </span>

        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-7xl font-bold text-slate-900 leading-tight">
          Engineering Excellence
          <span className="block text-[#285075]">
            Delivered Across India
          </span>
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-600 leading-7 sm:leading-8 max-w-3xl mx-auto">
          Explore our successful industrial fabrication,
          erection and structural engineering projects
          delivered with precision, safety and reliability.
        </p>
      </div>

      {/* FEATURED PROJECT */}
      <div className="mt-12 lg:mt-24">
        <div className="relative overflow-hidden rounded-[24px] lg:rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,.18)]">
          <img
            src={projects[0].image}
            alt={projects[0].title}
            className="w-full h-[450px] sm:h-[550px] lg:h-[700px] object-cover transition duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          {/* Floating Stats */}
          <div className="absolute top-10 left-10 bg-white rounded-3xl p-6 shadow-2xl hidden md:block">
            <h3 className="text-5xl font-bold text-[#285075]">
              500+
            </h3>

            <p className="text-slate-500 mt-2">
              Projects
            </p>
          </div>

          <div className="absolute top-10 right-10 bg-orange-500 rounded-3xl p-6 shadow-2xl text-white hidden md:block">
            <h3 className="text-5xl font-bold">
              15+
            </h3>

            <p className="mt-2">
              Years
            </p>
          </div>

          {/* Content */}
          <div className="absolute bottom-6 left-6 right-6 lg:bottom-12 lg:left-12 lg:right-auto max-w-3xl">
            <span className="bg-orange-500 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full text-xs sm:text-sm font-medium">
              Featured Project
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white mt-4 lg:mt-6 leading-tight">
              {projects[0].title}
            </h2>

            <p className="text-slate-200 mt-3 lg:mt-5 text-sm sm:text-base lg:text-lg leading-6 lg:leading-8">
              Large scale industrial fabrication and erection
              project completed successfully with strict quality
              standards and engineering excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-6 lg:mt-8">
              <Button className="h-14 px-8 rounded-full bg-orange-500 hover:bg-orange-600">
                View Project
              </Button>

              <Button
                variant="outline"
                className="h-14 px-8 rounded-full bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white hover:text-black"
              >
                Request Similar Quote
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* FILTERS */}
      <div className="flex flex-wrap justify-center gap-4 mt-20 mb-16">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`rounded-full px-6 py-3 transition-all duration-300 ${
              activeFilter === category
                ? "bg-orange-500 hover:bg-orange-600 text-white shadow-xl"
                : "bg-white border border-slate-200 text-slate-700 hover:border-orange-400 hover:text-orange-500"
            }`}
          >
            {category}
          </Button>
        ))}

      </div>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {filteredProjects.map((project, index) => (
          <Card
            key={project.id}
            className="
            group
            overflow-hidden
            rounded-[32px]
            border-0
            bg-white
            shadow-lg
            hover:shadow-[0_30px_80px_rgba(0,0,0,.18)]
            hover:-translate-y-4
            transition-all
            duration-500
            "
          >

            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="
                w-full
                h-64 sm:h-72 lg:h-80
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

              <div className="absolute top-5 left-5">
                <Badge className="bg-white/20 backdrop-blur-lg text-white border-white/20">
                  {project.category}
                </Badge>
              </div>

              <div className="absolute bottom-5 left-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full"
                  onClick={() => window.location.href="/contact"}
                >
                  Request Similar Project
                </Button>
              </div>
            </div>

            <CardContent className="p-5 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
                <span className="text-sm text-slate-500">
                  {project.type}
                </span>

                <Badge
                  variant="outline"
                  className="border-orange-200 text-orange-600"
                >
                  {project.client}
                </Badge>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {project.title}
              </h3>

              <p className="text-slate-600 leading-7 mb-6">
                Professional fabrication and industrial erection
                services executed with precision engineering,
                quality control and safety compliance.
              </p>

              <Button
                variant="ghost"
                className="p-0 text-orange-500 hover:bg-transparent"
                onClick={() => window.location.href="/contact"}
              >
                View Details →
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-30 text-center">
        <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
          READY TO BUILD?
        </span>

        <h2 className="mt-5 text-5xl lg:text-6xl font-bold text-slate-900">
          Let's Create Your
          Next Industrial Project
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8">
          Our fabrication specialists are ready to discuss
          your project requirements and deliver reliable
          engineering solutions tailored to your needs.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-10">
          <Button
            className="h-14 px-8 rounded-full bg-orange-500 hover:bg-orange-600"
            onClick={() => window.location.href="/quote"}
          >
            Request Proposal
          </Button>

          <Button
            variant="outline"
            className="h-14 px-8 rounded-full"
            onClick={() => window.location.href="/contact"}
          >
            Contact Team
          </Button>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ProjectsSection;