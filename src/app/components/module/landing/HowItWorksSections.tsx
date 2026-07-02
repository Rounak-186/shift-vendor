import React from "react";
import { ArrowRight } from "lucide-react";

export const HowItWorksSections = () => {
  return (
    <div className="min-h-[50vh] w-full mx-auto max-w-[calc(100vw-400px)] flex flex-col items-center gap-15">
      <h2 className="text-4xl font-bold">
        HOW IT <span className="text-primary">WORKS</span>
      </h2>
      <div className="flex items-center gap-8 ">
        <div className=" w-60  overflow-hidden">
          <img
            src="/sign-up.png"
            alt="sign up photo"
            className="w-full h-full object-cover"
          />
          <p className="text-2xl font-semibold relative left-12">SIGN UP</p>
        </div>
        <ArrowRight size={70} strokeWidth={2} className="text-primary relative -top-10" />
        <div className=" w-60 overflow-hidden">
          <img
            src="/profile.png"
            alt="sign up photo"
            className="w-full h-full object-cover"
          />
          <p className="text-2xl font-semibold relative left-">CREATE PROFILE</p>
        </div>
        <ArrowRight size={70} strokeWidth={2} className="text-primary relative -top-10" />
        <div className=" w-60  overflow-hidden">
          <img
            src="/upload.png"
            alt="sign up photo"
            className="w-full h-full object-cover"
          />
          <p className="text-2xl font-semibold relative left-3">UPLOAD FORM</p>
        </div>
      </div>
    </div>
  );
};
