type Props = {
  text: string;
};

export default function GradientButton({
  text,
}: Props) {
  return (
    <button
      className="
      px-8
      py-4
      rounded-2xl
      bg-gradient-to-r
      from-blue-600
      via-cyan-500
      to-purple-600
      text-white
      font-semibold
      hover:scale-105
      transition-all
    "
    >
      {text}
    </button>
  );
}