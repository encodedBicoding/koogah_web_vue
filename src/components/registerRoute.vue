<template>
  <main>
    <Header />
    <section class="section cta-section" id="head">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 me-auto text-center text-md-start mb-5 mb-md-0">
            <h1 class="text-black">WHO ARE OUR DISPATCHERS</h1>
            <div class="countdown d-flex justify-content-center">
              Being a Koogah Dispatcher requires basic skill of communication and the ability to make quick decisions. With the Technological skill of operating a smartphone.
            </div>

            <h1 class="text-black">HOW YOU EARN</h1>
           
            <div class="countdown d-flex justify-content-center">
           As a Koogah Dispatcher, you get to make as much as a 100 thousand Naira and more monthly using the Koogah app.
            </div>

            <h1 class="text-black">HOW IT WORKS</h1>
            <p class="text-black">
              Three simple steps to becoming a Koogah Dispatcher; Download, Sign up and Verify your Identity using the Koogah Verification system.

            </p>
            <div class=" d-flex justify-content-center">
             <ul>
               <li class="mb-4">Your BVN and NIN are very important documents that would be required to start making money on Koogah.</li>
               <li class="mb-4">We are very keen on providing the simplest ways to verify ,so you can immediately start making money by Requesting to Dispatch packages, with Zero commission charge.</li>
               <li>Download the Koogah Dispatcher app, and start making money.</li>
             </ul>
            </div>
          </div>
          <div class="col-md-5 text-center text-md-end">
            <h4>
              <router-link
                to="/dispatcher"
                class="text-decoration-none text-dark"
                ><img
                  src="../assets/img/register.png"
                  alt="Image"
                  class="phone-2"
                  width="300"
                  data-aos="fade-right"
                  data-aos-delay="200"
              /></router-link>
            </h4>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="head">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 me-auto text-center text-md-start mb-5 mb-md-0">
            <h1 class="text-black">WHO ARE OUR CUSTOMERS</h1>
            <div class="countdown d-flex justify-content-center">
              Everyone has a business today, whether you are at the market or online. We all render services one way or the other. With delivering packages from one place to another at the top shelf of priorities in the business world now.
We have created Koogah to be a nexus point between your business and your vast customer base, where your packages are received as quickly as they are created.
            </div>

            <h1 class="text-black">HOW IT WORKS</h1>
          
            <div class="countdown d-flex justify-content-center">
              All you need to do is download the Koogah App from the App Store on your iOS device or Play Store on your Android device, create a package, and see your package move to its destination by one of our many diligent dispatchers.
Koogah Tracking system makes monitoring your package seamless, as you can monitor and watch your packages reach their destinations from the comfort of your homes or offices.
            </div>

            <h1 class="text-black">TOPPING UP YOUR KOOGAH WALLET</h1>
          
            <div class="countdown d-flex justify-content-center">
            Topping your account has been made absolutely stress-free. “Get Estimate” is an option in the app that gives you a range of what amount needs to be topped up anytime you need to move a package.
            </div>

             <h1 class="text-black">KOOGAH COINS</h1>
          
            <div class="countdown d-flex justify-content-center flex-column">
            
With our cash-back system, you stand a chance to deliver packages for free.
We give you back some percentage of every money deposited into your Koogah Wallet, to facilitate FREE delivery.
<b class="mt-3">Download the Koogah Customer App to experience efficient delivery.</b>
            </div>
          </div>
          <div class="col-md-5 text-center text-md-end">
            <h4>
              <router-link to="/customer" class="text-decoration-none text-dark"
                ><img
                  src="../assets/img/register_cus.png"
                  alt="Image"
                  class="phone-2"
                  width="300"
                  data-aos="fade-right"
                  data-aos-delay="200"
              /></router-link>
            </h4>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </main>
</template>

<script>
import Footer from "./Footer";
import Header from "./Header";
export default {
  components: { Header, Footer },
  mounted() {
    if (window.location.search) {
      let query = new URLSearchParams(window.location.search);
      let ref = query.get("ref");
      window.sessionStorage.setItem("ref", ref);
      window.sessionStorage.setItem("fromApp=", "web");
    }
  },
};
</script>
