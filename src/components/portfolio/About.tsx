import SectionHeading from "./SectionHeading";
import { GraduationCap, Wrench, Bot, Lightbulb } from "lucide-react";

const points = [
  {
    icon: GraduationCap,
    title: "Engineering Foundation",
    text: "Pursuing B.Tech in Mechanical Engineering at UVCE — building strong fundamentals in mechanics, design and analysis.",
  },
  {
    icon: Wrench,
    title: "CAD & Modeling",
    text: "Hands-on experience with Fusion 360 and basics of CATIA — focusing on parametric design and assembly modeling.",
  },
  {
    icon: Bot,
    title: "Robotics Curiosity",
    text: "Actively exploring robotic mechanisms, motion simulation and the intersection of mechanical design with intelligent systems.",
  },
  {
    icon: Lightbulb,
    title: "Real-World Focus",
    text: "Driven to learn through projects — mechanical systems, simulations, and translating ideas into functional prototypes.",
  },
];

const About = () => (
  <section id="about" className="section-padding bg-surface">
    <div className="container-narrow">
      <SectionHeading
        index="01"
        title="About Me"
        subtitle="A second-year mechanical engineering student at UVCE with a strong interest in design and robotics. I focus on learning real-world mechanical systems through CAD modeling, simulation, and hands-on team projects."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {points.map((p) => (
          <div
            key={p.title}
            className="group p-6 bg-card border border-border rounded-lg hover:border-primary/40 hover:shadow-[var(--shadow-md)] transition-all"
          >
            <div className="w-10 h-10 rounded-md bg-primary-muted flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <p.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
            </div>
            <h3 className="font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {p.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
