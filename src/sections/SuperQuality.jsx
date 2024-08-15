import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="max-container max-sm:mt-12 flex justify-between items-center max-lg:flex-col gap-10 w-full ">
        <div className="flex flex-1 flex-col">
        <h1 className="font-palanquin text-4xl capitalize leading-normal font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super </span>
          <span className="text-coral-red">Quality</span> Shoes
        </h1>
        <p className="mt-8 lg:max-w-lg info-text">Discover stylish Nike arrivals, er stylish Nike arrivals, quality comfort, and innovation for your active life. Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <p className="mt-4 lg:max-w-lg info-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quod, cumque alias deserunt repellendus illum.</p>
        
        <div className="mt-8 w-fit">
            <Button label="View details"></Button>
        </div>

        </div>
        <div className="flex justify-center items-center flex-1">
            <img src={shoe8} alt="shoe" width={570} height={520} className="object-contain" />
        </div>
    </section>
  )
}

export default SuperQuality