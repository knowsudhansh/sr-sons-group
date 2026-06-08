import { notFound } from "next/navigation";

import ElectricalLayout from "@/components/layouts/ElectricalLayout";
import GeneratorLayout from "@/components/layouts/GeneratorLayout";
import ElectronicsLayout from "@/components/layouts/ElectronicsLayout";
import PowerLayout from "@/components/layouts/PowerLayout";
import RestaurantLayout from "@/components/layouts/RestaurantLayout";

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug === "rc-electricals") {
    return <ElectricalLayout />;
  }

  if (slug === "rcs-electricals") {
    return <GeneratorLayout />;
  }

  if (slug === "sr-sons-electronics") {
    return <ElectronicsLayout />;
  }

  if (slug === "avanti-system") {
    return <PowerLayout />;
  }

  if (slug === "shreya-bnr") {
    return <RestaurantLayout />;
  }

  notFound();
}