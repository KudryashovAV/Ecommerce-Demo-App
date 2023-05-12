import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return(
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img
                  alt="main banner"
                  className="img-fluid rounded-3"
                  src="/images/main-banner-1.jpg"
                />
                <div className="main-banner-content position-absolute">
                  <h4>BEST TOYS EVER</h4>
                  <h5>HASBRO CAR</h5>
                  <p>From $999.00 or 41.62/mo</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
