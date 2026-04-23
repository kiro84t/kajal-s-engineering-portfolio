interface Props {
  index: string;
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ index, title, subtitle }: Props) => (
  <div className="mb-16 max-w-2xl">
    <div className="font-mono text-xs text-primary tracking-widest uppercase mb-3">
      {index} — Section
    </div>
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground text-lg leading-relaxed">{subtitle}</p>
    )}
  </div>
);

export default SectionHeading;
