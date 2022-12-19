import Footer from "./Footer";

const Main = ()=>{
  return(
    <>
      <main className="main">
        <section className="section-hero">
					<p>Hero section</p>
        </section>

        <section className="section-pricing" id="pricing">
          <p>Pricing section</p>
        </section>

      </main>
      <Footer />
    </>
  )
}
export default Main;