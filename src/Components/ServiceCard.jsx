import React from 'react'

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
        <div className='flex justify-center items-center w-11 h-11 bg-coral-red rounded-full'>
            <img src={imgURL} alt={label} width={24} height={24}/>
        </div>
        <h3 className='font-poppins font-semibold text-3xl mt-5 leading-normal'>{label}</h3>
        <p className='mt-3 leading-normal text-lg break-words font-montserrat text-slate-gray'>{subtext}</p>
    </div>
  )
}

export default ServiceCard