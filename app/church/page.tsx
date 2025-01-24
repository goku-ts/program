"use client";

import React from "react";
import Button from "@/components/Button";
import ResponsiveImage from "@/components/Image";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center mt-28">
        <ResponsiveImage src="/images/1.png" alt="1" />
        <div className="text-4xl text-gold mb-5">
          <h2>Church Outline</h2>
        </div>
        <Button
          title="Order Of Service"
          onClick={() => router.push("/church/order-of-service")}
        />
        <Button title="Hymns" onClick={() => router.push("/church/hymns")} />

        <ResponsiveImage src="/images/2.png" alt="1" />
      </div>
    </div>
  );
};

export default Page;
