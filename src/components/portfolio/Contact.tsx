import SectionHeading from "./SectionHeading";
import { Mail, Phone, Linkedin, ArrowUpRight } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "kajalrathore601@gmail.com",
    href: "mailto:kajalrathore601@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 76196 35770",
    href: "tel:+917619635770",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "kajal-rathore84t",
    href: "https://www.linkedin.com/in/kajal-rathore84t",
  },
];

const Contact = () => (
  <section id="contact" className="section-padding bg-surface">
    <div className="container-narrow">
      <SectionHeading
        index="05"
        title="Let's Connect"
        subtitle="Open to research and design internship opportunities, collaborations, and conversations around mechanical design and robotics."
      />

      <div className="grid md:grid-cols-3 gap-4">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group p-6 bg-card border border-border rounded-lg hover:border-primary/40 hover:shadow-[var(--shadow-md)] transition-all"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-10 h-10 rounded-md bg-primary-muted flex items-center justify-center">
                <c.icon className="w-5 h-5 text-primary" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
              {c.label}
            </div>
            <div className="font-medium text-sm break-all">{c.value}</div>
          </a>
        ))}
      </div>

      <footer className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-muted-foreground">
          © 2025 Kajal Rathore — Designed with precision.
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          UVCE · Bengaluru
        </div>
      </footer>
    </div>
  </section>
);

export default Contact;
