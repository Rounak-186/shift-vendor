import React from "react";
import { Button } from "../../ui/Button";

export const AboutUsSection = () => {
  return (
    <div className="grid grid-cols-2 w-full max-w-[calc(100vw-400px)]  mx-auto mt-30 min-h-[50vh]">
      <AboutUsSectionImage />
      <div className="flex-1">
        <h1 className="font-semibold text-7xl mb-5">
          About<span className="text-primary">Us</span>
        </h1>
        <p className="text-gray-400 text-3xl max-w-[650px] mb-10">
          The restaurant/retailer and distributor relationship is critical and
          invaluable - once you’ve jumped over the hurdles to become a client.
          We believe there is a need and an opportunity to streamline the
          onboarding process.
        </p>
        <Button className="rounded-full! text-xl! w-fit p-6!">LEARN MORE</Button>
      </div>
    </div>
  );
};

const AboutUsSectionImage = () => {
  return (
    <div className="relative w-150">
      <div className="h-130 w-90 bg-primary rounded-lg absolute inset-0 z-1" />
      <div className="absolute inset-0 z-2 w-150">
        <img src="/fruit-set.png" alt="" />
      </div>
    </div>
  );
};
