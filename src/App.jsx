import Nav from "./components/Nav"
import Hero from "./sections/Hero"

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <section className="padding">
        PopularProducts
      </section>
    </main>
  )
}

export default App