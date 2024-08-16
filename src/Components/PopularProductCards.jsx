import { star } from "../assets/icons"

const PopularProductCards = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} alt={name} className='w-[280px] h-[280px]' />
        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="rating" width={24} height={24}/>
            <p className="text-xl leading-normal font-montserrat text-slate-gray">(4.5)</p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-medium font-palanquin">{name}</h3>
        <p className="mt-2 leading-normal text-coral-red font-semibold font-montserrat">{price}</p>
    </div>
  )
}

export default PopularProductCards