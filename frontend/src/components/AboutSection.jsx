import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  ArrowRight,
  CheckCircle2,
  Award,
  ShieldCheck,
  Users,
  Clock3,
} from "lucide-react";

const strengths = [
  {
    icon: <Users className="w-10 h-10 text-orange-500" />,
    title: "Experienced Workforce",
    description:
      "Highly skilled engineers, welders and fabrication experts delivering precision work."
  },
  {
    icon: <Award className="w-10 h-10 text-orange-500" />,
    title: "Quality Workmanship",
    description:
      "Every project follows strict quality standards with premium finishing."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-orange-500" />,
    title: "Safety First",
    description:
      "Industry-standard safety procedures and trained manpower for every site."
  },
  {
    icon: <Clock3 className="w-10 h-10 text-orange-500" />,
    title: "On-Time Delivery",
    description:
      "Reliable planning and execution ensure projects are completed within schedule."
  }
];

const AboutSection = () => {
  return (
    <section
      id="about-section"
      className="relative py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 top-32 w-72 h-72 rounded-full bg-orange-200/20 blur-3xl"/>
        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-[#285075]/10 blur-3xl"/>
      </div>

      <div className="max-w-8xl mx-auto px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex rounded-full bg-orange-100 text-orange-600 px-5 py-2 text-sm font-semibold">
            ABOUT SSP ENTERPRISES
          </span>

          <h2 className="mt-6 text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Building Strong Industrial
            <span className="block text-[#285075]">
              Infrastructure Since Day One
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            SSP Enterprises is a trusted name in Fabrication &
            Erection services delivering innovative engineering
            solutions for Steel Plants, Sugar Mills, Paper Mills,
            Power Houses and heavy industrial projects across India.
          </p>

        </div>

        {/* Main */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mt-20">

          {/* Images */}
          <div className="relative">

            <div className="rounded-[32px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
                className="w-full h-[620px] object-cover"
                alt=""
              />
            </div>

            {/* Floating Card */}
            <Card className="absolute -left-8 bottom-10 border-0 shadow-2xl rounded-3xl bg-white/95 backdrop-blur">

              <CardContent className="p-6">
                <h3 className="text-5xl font-bold text-[#285075]">
                  250+
                </h3>

                <p className="text-slate-500 mt-2">
                  Successfully Delivered Projects
                </p>
              </CardContent>

            </Card>

            <Card className="absolute -right-8 top-12 border-0 shadow-2xl rounded-3xl bg-orange-500 text-white">

              <CardContent className="p-6">
                <h3 className="text-4xl font-bold">
                  15+
                </h3>

                <p>
                  Years Experience
                </p>
              </CardContent>

            </Card>

          </div>

          {/* Content */}
          <div>
            <span className="text-orange-500 font-semibold uppercase tracking-[4px]">
              WHY CHOOSE US
            </span>

            <h3 className="mt-4 text-4xl font-bold text-slate-900">
              Heavy Steel Fabrication &
              Industrial Engineering Experts
            </h3>

            <p className="mt-8 text-lg text-slate-600 leading-8">
              We combine experienced manpower, advanced fabrication
              techniques and uncompromising quality standards to
              deliver reliable industrial solutions.
            </p>

            <p className="mt-6 text-lg text-slate-600 leading-8">
              From concept to commissioning, our dedicated team
              ensures every structure meets the highest standards
              of durability, safety and performance.
            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {[
                "Steel Plant Projects",
                "Sugar Mill Fabrication",
                "Power House Structures",
                "Paper Mill Engineering",
                "Professional Workforce",
                "ISO Quality Standards",
                "Safety Compliance",
                "Timely Delivery"
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-green-500 w-5 h-5"/>
                  <span className="text-slate-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <Button className="mt-10 h-14 rounded-full bg-orange-500 hover:bg-orange-600 px-8">
              Get Free Quote
              <ArrowRight className="ml-2 w-4 h-4"/>
            </Button>

          </div>

        </div>

        {/* Strengths */}
        <div className="mt-28">

          <div className="text-center">
            <span className="text-orange-500 uppercase tracking-[4px] font-semibold">
              OUR STRENGTHS
            </span>

            <h3 className="mt-4 text-5xl font-bold text-slate-900">
              Why Clients Trust SSP
            </h3>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
            {strengths.map((item,index)=>(

              <Card
                key={index}
                className="group rounded-3xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >

                <CardContent className="p-8">

                  <div className="w-20 h-20 rounded-2xl bg-orange-50 flex items-center justify-center group-hover:bg-orange-500 transition">
                    <div className="group-hover:text-white">
                      {item.icon}
                    </div>
                  </div>

                  <h4 className="mt-8 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-4 text-slate-600 leading-7">
                    {item.description}
                  </p>

                </CardContent>

              </Card>
            ))}
          </div>
        </div>
      </div>

    <div className="mt-32">
        <div className="text-center max-w-3xl mx-auto">
            <span className="text-orange-500 uppercase tracking-[4px] font-semibold">
                OUR PROCESS
            </span>

            <h2 className="mt-4 text-5xl font-bold text-slate-900">
                From Concept To Completion
            </h2>

            <p className="mt-5 text-slate-600 leading-8">
                Every project follows a structured workflow that
                ensures precision, quality and timely completion.
            </p>

        </div>

        <div className="relative mt-20">
            {/* Desktop Line */}
            <div className="hidden lg:block absolute left-0 right-0 top-14 h-1 bg-slate-200 rounded-full">
                <div className="w-full h-full bg-gradient-to-r from-orange-500 via-[#285075] to-orange-500 rounded-full opacity-30"/>
            </div>

            <div className="grid lg:grid-cols-6 gap-10 relative z-10 pl-10 pr-10">
                {[
                    {
                        icon:"📋",
                        title:"Consultation",
                        desc:"Understanding client requirements and project scope."
                    },
                    {
                        icon:"📐",
                        title:"Planning",
                        desc:"Engineering drawings and execution planning."
                    },
                    {
                        icon:"⚙️",
                        title:"Fabrication",
                        desc:"Precision fabrication using modern equipment."
                    },
                    {
                        icon:"🏗",
                        title:"Installation",
                        desc:"Professional erection and site execution."
                    },
                    {
                        icon:"✔",
                        title:"Inspection",
                        desc:"Quality assurance and safety verification."
                    },
                    {
                        icon:"🚀",
                        title:"Delivery",
                        desc:"Final handover with complete client satisfaction."
                    }

                ].map((item,index)=>(

                    <div
                        key={index}
                        className="group text-center"
                    >

                        <div className="mx-auto w-28 h-28 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center text-4xl transition-all duration-500 group-hover:bg-orange-500 group-hover:scale-110">
                            <span className="group-hover:scale-125 transition">
                                {item.icon}
                            </span>
                        </div>

                        <h4 className="mt-8 font-bold text-xl text-slate-900">
                            {item.title}
                        </h4>

                        <p className="mt-3 text-slate-600 leading-7">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </div>

    </section>
  );
};

export default AboutSection;