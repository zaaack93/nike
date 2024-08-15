import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 flex justify-between items-center max-lg:flex-col-reverse gap-10 w-full ">
        <div className="flex-1">
            <img src={offer} alt="offer" width={773} height={678} className="object-contain w-full" />
        </div>
        
        <div className="flex flex-1 flex-col">
        <h1 className="font-palanquin text-4xl capitalize leading-normal font-bold lg:max-w-lg">
          <span className="text-coral-red">Special </span> Offer
        </h1>
        <p className="mt-8 lg:max-w-lg info-text">Discover stylish Nike arrivals, er stylish Nike arrivals, quality comfort, and innovation for your active life. Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <p className="mt-4 lg:max-w-lg info-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quod, cumque alias deserunt repellendus illum.</p>
        
        <div className="mt-8 w-fit flex flex-wrap gap-4">
            <Button label="Shop now" iconURL={arrowRight}></Button>
            <Button label="Learn more" backgroundColor="bg-white" textColor="color-slate-gray" borderColor="color-slate-gray"></Button>
        </div>

        </div>

    </section>
  )
}

export default SpecialOffer