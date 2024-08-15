import Nav from "./components/Nav"
import Hero from "./sections/Hero"
import PopularProducts from "./sections/PopularProducts"
import Services from "./sections/Services"
import SpecialOffer from "./sections/SpecialOffer"
import SuperQuality from "./sections/SuperQuality"

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
       <Hero />
      </section>

      <section className='padding'>
       <PopularProducts />
      </section>

      <section className='padding'>
       <SuperQuality />
      </section>
      <section className='padding'>
       <Services />
      </section>
      <section className='padding'>
       <SpecialOffer />
      </section>
    </main>
  )
}

export default App