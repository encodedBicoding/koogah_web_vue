<template>
  <main>
    <Header />
    <section class="section cta-section" id="head">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 me-auto text-center text-md-start mb-5 mb-md-0">
            <h1 class="text-black">Who are our dispatchers?</h1>
            <p class="text-black">
              We're working hard to improve our website and we'll be ready to
              launch after
            </p>
            <div class="countdown d-flex justify-content-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              ut illo earum, consectetur fugiat laudantium vitae corrupti, fuga
              sunt, quia amet. Sed voluptate culpa obcaecati, deserunt illo at
              consectetur iste.
            </div>

            <h1 class="text-black">How you earn?</h1>
            <p class="text-black">
              We're working hard to improve our website and we'll be ready to
              launch after
            </p>
            <div class="countdown d-flex justify-content-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              ut illo earum, consectetur fugiat laudantium vitae corrupti, fuga
              sunt, quia amet. Sed voluptate culpa obcaecati, deserunt illo at
              consectetur iste.
            </div>

            <h1 class="text-black">How it works?</h1>
            <p class="text-black">
              We're working hard to improve our website and we'll be ready to
              launch after
            </p>
            <div class="countdown d-flex justify-content-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              ut illo earum, consectetur fugiat laudantium vitae corrupti, fuga
              sunt, quia amet. Sed voluptate culpa obcaecati, deserunt illo at
              consectetur iste.
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
            <h1 class="text-black">Who are our customers?</h1>
            <p class="text-black">
              We're working hard to improve our website and we'll be ready to
              launch after
            </p>
            <div class="countdown d-flex justify-content-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              ut illo earum, consectetur fugiat laudantium vitae corrupti, fuga
              sunt, quia amet. Sed voluptate culpa obcaecati, deserunt illo at
              consectetur iste.
            </div>

            <h1 class="text-black">How does it work?</h1>
            <p class="text-black">
              We're working hard to improve our website and we'll be ready to
              launch after
            </p>
            <div class="countdown d-flex justify-content-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              ut illo earum, consectetur fugiat laudantium vitae corrupti, fuga
              sunt, quia amet. Sed voluptate culpa obcaecati, deserunt illo at
              consectetur iste.
            </div>

            <h1 class="text-black">How you earn?</h1>
            <p class="text-black">
              We're working hard to improve our website and we'll be ready to
              launch after
            </p>
            <div class="countdown d-flex justify-content-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              ut illo earum, consectetur fugiat laudantium vitae corrupti, fuga
              sunt, quia amet. Sed voluptate culpa obcaecati, deserunt illo at
              consectetur iste.
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
};
</script>
