import { ArrowRight, Cog } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background visual */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1280}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Floating gear */}
      <Cog
        className="absolute top-32 right-10 md:right-24 w-24 h-24 text-primary/10 animate-spin-slow"
        strokeWidth={1}
      />
      <Cog
        className="absolute bottom-32 left-8 w-16 h-16 text-primary/10 animate-spin-slow"
        strokeWidth={1}
        style={{ animationDirection: "reverse" }}
      />

      <div className="container-narrow w-full px-6 md:px-10">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-border bg-surface/60 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs text-muted-foreground">
              Open to research & design internships
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tighter mb-6">
            Kajal <span className="text-primary">Rathore</span>
          </h1>

          <p className="font-mono text-sm md:text-base text-muted-foreground mb-6 tracking-tight">
            Mechanical Engineering Student
            <span className="text-primary mx-2">/</span>
            CAD Designer
            <span className="text-primary mx-2">/</span>
            Robotics Enthusiast
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Passionate about designing functional mechanical systems and
            exploring robotics-driven solutions.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium text-sm hover:shadow-[var(--shadow-accent)] transition-all"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-md font-medium text-sm hover:border-foreground transition-colors"
            >
              About me
            </a>
          </div>
        </div>

        {/* Stat strip */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl border-t border-border pt-8">
          {[
            { k: "Year", v: "2nd" },
            { k: "Branch", v: "Mech." },
            { k: "Institute", v: "UVCE" },
            { k: "Since", v: "2024" },
          ].map((s) => (
            <div key={s.k}>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-1">
                {s.k}
              </div>
              <div className="text-xl font-semibold">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
