type Props = {
  children: React.ReactNode;
};

export default function GlassCard({
  children,
}: Props) {
  return (
    <div className="
      backdrop-blur-xl
      bg-white/10
      border
      border-white/20
      rounded-3xl
      p-6
      shadow-2xl
    ">
      {children}
    </div>
  );
}