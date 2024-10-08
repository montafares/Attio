"use client";

import Customer from "@/components/block/Customer";
import ProvenSection from "@/components/block/ProvenSection";
import ScreenViedos from "@/components/block/ScreenViedos";

export default function Home() {
  return (
    <div className="bg-primary flex flex-col justify-center items-center gap-16">
      <Customer />
      <ScreenViedos />
      <ProvenSection />
    </div>
  );
}
