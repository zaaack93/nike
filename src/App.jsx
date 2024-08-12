import Nav from "./components/Nav"

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        Hero
      </section>
      <section className="padding">
        PopularProducts
      </section>
    </main>
  )
}

export default App