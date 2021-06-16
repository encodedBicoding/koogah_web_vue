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
        <div>
          <input
            type="file"
            ref="fileInput"
            name="image"
            class="d-none"
            @change="onChange"
            accept="image/*"
          />
          <div class="d-flex mb-3 position-relative">
            <i
              class="
                rounded-circle
                bg-white
                text-primary
                bi bi-camera
                fs-4
                move
              "
              @click="selectImage"
            ></i>
            <img
              :src="dispatch.profile_image"
              class="rounded-circle"
              width="100"
              height="100"
            />
          </div>
        </div>
        <form class="row">
          <div class="input-group mb-4">
            <span class="input-group-text" id="basic-addon1"
              ><i class="bi bi-person-fill fs-5"></i
            ></span>
            <input
              v-model="dispatch.first_name"
              type="text"
              class="form-control"
              placeholder="First name"
              aria-label="firstname"
              aria-describedby="basic-addon1"
            />
          </div>

          <div class="input-group mb-4">
            <span class="input-group-text" id="basic-addon1"
              ><i class="bi bi-person-fill fs-5"></i
            ></span>
            <input
              v-model="dispatch.last_name"
              type="text"
              class="form-control"
              placeholder="Last name"
              aria-label="lastname"
              aria-describedby="basic-addon1"
            />
          </div>

          <div class="input-group mb-4">
            <span class="input-group-text" id="basic-addon1"
              ><i class="bi bi-envelope-fill fs-5"></i
            ></span>
            <input
              v-model="dispatch.email"
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
              <p>+234</p>
            </span>

            <input
              v-model="dispatch.mobile_number"
              type="text"
              class="form-control"
              placeholder="Phone number"
              aria-label="phonenumber"
              aria-describedby="basic-addon1"
            />
          </div>

          <div class="input-group mb-4">
            <span class="input-group-text" id="basic-addon1"
              ><i class="bi bi-flag-fill fs-5"></i
            ></span>
            <input
              v-model="dispatch.nationality"
              type="text"
              class="form-control"
              placeholder="Nationality"
              aria-label="lastname"
              aria-describedby="basic-addon1"
            />
          </div>

          <div class="input-group">
            <select
              class="form-select mb-3"
              aria-label="example"
              v-model="dispatch.sex"
            >
              <option disabled value="">Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>

          <div class="input-group">
            <select
              class="form-select mb-3"
              aria-label="example"
              v-model="dispatch.state"
            >
              <option disabled value="">State of residence</option>
              <option v-for="state in states" :key="state">
                {{ state }}
              </option>
            </select>
          </div>

          <div class="input-group">
            <select
              class="form-select mb-3"
              aria-label="example"
              v-model="dispatch.town"
            >
              <option disabled value="">City/Town</option>
              <option v-for="city in town.lgas" :key="city">{{ city }}</option>
            </select>
          </div>

          <div class="input-group mb-4">
            <span class="input-group-text" id="basic-addon1"
              ><i class="bi bi-key-fill fs-5"></i
            ></span>
            <input
              v-model="dispatch.address"
              type="text"
              class="form-control"
              placeholder="Address"
              aria-label="address"
              aria-describedby="basic-addon1"
            />
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="input-group mb-4 col">
                <span class="input-group-text" id="basic-addon1"
                  ><i class="bi bi-cash fs-5"></i
                ></span>
                <input
                  v-model="dispatch.bvn"
                  type="text"
                  class="form-control"
                  placeholder="BVN"
                  aria-label="bvn"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-group mb-4 col">
                <span class="input-group-text" id="basic-addon1"
                  ><i class="bi bi-flag fs-5"></i
                ></span>
                <input
                  v-model="dispatch.identification_number"
                  type="text"
                  class="form-control"
                  placeholder="NIN"
                  aria-label="nin"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div>
              <h5>Emergency Contacts</h5>
              <p>
                Your safety is important to us. Provide two trusted contacts for
                emergency purposes.
              </p>
            </div>
            <div class="col-md-6">
              <div class="input-group mb-4 col">
                <span class="input-group-text" id="basic-addon1"
                  ><i class="bi bi-cash fs-5"></i
                ></span>
                <input
                  v-model="dispatch.emergency_contact_one_name"
                  type="text"
                  class="form-control"
                  placeholder="Full Name"
                  aria-label="fullname"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-group mb-4 col">
                <span class="input-group-text" id="basic-addon1"
                  ><i class="bi bi-flag fs-5"></i
                ></span>
                <input
                  v-model="dispatch.emergency_contact_one_phone"
                  type="text"
                  class="form-control"
                  placeholder="Phone Number"
                  aria-label="nin"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <hr />
            <div class="col-md-6">
              <div class="input-group mb-4 col">
                <span class="input-group-text" id="basic-addon1"
                  ><i class="bi bi-cash fs-5"></i
                ></span>
                <input
                  v-model="dispatch.emergency_contact_two_name"
                  type="text"
                  class="form-control"
                  placeholder="Full Name"
                  aria-label="fullname"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-group mb-4 col">
                <span class="input-group-text" id="basic-addon1"
                  ><i class="bi bi-flag fs-5"></i
                ></span>
                <input
                  v-model="dispatch.emergency_contact_two_phone"
                  type="text"
                  class="form-control"
                  placeholder="Phone Number"
                  aria-label="phonenumber"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
          <div class="text-center d-grid gap-2 col-6 mx-auto mb-4">
            <button
              type="submit"
              class="btn btn-deep btn-block txt-register btn-sign"
              @click.prevent="register"
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
            <p class="mb-0">Become a customer instead?</p>
            <router-link to="/register/customer"
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
import NaijaStates from "naija-state-local-government";
import { mapActions } from "vuex";

export default {
  components: { Header },
  data() {
    return {
      profile: null,

      dispatch: {
        profile_image: require("../assets/img/avatar.png"),
        first_name: "",
        last_name: "",
        email: "",
        bvn: "",
        identification_number: "",
        country_code: "+234",
        emergency_contact_one_name: "",
        emergency_contact_two_name: "",
        emergency_contact_two_phone: "",
        mobile_number: "",
        sex: "",
        nationality: "Nigerian",
        state: "",
        town: "",
        address: "",
      },
    };
  },
  methods: {
    ...mapActions({
      signup: "account/register",
      uploadImage: "account/uploadPicture",
    }),
    selectImage() {
      this.$refs.fileInput.click();
    },
    onChange(e) {
      const file = e.target.files[0];
      this.createImage(file);
    },
    createImage(file) {
      this.profile = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.dispatch.profile_image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    async register() {
      const ImageData = new FormData();
      ImageData.append("profile", this.profile);
      const res = await this.uploadImage(ImageData);
      this.dispatch.profile_image = res.data.data.secure_url;
      this.signup(this.dispatch);
      this.dispatch = null;
    },
  },
  computed: {
    states() {
      return NaijaStates.states();
    },
    town() {
      if (this.dispatch.state === "") {
        return [];
      }
      return NaijaStates.lgas(this.dispatch.state);
    },
  },
};
</script>

<style scoped>
.move {
  position: absolute;
  bottom: 8px;
  left: 90px;
  /* padding: 2px; */
  border-radius: 6px;
}
</style>
