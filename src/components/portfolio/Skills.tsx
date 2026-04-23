import SectionHeading from "./SectionHeading";
import { Box, Code2, Cog } from "lucide-react";

const groups = [
  {
    icon: Box,
    title: "CAD Tools",
    skills: [
      { name: "Fusion 360", level: "Intermediate", value: 65 },
      { name: "CATIA", level: "Basic", value: 30 },
    ],
  },
  {
    icon: Code2,
    title: "Programming",
    skills: [
      { name: "C++", level: "Basic", value: 35 },
      { name: "Java", level: "Basic", value: 30 },
    ],
  },
  {
    icon: Cog,
    title: "Core Concepts",
    skills: [
      { name: "Mechanisms & Kinematics", level: "Beginner", value: 30 },
      { name: "Design Thinking", level: "Practising", value: 55 },
      { name: "Assembly Modeling", level: "Practising", value: 60 },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="section-padding">
    <div className="container-narrow">
      <SectionHeading
        index="02"
        title="Skills & Tools"
        subtitle="A growing toolkit across CAD, programming and core mechanical concepts."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {groups.map((g) => (
          <div
            key={g.title}
            className="p-6 border border-border rounded-lg bg-card hover:shadow-[var(--shadow-md)] transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-md bg-primary-muted flex items-center justify-center">
                <g.icon className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-semibold">{g.title}</h3>
            </div>

            <div className="space-y-5">
              {g.skills.map((s) => (
                <div key={s.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{s.name}</span>
                    <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                      {s.level}
                    </span>
                  </div>
                  <div className="h-1 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-700"
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
