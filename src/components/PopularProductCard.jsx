import { star } from "../assets/icons";

const PopularProductCard = ({ product }) => {
  return (
    <div  className="flex flex-1 flex-col w-full">
      <div className="relative w-full aspect-square rounded-lg">
        <img
          src={product.imgURL}
          alt="shoe"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-8 flex flex-row justify-start items-center gap-2.5">
        <img src={star} alt="star" className="w-6 h-6" />
        <p className="font-montserrat text-slate-gray text-lg leading-normal">(4.5)</p>
      </div>
      <h3 className="font-palanquin text-2xl mt-2 leading-normal font-semibold">{product.name}</h3>
      <p className="mt-2 font-montserrat font-medium text-coral-red text-lg leading-normal">{product.price}</p>
    </div>
  );
};

export default PopularProductCard;
