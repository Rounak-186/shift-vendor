import React from "react";

export const PreferenceSection = () => {
  return (
    <div className="flex flex-col gap-10 items-center w-full max-w-[calc(100vw-400px)]  mx-auto my-20 min-h-[50vh]">
      <div className="space-y-1 text-center">
        <p className="text-primary">CHOOSE YOU WAY</p>
        <h3 className="font-semibold text-4xl">SELECT YOUR PREFERANCE</h3>
      </div>
      <div className="flex items-center justify-center relative">
        <div className="rounded-full overflow-hidden w-100 h-100">
          <img src="/fruit-ellipse.png" alt="" className=" object-cover" />
        </div>
        {/* bottom-left card */}
        <div className="flex items-center gap-5 absolute bottom-0 -left-120 right-70 w-fit">
          <div className="p-4 bg-white rounded-md space-y-2 shadow-sm">
            <p className="text-primary text-xl font-semibold">SUPLIERS</p>
            <p className="text-gray-400 w-fit">
              “All service provided is so perfect and fast, and im so happy to
              order from this company”
            </p>
          </div>
          <div className="shrink-0">
            <CircularImage img="/supplier.png" />
          </div>
        </div>
        {/* top-right card */}
        <div className="flex items-center gap-5 absolute top-0 -right-120 left-70 w-fit">
          <div className="shrink-0">
            <CircularImage img="/retailer.png" />
          </div>
          <div className="p-4 bg-primary text-white! rounded-md space-y-2">
            <p className=" text-xl">RETAILERS</p>
            <p className="w-fit">
              “All service provided is so perfect and fast, and im so happy to order from this company”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CircularImage = ({ img }: { img: string }) => {
  return (
    <div className="rounded-full overflow-hidden w-40 h-40 shadow-[0px_0px_30px_rgba(0,0,0,0.2)]">
      <img src={img} alt="" className=" h-full w-full object-cover" />
    </div>
  );
};
