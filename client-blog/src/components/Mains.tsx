import { Link } from  'react-router-dom'

const Main = ()=>{
  return(
    <main>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              A healthy meal delivered to your door, every single day
            </h1>
            <p className="hero-description">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <Link to="#cta" className="btn btn--full margin-right-sm"
              >Start eating well</Link>
            <Link to="#how" className="btn btn--outline">Learn more &darr;</Link>

            <div className="delivered-meals">
              <div className="delivered-img">

              </div>
              <p className="delivered-text">
                <span>250,000+</span> meals delivered last year!
              </p>
            </div>
          </div>
          <div className="hero-img-box">

          </div>
        </div>
      </section>

      <section className="section-pricing" id="pricing">
        <div className="container">
          <span className="subheading">Pricing</span>
          <h2 className="heading-secondary">Eat well, pay less</h2>
        </div>
        <div className="container grid grid--2-cols margin-bottom-md">
          <div className="pricing-plan pricing-plan--starter">
            <header className="plan-header center-text">
              <p className="plan-name">Starter</p>
              <p className="plan-price"><span>$</span>399</p>
              <p className="plan-text">
                per month. That's just <strong>$13 per meal!</strong>
              </p>
            </header>
            <ul className="list margin-bottom-md">
              <li className="list-item">
                <span>1 meal/day</span>
              </li>
              <li className="list-item">
                <span>Order from 11am and 9pm</span>
              </li>
              <li className="list-item">
                <span>Delivery is free</span>
              </li>
              <li className="list-item">
              </li>
            </ul>
            <div className="plan-sign-up">
              <Link to="#" className="btn btn--full">Start eating well</Link>
            </div>
          </div>
          <div className="pricing-plan pricing-plan--complete">
            <header className="plan-header center-text">
              <p className="plan-name">Complete</p>
              <p className="plan-price"><span>$</span>649</p>
              <p className="plan-text">per month. That's just $11 per meal!</p>
            </header>
            <ul className="list margin-bottom-md">
              <li className="list-item">
                <span><strong>2 meals</strong> per day</span>
              </li>
              <li className="list-item">
                <span>Order <strong>24/7</strong></span>
              </li>
              <li className="list-item">
                <span>Delivery is free</span>
              </li>
              <li className="list-item">
                <span>Get access to latest recipes</span>
              </li>
            </ul>
            <div className="plan-sign-up">
              <Link to="#" className="btn btn--full">Start eating well</Link>
            </div>
          </div>
        </div>
        <div className="container grid">
          <aside className="plan-details">
            Prices include all applicable taxes. Users can cancel at any time.
            Both plans includes the following:
          </aside>
        </div>
        <div className="container grid grid--4-cols">
          <div className="feature">
            <p className="feature-title">Never cook again!</p>
            <p className="feature-text">
              Our subscriptions cover 365 days per year, even including major
              holidays.
            </p>
          </div>
          <div className="feature">
            <p className="feature-title">Local and organic</p>
            <p className="feature-text">
              Our cooks only use local, fresh, and organic products to prepare
              your meals.
            </p>
          </div>
          <div className="feature">
            <p className="feature-title">No waste</p>
            <p className="feature-text">
              All our partners only use reusable containers to package all your
              meals.
            </p>
          </div>
          <div className="feature">
            <p className="feature-text">
              Going on vacation? Just pause your subscription, and we refund
              unused days.
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}
export default Main;