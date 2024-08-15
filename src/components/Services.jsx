import { services } from "../constants"

const Services = () => {
  return (
    <section className="max-container flex flex-wrap justify-center items-center gap-9">
    {
        services.map((service, index) => (
            <div key={index} className="flex flex-col justify-center items-center gap-4">
                <img src={service.iconURL} alt={service.title} className="w-20 h-20" />
                <h3 className="font-palanquin text-2xl font-bold text-center">{service.label}</h3>
                <p className="font-montserrat text-slate-gray text-lg leading-8 text-center">{service.subtext}</p>
            </div>
        ))
    }
    </section>
  )
}

export default Services