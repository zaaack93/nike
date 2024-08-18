import { star } from "../assets/icons";

const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className="flex flex-1 flex-col items-center">
        <img src={imgURL} alt={customerName} className="w-[120px] h-[120px] rounded-full object-cover" />

      <p className="mt-6 max-w-sm text-center info-text">
        {feedback}
      </p>

      <div className="flex gap-2.5 items-center mt-3">
        <img src={star} alt="star" className="w-6 h-6 object-contain m-0" />
        <p className="font-montserrat text-slate-gray text-lg text-center break-words">
        ({rating})
        </p>
      </div>
      <h3 className="font-palanquin text-3xl leading-normal mt-5 font-bold text-center">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
