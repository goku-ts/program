"use client";

import React, { useEffect } from "react";
import Button from "@/components/Button";
import ResponsiveImage from "@/components/Image";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center mt-28">
        <ResponsiveImage src="/images/1.png" alt="1" />
        <div className="text-4xl text-gold mb-5">
          <h2>M&W</h2>
        </div>
        <Button title="Church" onClick={() => router.push("/church")} />
        <Button title="Reception" onClick={() => router.push("/reception")} />
        <ResponsiveImage src="/images/2.png" alt="1" />
      </div>
    </div>
  );
};

export default page;
