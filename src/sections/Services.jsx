import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Services = () => {
  return (
    <section className="max-container flex flex-wrap justify-center items-center gap-9 max-sm:flex-col">
    {
        services.map((service) => (
            <ServiceCard key={service} {...service} />
        ))
    }
    </section>
  )
}

export default Services