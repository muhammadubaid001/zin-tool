"use client";

import { Fragment, useRef } from "react";
import { Card } from "../ui/Card";

export const Slider = () => {
  const sliderRef = useRef<any>(null);

  const slideLeft = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - 500;
  };

  const slideRight = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + 500;
  };
  return (
    <div className="mt-16 relative">
      <div className="flex justify-between items-center">
        <h1 className="font-HarmonyB text-gray-900 text-3xl">
          Convert from PDF
        </h1>
        <button className="bg-[#F2F2F2] font-HarmonyM flex items-center gap-1 rounded-full px-5 py-2 text-sm">
          ALL
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <button
        onClick={slideLeft}
        className="absolute bg-white border-2 border-gray-300 hover:border-gray-600 rounded-full p-2.5 -left-6 z-10 top-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-5 mt-5 scrollbar-hidden pb-4"
      >
        <Card
          title="Word to PDF"
          description="The best Wor to PDF converter online."
          image="https://images.hipdf.com/images2022/icons/word-pdf.svg"
        />
        <Card
          title="PPT to PDF"
          description="Covert Powerpoint to PDF online."
          image="https://images.hipdf.com/images2022/icons/PPT-PDF.svg"
        />
        <Card
          title="Excel to PDF"
          description="Covert JPG, PNG, BMP, GIF and TIFF images to PDF."
          image="https://images.hipdf.com/images2022/icons/Excel-PDF.svg"
        />
        <Card
          title="JPG to PDF"
          description="Convert TXT to PDF online for free."
          image="https://images.hipdf.com/images2022/icons/jpg-pdf.svg"
        />
        <Card
          title="JPG to PDF"
          description="Convert TXT to PDF online for free."
          image="https://images.hipdf.com/images2022/icons/PDF-TXT.svg"
        />
        <Card
          title="JPG to PDF"
          description="Convert TXT to PDF online for free."
          image="https://images.hipdf.com/images2022/icons/PDF-RTX.svg"
        />
      </div>
      <button
        onClick={slideRight}
        className="bg-white rounded-full absolute  border-2 border-gray-300 hover:border-gray-600 p-2.5 -right-6 top-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
};
