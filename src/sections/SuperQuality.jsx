import React from "react";
import Button from "../Components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-poppins font-medium text-4xl capitalize lg:max-w-lg">
          We Provide <span className="text-coral-red">Super</span>
          <br />
          <span className="text-coral-red">Quality</span> Products
        </h2>
        <p className="mt-4 info-text lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 info-text lg:max-w-lg">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className="mt-11">
        <Button label="View Details" />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe8" className="object-contain" width={570} height={522}/>
      </div>
    </section>
  );
};

export default SuperQuality;
