// src/pages/index.tsx
import React, { useState } from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import filters from "../constants/filters";
import RangeSlider from "@/components/Slider";

const Home: React.FC = () => {
  const [activeButton, setActiveButton] = useState("");
  const [sliderRange, setSliderRange] = useState<[number, number]>([0, 25]);

  const handleButtonClick = (buttonName: React.SetStateAction<string>) => {
    setActiveButton(buttonName);
    // Set slider range based on button clicked
    switch (buttonName) {
      case "0-1 Lakhs":
        setSliderRange([0, 1]);
        break;
      case "3-5 Lakhs":
        setSliderRange([3, 5]);
        break;
      case "5-10 Lakhs":
        setSliderRange([5, 10]);
        break;
      case "10-25 Lakhs":
        setSliderRange([10, 25]);
        break;
      case "25 Lakhs+":
        setSliderRange([25, 25]);
        break;
      default:
        setSliderRange([0, 25]);
        break;
    }
  };

  const handleSliderChange = (range: [number, number]) => {
    // Update the slider range when slider is changed
    setSliderRange(range);
    setActiveButton(""); // Deselect button when slider changes
  };
  return (
    <div className="bg-white pb-9 text-black">
      <Header />
      <main>
        <div className="flex justify-evenly pb-4 lg:px-10 bg-[#E5E7EB] overflow-x-scroll no-scrollbar">
          {filters.map((filter, index) => (
            <Filter key={index} icon={filter.icon} text={filter.text} />
          ))}
        </div>
        <div className="flex flex-col md:flex-row px-5 sm:px-20 mt-5">
          <div className="md:w-3/5 md:mr-10">
            <p className="py-3">
              47 Office Space, <span>Lower Panel, Mumbai</span>
            </p>
            <div className="border border-gray-300 rounded-lg flex flex-col xl:flex-row xl:h-[250px]">
              <img
                src="/furnished.png"
                alt="Icon"
                className="h-[250px] rounded-l-lg"
              />
              <div className="w-full">
                <div className="border-b-2 border-b-gray-200 px-6 py-4">
                  <div className="border-b-gray-200 border-b pb-4">
                    <p className="font-bold mb-2">
                      ₹1,70,534{" "}
                      <span className=" font-normal">/ per month</span>
                    </p>
                    <div className="flex text-gray-500 items-center text-sm mb-2">
                      <img
                        src="/location.png"
                        alt="Icon"
                        className="mr-1 h-4"
                      />
                      <p>Sector 62, Golf Course Road</p>
                    </div>
                    <div className="flex">
                      <div className="flex text-black font-semibold text-xs items-center mr-3">
                        <img
                          src="/fullyfurnished.png"
                          alt="Icon"
                          className="mr-2"
                        />
                        <p>Fully Furnished</p>
                      </div>
                      <div className="flex items-center  text-xs">
                        <img
                          src="/carpetarea.png"
                          alt="Icon"
                          className=" mr-1"
                        />
                        <p className="">
                          Carpet Area:{" "}
                          <span className="font-bold">4,772 sq.ft</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="font-semibold text-xs mb-2">
                      Office for rent in Bandra Kurla Complex, Mumbai
                    </p>
                    <p className="font-light text-xs ">
                      Welcome to our modern and spacious office...{" "}
                      <button className="text-[#5359EA] font-semibold">
                        Read More
                      </button>
                    </p>
                  </div>
                </div>
                <div className="flex justify-between px-4 py-3 text-sm">
                  <button className="text-[#5359EA] hidden sm:block">Show All Images</button>
                  <div>
                    <button className="bg-[#5359EA] text-white px-8 py-2 rounded-md mr-3">
                      Shortlist
                    </button>
                    <button className="bg-[#7ADA66] py-2 px-4 rounded-md text-white">
                      Wha
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col p-6 border-gray-300 border rounded-lg mt-4">
              <div className="sm:w-2/5 mr-5 flex flex-col justify-between">
                <div>
                  <p className="font-semibold">
                    Please share your budget with us
                  </p>
                  <p className="text-sm font-light">
                    We want to respect your time and help you find the perfect
                    property fast.
                  </p>
                </div>
                <img src="/logo.png" alt="Logo" className="w-[115px] mr-8 sm:block hidden" />
              </div>
              <div className="sm:w-3/5">
                <p className="text-sm">Select Budget</p>
                <RangeSlider
                  initialRange={sliderRange}
                  onChange={handleSliderChange}
                  isButtonSelected={!!activeButton}
                  onButtonDeselect={() => setActiveButton("")}
                />
                <div className="flex justify-around">
                  <button
                    className={`border rounded-2xl px-2 py-1 text-[9px] sm:text-[13px] font-light ${
                      activeButton === "0-1 Lakhs"
                        ? "bg-blue-100 border-blue-500"
                        : "border-gray-300"
                    }`}
                    onClick={() => handleButtonClick("0-1 Lakhs")}
                  >
                    0-1 Lakhs
                  </button>
                  <button
                    className={`border rounded-2xl px-2 py-1 text-[9px] sm:text-[13px] font-light ${
                      activeButton === "3-5 Lakhs"
                        ? "bg-blue-100 border-blue-500"
                        : "border-gray-300"
                    }`}
                    onClick={() => handleButtonClick("3-5 Lakhs")}
                  >
                    3-5 Lakhs
                  </button>
                  <button
                    className={`border rounded-2xl px-2 py-1 text-[9px] sm:text-[13px] font-light ${
                      activeButton === "5-10 Lakhs"
                        ? "bg-blue-100 border-blue-500"
                        : "border-gray-300"
                    }`}
                    onClick={() => handleButtonClick("5-10 Lakhs")}
                  >
                    5-10 Lakhs
                  </button>
                  <button
                    className={`border rounded-2xl px-2 py-1 text-[9px] sm:text-[13px] font-light ${
                      activeButton === "10-25 Lakhs"
                        ? "bg-blue-100 border-blue-500"
                        : "border-gray-300"
                    }`}
                    onClick={() => handleButtonClick("10-25 Lakhs")}
                  >
                    10-25 Lakhs
                  </button>
                  <button
                    className={`border rounded-2xl px-2 py-1 text-[9px] sm:text-[13px] font-light ${
                      activeButton === "25 Lakhs+"
                        ? "bg-blue-100 border-blue-500"
                        : "border-gray-300"
                    }`}
                    onClick={() => handleButtonClick("25 Lakhs+")}
                  >
                    25 Lakhs+
                  </button>
                </div>
                <button className="w-full text-center mt-4 border-gray-300 border py-3 rounded-lg">
                  Show Results
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-2/5 mt-4 md:mt-0 h-fit border-gray-300 border rounded-lg">
            <p className="border-b-gray-200 border-b font-semibold px-3 py-3">
              Shortlisted Properties
            </p>
            <div className="p-4 px-8">
              <div className="flex border-b py-3 sm:flex-row flex-col border-b-gray-200">
                <img
                  src="/furnished.png"
                  alt="Icon"
                  className="sm:h-[75px] rounded-lg sm:mr-4"
                />
                <div className="sm:mt-0 mt-3 text-xs">
                  <p className="font-bold ">
                    ₹1,70,534 <span className="font-normal">/ per month</span>
                  </p>
                  <p>Sector 62, Golf Course Road</p>
                  <div className="flex items-center mt-3 text-xs">
                    <img src="/carpetarea.png" alt="Icon" className=" mr-1" />
                    <p>
                      Carpet Area:{" "}
                      <span className="font-bold">4,772 sq.ft</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-b py-3 sm:flex-row flex-col border-b-gray-200">
                <img
                  src="/furnished.png"
                  alt="Icon"
                  className="sm:h-[75px] rounded-lg sm:mr-4"
                />
                <div className="sm:mt-0 mt-3 text-xs">
                  <p className="font-bold ">
                    ₹1,70,534 <span className="font-normal">/ per month</span>
                  </p>
                  <p>Sector 62, Golf Course Road</p>
                  <div className="flex items-center mt-3 text-xs">
                    <img src="/carpetarea.png" alt="Icon" className=" mr-1" />
                    <p>
                      Carpet Area:{" "}
                      <span className="font-bold">4,772 sq.ft</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex py-4 pt-0 justify-center">
              <button className="bg-[#5359EA] text-white px-8 py-2 rounded-md">
                Schedule a Visit
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
