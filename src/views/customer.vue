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
        <form class="row" @keyup.enter="register" @submit.prevent="register">
          <div class="col-md-6 mb-4">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1"
                ><i class="bi bi-person-fill fs-5"></i
              ></span>
              <input
                v-model.trim="$v.user.first_name.$model"
                :class="{ 'form-danger': $v.user.first_name.$error }"
                type="text"
                class="form-control"
                placeholder="First name"
                aria-label="firstname"
                aria-describedby="basic-addon1"
              />
            </div>
            <!-- 
            <div class="text-danger" v-if="!$v.user.first_name.required">
              Field is required
            </div> -->
            <div class="text-danger" v-if="!$v.user.first_name.minLength">
              First Name must have at least
              {{ $v.user.first_name.$params.minLength.min }} letters.
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="input-group col-md-6">
              <span class="input-group-text" id="basic-addon1"
                ><i class="bi bi-person-fill fs-5"></i
              ></span>
              <input
                v-model.trim="$v.user.last_name.$model"
                :class="{ 'form-danger': $v.user.last_name.$error }"
                type="text"
                class="form-control"
                placeholder="Last name"
                aria-label="lastname"
                aria-describedby="basic-addon1"
              />
            </div>
            <!-- <div class="text-danger" v-if="!$v.user.last_name.required">
              Field is required
            </div> -->
            <div class="text-danger" v-if="!$v.user.last_name.minLength">
              Last Name must have at least
              {{ $v.user.last_name.$params.minLength.min }} letters.
            </div>
          </div>

          <div class="input-group mb-4">
            <span class="input-group-text" id="basic-addon1"
              ><i class="bi bi-envelope-fill fs-5"></i
            ></span>
            <input
              v-model.trim="$v.user.email.$model"
              :class="{ 'form-danger': $v.user.email.$error }"
              type="email"
              class="form-control"
              placeholder="Email"
              aria-label="email"
              aria-describedby="basic-addon1"
            />

            <!-- <div class="text-danger valid-feedback d-block" v-if="!$v.user.email.required">
              Field is required
            </div> -->
          </div>

          <div class="input-group mb-4">
            <span class="input-group-text" id="basic-addon1"
              ><i class="bi bi-flag-fill fs-5"></i>
              <select class="form-select" id="inputGroupSelect01">
                <option value="1">+234</option>
              </select>
            </span>

            <input
              v-model.trim="$v.user.mobile_number_one.$model"
              :class="{ 'form-danger': $v.user.mobile_number_one.$error }"
              type="text"
              class="form-control"
              placeholder="Phone number"
              aria-label="phonenumber"
              aria-describedby="basic-addon1"
            />
            <!-- <div class="text-danger valid-feedback d-block" v-if="!$v.user.mobile_number_one.required">
              Field is required
            </div> -->
            <div
              class="text-danger valid-feedback d-block"
              v-if="!$v.user.mobile_number_one.maxLength"
            >
              Mobile number must not be more than
              {{ $v.user.mobile_number_one.$params.maxLength.max }} characters.
            </div>
          </div>

          <div class="input-group mb-4">
            <span class="input-group-text" id="basic-addon1"
              ><i class="bi bi-key-fill fs-5"></i
            ></span>

            <input
              v-model.trim="$v.user.password.$model"
              :class="{ 'form-danger': $v.user.password.$error }"
              type="password"
              class="form-control"
              placeholder="Password"
              aria-label="password"
              aria-describedby="basic-addon1"
            />

            <span class="valid-feedback text-muted d-block">
              Password must contain at least two characters, capital letter and
              number
            </span>
            <!-- <div class="text-danger valid-feedback d-block" v-if="!$v.user.password.required">
              Field is required
            </div> -->
            <div
              class="text-danger valid-feedback d-block"
              v-if="!$v.user.password.minLength"
            >
              Mobile number must not be more than
              {{ $v.user.password.$params.minLength.min }} characters.
            </div>
          </div>

          <div class="text-center d-grid gap-2 col-6 mx-auto mb-4">
            <button
              class="btn btn-deep btn-block txt-register btn-sign"
              type="submit"
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
import { mapActions } from "vuex";
import {
  required,
  minLength,
  maxLength,
  email,
  numeric,
} from "vuelidate/lib/validators";

export default {
  components: { Header },
  data() {
    return {
      user: {
        first_name: "",
        last_name: "",
        email: "",
        mobile_number_one: "",
        country_code: "+234",
        password: "",
      },
    };
  },
  validations: {
    user: {
      first_name: {
        required,
        minLength: minLength(4),
      },
      last_name: {
        required,
        minLength: minLength(4),
      },
      email: {
        required,
        email,
      },
      mobile_number_one: {
        required,
        maxLength: maxLength(11),
        numeric,
      },
      password: {
        required,
        minLength: minLength(8),
      },
    },
  },
  methods: {
    ...mapActions({
      signup: "account/customerRegister",
    }),
    async register() {
      try {
        const res = await this.signup(this.user);
        console.log(res);
        this.$toast.info(res.data.message);
        this.user = null;
      } catch (error) {
        this.$toast.error(error.response.data.error[0].message);
      }
    },
  },
};
</script>

<style scoped>
input:focus,
select:focus {
  box-shadow: none;
}
</style>
