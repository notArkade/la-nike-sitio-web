import React from "react";

const Button = ({ label, iconURL, textColor, backgroundColor, borderColor }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 text-lg py-4 border font-montserrat leading-none 
    ${
      backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "bg-coral-red text-white border-coral-red"}
       rounded-full w-full"}`}>
      {label}

      {iconURL && (
        <img src={iconURL} alt="arrow" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
