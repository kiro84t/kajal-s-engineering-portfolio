import SectionHeading from "./SectionHeading";
import { Briefcase, Bot, GraduationCap } from "lucide-react";

const items = [
  {
    icon: Briefcase,
    role: "Core Team Member — Marketing",
    org: "E-Cell, UVCE",
    period: "2024 — Present",
    text: "Contributing to marketing initiatives and team coordination for entrepreneurship events on campus.",
  },
  {
    icon: Bot,
    role: "Designer",
    org: "Robotics Team, UVCE",
    period: "2026 — Present",
    text: "Working on mechanical design and CAD modeling for robotics projects, contributing to mechanisms and hands-on systems.",
  },
];

const education = {
  icon: GraduationCap,
  degree: "B.Tech, Mechanical Engineering",
  org: "University Visvesvaraya College of Engineering (UVCE)",
  period: "2024 — Present",
};

const Experience = () => (
  <section id="experience" className="section-padding">
    <div className="container-narrow">
      <SectionHeading
        index="04"
        title="Experience & Education"
        subtitle="Positions of responsibility and academic background."
      />

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Positions of Responsibility
          </h3>
          <div className="relative pl-6 border-l border-border space-y-10">
            {items.map((it) => (
              <div key={it.role} className="relative">
                <div className="absolute -left-[34px] top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <it.icon className="w-2.5 h-2.5 text-primary" />
                </div>
                <div className="font-mono text-[10px] text-primary uppercase tracking-wider mb-1">
                  {it.period}
                </div>
                <h4 className="font-semibold text-lg">{it.role}</h4>
                <div className="text-sm text-muted-foreground mb-2">
                  {it.org}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {it.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Education
          </h3>
          <div className="p-6 border border-border rounded-lg bg-card">
            <div className="w-10 h-10 rounded-md bg-primary-muted flex items-center justify-center mb-4">
              <education.icon className="w-5 h-5 text-primary" />
            </div>
            <div className="font-mono text-[10px] text-primary uppercase tracking-wider mb-1">
              {education.period}
            </div>
            <h4 className="font-semibold mb-1">{education.degree}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {education.org}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
