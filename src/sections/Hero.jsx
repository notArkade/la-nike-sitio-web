import React from "react";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../Components/ShoeCard";
import { useState } from "react";



const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 w-full flex flex-col justify-center items-start max-xl:padding-x pt-28">
        <p className="font-montserrat text-coral-red text-xl">
          Our Winter Collections
        </p>
        <h1 className="mt-10 font-poppins font-medium text-8xl max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="text-coral-red">Be</span> Unique
          <br />
          Be <span className="text-coral-red font-montserrat">Nike</span>
        </h1>
        <p className="font-montserrat mt-6 mb-14 text-slate-gray sm:max-w-sm text-lg">
          Discover stylish Nike arrivals, quality comfort and innovation for
          your active life.
        </p>

        <Button label="Shop Now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full gap-16 mt-20">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-medium">{stat.value}</p>
              <p className="leading-7 font-poppins text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center flex-1 relative max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImg} alt="shoe-1" width={610} height={500} className="object-contain relative z-10"/>

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard 
              imgURL={shoe}
              changeBigShoeImg= {
                (shoe)=> setBigShoeImg(shoe)} 
                bigShoeImg={bigShoeImg}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
