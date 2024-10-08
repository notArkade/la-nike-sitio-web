import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, feedback, rating }) => {
  return (
  <div className="flex justify-center items-center flex-col">
    <img src={imgURL} alt="customer" className="object-cover w-[120px] h-[120px] rounded-full" />
    <p className="info-text text-center mt-6 max-w-sm">{feedback}</p>
    <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src={star} alt="star" width={24} height={24} className="object-contain m-0"/>
        <p className="font-montserrat text-slate-gray text-xl">({rating})</p>
    </div>
    <h3 className="mt-2 font-semibold text-center text-3xl font-poppins">{customerName}</h3>
  </div>
  );
};

export default ReviewCard
