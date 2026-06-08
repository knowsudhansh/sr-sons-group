import Link from "next/link";

type Props = {
  name: string;
  category: string;
  slug: string;
};

export default function CompanyCard({
  name,
  category,
  slug,
}: Props) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl">
      <h3 className="text-2xl font-bold">
        {name}
      </h3>

      <p className="mt-2 text-gray-500">
        {category}
      </p>

      <Link
        href={`/companies/${slug}`}
        className="inline-block mt-5 text-blue-600 font-semibold"
      >
        View Company →
      </Link>
    </div>
  );
}