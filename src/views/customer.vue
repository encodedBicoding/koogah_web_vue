<template>
  <main>
    <Header />
    <section
      class="d-flex justify-content-center align-items-center mt-5 pt-5"
      style="min-height: 100vh"
    >
      <div class="bg-register p-4">
        <div class="text-center mb-5">
          <p class="fs-3">
            Register, <br />
            Let’s get to know you
          </p>
          <p class="txt-register mb-0">
            We are glad you are here, fill in the fields <br />
            below to create an account
          </p>
        </div>
        <form class="row">
          <div class="col-md-6">
            <div class="input-group mb-4">
              <span class="input-group-text" id="basic-addon1"
                ><i class="bi bi-person-fill fs-5"></i
              ></span>
              <input
                type="text"
                class="form-control"
                placeholder="First name"
                aria-label="firstname"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-group mb-4 col-md-6">
              <span class="input-group-text" id="basic-addon1"
                ><i class="bi bi-person-fill fs-5"></i
              ></span>
              <input
                type="text"
                class="form-control"
                placeholder="Last name"
                aria-label="lastname"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div class="input-group mb-4">
            <span class="input-group-text" id="basic-addon1"
              ><i class="bi bi-envelope-fill fs-5"></i
            ></span>
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              aria-label="email"
              aria-describedby="basic-addon1"
            />
          </div>

          <div class="input-group mb-4">
            <span class="input-group-text" id="basic-addon1"
              ><i class="bi bi-flag-fill fs-5"></i>
              <select class="form-select" id="inputGroupSelect01">
                <option value="1">+234</option>
                <option value="2">+112</option>
                <option value="3">+567</option>
              </select>
            </span>

            <input
              type="text"
              class="form-control"
              placeholder="Phone number"
              aria-label="phonenumber"
              aria-describedby="basic-addon1"
            />
          </div>

          <div class="input-group mb-4">
            <span class="input-group-text" id="basic-addon1"
              ><i class="bi bi-key-fill fs-5"></i
            ></span>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              aria-label="password"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="text-center d-grid gap-2 col-6 mx-auto mb-4">
            <button
              type="submit"
              class="btn btn-deep btn-block txt-register btn-sign"
            >
              SIGN UP
            </button>
          </div>
        </form>
        <div>
          <p class="text-center mb-0">
            By Signing up, you agree to accept our <br />
            <span class="txt-dark">Privacy Policy</span> &
            <span class="txt-dark">Terms of Service.</span>
          </p>
          <div>
            <p class="mb-0">Become a dispatcher instead?</p>
            <router-link to="/dispatcher"
              ><span class="txt-dark">SIGN UP</span></router-link
            >
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Header from "../components/Header";
export default {
  components: { Header },
};
</script>
