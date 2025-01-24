"use client";

import React from "react";

import ResponsiveImage from "@/components/Image";

const Page = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center mt-28">
        <ResponsiveImage src="/images/1.png" alt="1" />
        <div className="text-4xl text-gold mb-5">
          <h2>Program Outline</h2>
        </div>

        <ResponsiveImage src="/images/2.png" alt="1" />
      </div>
    </div>
  );
};

export default Page;
