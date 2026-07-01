"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { Button } from "../../ui/Button";

export default function HeroSection() {
  return (
    <section className="mx-auto flex max-w-[calc(100vw-400px)] w-full items-center gap-30 px-8 py-20">
      {/* LEFT */}
      <div className=" flex flex-col items-stretch relative">
        <div className="mb-8 flex items-center justify-center gap-4 h-52 overflow-hidden">
          <img
            src="/circular-text.png"
            alt=""
            className=" object-cover scale-150"
          />
        </div>
        <img
          src="semi-circle-dashed.png"
          alt=""
          className="absolute top-18 left-3 w-40 h-40 object-cover"
        />
        <h2 className="text-7xl font-bold my-0 whitespace-pre-line">
          "The Common {"\n"} Vendor"
        </h2>

        <p className="mt-8 text-2xl text-gray-500 text-left whitespace-pre-line">
          a one-stop shop for onboarding with a new {"\n"} vendor or onboarding
          a new client.
        </p>
      </div>

      {/* RIGHT */}

      <div className="relative flex-1 flex items-center justify-center">
        {/* Orange Background */}

        <div className="absolute right-20 -top-20 h-140 w-120 rounded-[250px_250px_0_0px] bg-orange-400 z-5" />

        {/* Image */}

        <div className="shadow-2xl rounded-[60px]">
          <div className="relative overflow-hidden rounded-[60px] h-150 w-110 z-10 shadow-2xl">
            <img
              src="/hero-image.png"
              alt="Fruit"
              className=" object-cover h-full w-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export const GetStartedSection = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="font-semibold text-8xl">
        Let's Get <span className="text-primary">Started</span>
      </h1>
      <div className="flex items-center gap-10">
        <Button className="rounded-full! h-15 justify-center text-2xl!">Retailers</Button>
        <Button variant="outline" className="rounded-full! h-15 justify-center text-2xl!">Suppliers</Button>
      </div>
    </div>
  );
};
