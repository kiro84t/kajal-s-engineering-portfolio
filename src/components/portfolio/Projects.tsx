import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { ArrowUpRight, Plus, Wrench, Sparkles, TrendingUp } from "lucide-react";
import gripperClosed from "@/assets/project-gripper-closed.png";
import gripperOpen from "@/assets/project-gripper-open.png";
import college from "@/assets/project-college.png";
import college2 from "@/assets/project-college-2.png";
import irisClosed from "@/assets/project-iris-closed.png";
import irisOpen from "@/assets/project-iris-open.png";

type Project = {
  id: string;
  image: string;
  images?: string[];
  title: string;
  tag: string;
  description: string;
  points?: string[];
  problem?: string;
  approach?: string[];
  outcome?: string[];
  features?: string[];
  tools?: string[];
  future?: string[];
};

const projects: Project[] = [
  {
    id: "01",
    image: gripperClosed,
    images: [gripperClosed, gripperOpen],
    title: "2-Jaw Robotic Gripper",
    tag: "Fusion 360 · Robotics",
    description:
      "Designed and assembled a functional 2-jaw robotic gripper using Fusion 360. Implemented joints and motion constraints to simulate realistic gripping action.",
    points: [
      "Used revolute and rigid joints",
      "Motion simulation included",
      "Focus on mechanical movement accuracy",
    ],
  },
  {
    id: "02",
    image: college,
    images: [college, college2],
    title: "College Mini Model",
    tag: "3D Printing · Team Project",
    description:
      "Designed the external structure of a college model for 3D printing as part of a team project. Worked on front elevation and overall exterior design.",
    points: [
      "Role: Front elevation & exterior",
      "Team of 3 members",
      "Structural design and visual accuracy",
    ],
  },
  {
    id: "03",
    image: irisClosed,
    images: [irisClosed, irisOpen],
    title: "Compliant Iris Mechanism",
    tag: "Fusion 360 · Compliant Design",
    description:
      "Designed a compliant iris mechanism inspired by camera apertures, focusing on smooth radial motion using flexible elements instead of traditional rigid joints.",
    problem:
      "Design a compact mechanism capable of controlled opening and closing with minimal rigid joints.",
    approach: [
      "Modeled the mechanism in Fusion 360",
      "Explored compliant design principles (flexure-based motion)",
      "Focused on smooth motion transfer and symmetry",
      "Reduced reliance on complex assemblies",
    ],
    outcome: [
      "Achieved iris-like opening/closing behavior",
      "Demonstrated controlled deformation and motion",
      "Improved understanding of compliant mechanisms",
    ],
    features: [
      "Radial symmetry with flexure-based blades",
      "Single-piece motion — fewer assembled parts",
      "Smooth aperture-style opening and closing",
    ],
    tools: ["Fusion 360"],
  },
];

const ProjectCard = ({ p, i }: { p: Project; i: number }) => {
  const gallery = p.images ?? [p.image];
  const [active, setActive] = useState(0);
  return (
    <article
      className="group grid md:grid-cols-5 gap-0 bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-[var(--shadow-lg)] transition-all duration-500"
    >
      <div
        className={`md:col-span-3 relative overflow-hidden bg-secondary ${
          i % 2 === 1 ? "md:order-2" : ""
        }`}
      >
        <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
          <img
            src={gallery[active]}
            alt={p.title}
            loading="lazy"
            width={1280}
            height={896}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 font-mono text-[10px] tracking-wider uppercase px-2 py-1 bg-background/90 backdrop-blur-sm rounded">
            Project {p.id}
          </div>
        </div>
        {gallery.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 p-1.5 rounded-lg bg-background/80 backdrop-blur-sm border border-border">
            {gallery.map((src, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActive(idx)}
                aria-label={`View image ${idx + 1}`}
                className={`w-12 h-12 rounded-md overflow-hidden border transition-all ${
                  active === idx
                    ? "border-primary ring-1 ring-primary"
                    : "border-border opacity-70 hover:opacity-100"
                }`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center">

              <div className="font-mono text-[10px] text-primary tracking-wider uppercase mb-3">
                {p.tag}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {p.description}
              </p>

              {p.points && (
                <ul className="space-y-2 mb-6">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              )}

              {p.problem && (
                <div className="space-y-5 mb-6">
                  <div>
                    <div className="font-mono text-[10px] text-primary tracking-wider uppercase mb-2">
                      Problem
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {p.problem}
                    </p>
                  </div>

                  {p.approach && (
                    <div>
                      <div className="font-mono text-[10px] text-primary tracking-wider uppercase mb-2">
                        Approach
                      </div>
                      <ul className="space-y-2">
                        {p.approach.map((pt) => (
                          <li
                            key={pt}
                            className="flex items-start gap-2 text-sm text-foreground/80"
                          >
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {p.outcome && (
                    <div>
                      <div className="font-mono text-[10px] text-primary tracking-wider uppercase mb-2">
                        Outcome
                      </div>
                      <ul className="space-y-2">
                        {p.outcome.map((pt) => (
                          <li
                            key={pt}
                            className="flex items-start gap-2 text-sm text-foreground/80"
                          >
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {p.features && (
                    <div>
                      <div className="flex items-center gap-1.5 font-mono text-[10px] text-primary tracking-wider uppercase mb-2">
                        <Sparkles className="w-3 h-3" />
                        Key Features
                      </div>
                      <ul className="space-y-2">
                        {p.features.map((pt) => (
                          <li
                            key={pt}
                            className="flex items-start gap-2 text-sm text-foreground/80"
                          >
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {p.tools && (
                    <div>
                      <div className="flex items-center gap-1.5 font-mono text-[10px] text-primary tracking-wider uppercase mb-2">
                        <Wrench className="w-3 h-3" />
                        Tools Used
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {p.tools.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2.5 py-1 rounded-md bg-primary-muted text-primary border border-primary/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {p.future && (
                    <div>
                      <div className="flex items-center gap-1.5 font-mono text-[10px] text-primary tracking-wider uppercase mb-2">
                        <TrendingUp className="w-3 h-3" />
                        Future Improvements
                      </div>
                      <ul className="space-y-2">
                        {p.future.map((pt) => (
                          <li
                            key={pt}
                            className="flex items-start gap-2 text-sm text-foreground/80"
                          >
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              <button className="self-start inline-flex items-center gap-1.5 text-sm font-medium text-primary group/btn">
                View details
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
      </div>
    </article>
  );
};

const Projects = () => (
  <section id="projects" className="section-padding bg-surface">
    <div className="container-narrow">
      <SectionHeading
        index="03"
        title="Selected Projects"
        subtitle="A small but growing collection of mechanical design and modeling work."
      />

      <div className="space-y-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} p={p} i={i} />
        ))}

        {/* Placeholder card for future projects */}
        <div className="border border-dashed border-border rounded-xl p-12 flex flex-col items-center justify-center text-center bg-card/50 hover:border-primary/40 transition-colors">
          <div className="w-12 h-12 rounded-full bg-primary-muted flex items-center justify-center mb-4">
            <Plus className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">More projects coming soon</h3>
          <p className="text-sm text-muted-foreground max-w-md">
            Currently working on new mechanical design and robotics experiments.
            Check back soon.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
