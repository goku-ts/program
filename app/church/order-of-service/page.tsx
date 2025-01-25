"use client";

import React from "react";
import ResponsiveImage from "@/components/Image";

const Page = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center ">
        <ResponsiveImage src="/images/1.png" alt="1" />
        <div className="text-3xl text-gold mb-5">
          <h3>Order of Service</h3>
        </div>
        <p className="text-xl mb-2">Bridal March/Processional - A&M 281</p>
        <p className="text-xl mb-2">Exhortation and Charge (All Stand)</p>
        <p className="text-xl mb-2"> 1st Reading - Gen 2:18-24</p>
        <p className="text-xl mb-2"> Hymn - A&M 350</p>
        <p className="text-xl mb-2">2nd Reading - 1 Cor 13:1-12</p>
        <p className="text-xl mb-2"> Hymn - A&M 520</p>
        <p className="text-xl mb-2">Pledge and Fidelity</p>
        <p className="text-xl mb-2"> Hymn 578 (All Kneeling)</p>
        <p className="text-xl mb-2"> Exchange of Vows (Congregation Sitting)</p>
        <p className="text-xl mb-2">Blessing and Exchange of Rings</p>
        <p className="text-xl mb-2"> Psalm 128</p>
        <p className="text-xl mb-2"> Prayer for Couple (Couple Kneeling)</p>
        <p className="text-xl mb-2">Hymn for Sermon - Supp 3</p>
        <p className="text-xl mb-2">Offertory - Song by Choir</p>
        <p className="text-xl mb-2">Final Blessing</p>
        <p className="text-xl mb-2">Signing of Register - Hymn A&M 202</p>
        <p className="text-xl mb-2">Wedding March</p>
        <ResponsiveImage src="/images/2.png" alt="1" />
      </div>
    </div>
  );
};

export default Page;
