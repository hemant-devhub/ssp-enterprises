import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../mock/data';

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

const next = () => {
  setCurrent((prev) =>
    prev === testimonials.length - 1 ? 0 : prev + 1
  );
};

const prev = () => {
  setCurrent((prev) =>
    prev === 0 ? testimonials.length - 1 : prev - 1
  );
};

const active = testimonials[current];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            CLIENT TESTIMONIALS
          </span>

          <h2 className="mt-6 text-5xl lg:text-7xl font-bold text-slate-900">
            Trusted By
            <span className="block text-[#285075]">
              Industry Leaders
            </span>
          </h2>

          <p className="mt-8 text-lg text-slate-600 leading-8">
            Hear what our clients say about our fabrication,
            erection and engineering expertise.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-24">
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#123654] to-[#285075] p-12 lg:p-20">
            <Quote
              size={90}
              className="absolute top-10 right-10 text-white/10"
            />

            <div className="max-w-4xl">
              <div className="flex gap-1 mb-8">
                {[...Array(active.rating)].map((_, index) => (
                  <Star
                    key={index}
                    size={24}
                    className="text-yellow-400 fill-current"
                  />

                ))}
              </div>

              <p className="text-3xl lg:text-4xl text-white leading-relaxed font-light">
                "{active.content}"
              </p>

              <div className="mt-12 flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl">
                  {active.name.charAt(0)}
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white">
                    {active.name}
                  </h4>

                  <p className="text-slate-300">
                    {active.designation}
                  </p>

                  <p className="text-orange-400">
                    {active.company}

                  </p>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="absolute bottom-10 right-10 flex gap-4">
              <button
                onClick={prev}
                className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center text-white hover:bg-white/20"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={next}
                className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Additional Testimonials Row */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {testimonials.slice(0, 3).map((testimonial) => (
            <Card
              key={testimonial.id}
              className="
              border-0
              rounded-[32px]
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-3
              transition-all
              duration-500
              "
            >
              <CardContent className="p-8">
                <Quote
                  size={32}
                  className="text-orange-500 mb-6"
                />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-slate-600 leading-8 mb-8">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#285075] text-white flex items-center justify-center font-bold">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-bold">
                      {testimonial.name}
                    </h4>

                    <p className="text-sm text-slate-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-32 rounded-[40px] overflow-hidden bg-gradient-to-r from-[#123654] to-[#285075]">
          <div className="grid md:grid-cols-4">
            {[
              {
                number:"500+",
                label:"Projects"
              },
              {
                number:"200+",
                label:"Clients"
              },
              {
                number:"15+",
                label:"Years"
              },
              {
                number:"98%",
                label:"Retention"
              }

            ].map((item)=>(

              <div
                key={item.label}
                className="py-14 text-center"
              >
                <h2 className="text-6xl font-bold text-orange-400">
                  {item.number}
                </h2>

                <p className="text-white mt-3">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-32 text-center">
          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            WORK WITH US
          </span>

          <h2 className="mt-5 text-5xl lg:text-6xl font-bold text-slate-900">
            Ready To Join
            Our Happy Clients?
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto leading-8">
            Experience engineering excellence,
            quality fabrication and professional
            project execution.
          </p>

          <div className="flex justify-center gap-5 mt-10">
            <Button className="h-14 px-8 rounded-full bg-orange-500 hover:bg-orange-600">
              Request Proposal
            </Button>

            <Button
              variant="outline"
              className="h-14 px-8 rounded-full"
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;