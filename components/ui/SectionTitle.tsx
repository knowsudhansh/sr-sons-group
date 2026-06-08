type Props = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="text-center mb-16">
      <p className="uppercase tracking-[4px] text-cyan-400">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold mt-4">
        {title}
      </h2>
    </div>
  );
}