import { Aside, Card, Footer  } from ".";


const Main = ()=>{
  return(
    <>
      <main className="main">
        <Aside />
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <section className="section-hero">
					<p>Hero section</p>
        </section>

        <section className="section-pricing" id="pricing">
          <p>Pricing section</p>
        </section>
      </main>
        <div className="container">
          <Card />
        </div>
      <Footer />
    </>
  )
}
export default Main;