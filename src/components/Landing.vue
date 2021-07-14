<template>
  <main>
    <Header />
    <!-- End Header -->

    <!-- ======= Hero Section ======= -->
    <section class="hero-section" id="hero">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 hero-text-image">
            <div class="row">
              <div class="col-lg-8 text-center text-lg-start">
                <h1 data-aos="fade-right" class="text-black">
                  A complete solution to logistics and package delivery.
                </h1>
                <p class="text-black">Koogah - Logistics done efficiently</p>
                <div class="col-md-5">
                  <h6>Download on</h6>
                  <p>
                    <a
                      href="https://apps.apple.com/ng/app/koogah-customer/id1562395555"
                      class="btn btn-dark d-inline-flex align-items-center me-2"
                      ><i class="bx bxl-apple fs-3"></i
                      ><span>App store</span></a
                    >
                    <a
                      href="https://play.google.com/store/apps/details?id=com.koogah.customer"
                      class="btn btn-dark d-inline-flex align-items-center"
                      ><i class="bx bxl-play-store fs-3"></i
                      ><span>Google play</span></a
                    >
                  </p>
                </div>
              </div>
              <div class="col-lg-4 iphone-wrap">
                <img
                  src="../assets/img/koogah_market_place_mobile.png"
                  alt="Image"
                  class="phone-1"
                  data-aos="fade-right"
                />
                <img
                  src="../assets/img/koogah_tracking_mobile.png"
                  alt="Image"
                  class="phone-2"
                  data-aos="fade-right"
                  data-aos-delay="200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Hero -->

    <main id="main">
      <!-- ======= Home Section ======= -->
      <section class="section">
        <div class="container">
          <div class="row justify-content-center text-center mb-5">
            <div class="col-md-5" data-aos="fade-up">
              <h2 class="section-heading">Our Services</h2>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="">
              <div class="feature-1 text-center">
                <div class="wrap-icon icon-1">
                  <i class="bi bi-people"></i>
                </div>
                <h3 class="mb-3">Same Day Delivery</h3>
                <p>
                  Your package is of utmost priority, with dispatchers strongly
                  serving our one-customer-per delivery system, Koogah is
                  determined to guarantee same day delivery.
                </p>
              </div>
            </div>
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div class="feature-1 text-center">
                <div class="wrap-icon icon-1">
                  <i class="bi bi-brightness-high"></i>
                </div>
                <h3 class="mb-3">Faster Pickup Time</h3>
                <p>
                  Access speed time pick up with Koogah's algorithms and market
                  place feed system and a vast number of dispatchers.
                </p>
              </div>
            </div>
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div class="feature-1 text-center">
                <div class="wrap-icon icon-1">
                  <i class="bi bi-brightness-high"></i>
                </div>
                <h3 class="mb-3">Real-time Tracking and Location Analysis</h3>
                <p>
                  Your packages literally never leave your sight. With Koogah's
                  tracking technology, you watch your packages move every step
                  of the way. Control is everything. You now have true control.
                </p>
              </div>
            </div>
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div class="feature-1 text-center">
                <div class="wrap-icon icon-1">
                  <i class="bi bi-box-seam"></i>
                </div>
                <h3 class="mb-3">Select your preferred dispatcher</h3>
                <p>
                  With the control you now have, you decide who picks up and
                  delivers your package.
                </p>
              </div>
            </div>
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div class="feature-1 text-center">
                <div class="wrap-icon icon-1">
                  <i class="bi bi-box-seam"></i>
                </div>
                <h3 class="mb-3">Earn Koogah-coin to deliver more packages</h3>
                <p>
                  Everytime you top up your wallet, our cashback system offers
                  you Koogah coin which enables you deliver packages for free.
                </p>
              </div>
            </div>
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div class="feature-1 text-center">
                <div class="wrap-icon icon-1">
                  <i class="bi bi-box-seam"></i>
                </div>
                <h3 class="mb-3">Save Time and Money</h3>
                <p>
                  Koogah offers you the most time efficient and cost effective
                  method. With a few clicks, you never have to worry about
                  anything. Koogah gives you that control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">

        </div>
      </section>

      <section class="section">
        <div class="container">
          <!-- <div
            class="row justify-content-center text-center mb-5"
            data-aos="fade"
          >
            <div class="col-md-6 mb-5">
              <img
                src="../assets/img/Koogah_illus-logisticGuy.svg"
                alt="Image"
                class="img-fluid"
              />
            </div>
          </div> -->

          <div class="row">
            <div class="col-md-4">
              <div class="step">
                <span class="number">01</span>
                <h3>Sign Up</h3>
                <p></p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="step">
                <span class="number">02</span>
                <h3>Top-up account</h3>
                <p></p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="step">
                <span class="number">03</span>
                <h3>Create A Package</h3>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <!-- End #main -->

    <!-- ======= Footer ======= -->
    <Footer />
  </main>
</template>

<script>
import Footer from "./Footer";
import Header from "./Header";
export default {
  components: { Header, Footer },
  mounted: () => {
    document.title = "Koogah - Logistics Done Efficiently";
  },
};
</script>
