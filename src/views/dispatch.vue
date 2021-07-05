<template>
  <main>
    <Header />
    <section
      class="d-flex justify-content-center align-items-center mt-5 pt-5"
      style="min-height: 100vh"
    >
      <div class="bg-register p-4">
        <div class="text-center mb-5">
          <p class="fs-3 mb-0">
            <b>Register, Let’s get to know you</b>
          </p>
          <p class="txt-register mb-0 text-muted">
            We are glad you are here, fill in the fields below to create an
            account
          </p>
        </div>
        <div>
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
          <form class="row" @keyup.enter="register">
            <div class="input-group mb-4">
              <span class="input-group-text" id="basic-addon1"
                ><i class="bi bi-person-fill fs-5"></i
              ></span>

              <input
                v-model.trim="$v.dispatch.first_name.$model"
                :class="{ 'form-danger': $v.dispatch.first_name.$error }"
                type="text"
                class="form-control"
                placeholder="First name"
                aria-label="firstname"
                aria-describedby="basic-addon1"
              />
              <!-- <div class="text-danger valid-feedback d-block" v-if="!$v.dispatch.first_name.required">
              Field is required
            </div> -->
              <div
                class="text-danger valid-feedback d-block"
                v-if="!$v.dispatch.first_name.minLength"
              >
                First name must have at least
                {{ $v.dispatch.first_name.$params.minLength.min }}
                letters.
              </div>
            </div>

            <div class="input-group mb-4">
              <span class="input-group-text" id="basic-addon1"
                ><i class="bi bi-person-fill fs-5"></i
              ></span>

              <input
                v-model.trim="$v.dispatch.last_name.$model"
                :class="{ 'form-danger': $v.dispatch.last_name.$error }"
                type="text"
                class="form-control"
                placeholder="Last name"
                aria-label="lastname"
                aria-describedby="basic-addon1"
              />
              <!-- <div class="text-danger valid-feedback d-block" v-if="!$v.dispatch.mobile_number.required">
              Field is required
            </div> -->
              <div
                class="text-danger valid-feedback d-block"
                v-if="!$v.dispatch.last_name.minLength"
              >
                Last name must have at least
                {{ $v.dispatch.last_name.$params.minLength.min }}
                letters.
              </div>
            </div>

            <div class="mb-4">
              <div class="input-group">
                <span class="input-group-text" id="basic-addon1"
                  ><i class="bi bi-envelope-fill fs-5"></i
                ></span>
                <input
                  v-model.trim="$v.dispatch.email.$model"
                  :class="{ 'form-danger': $v.dispatch.email.$error }"
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                />
                <span
                  class="text-danger valid-feedback d-block"
                  v-if="!$v.dispatch.email.email"
                  >Please enter valid mail</span
                >
              </div>
            </div>

            <div class="input-group mb-4">
              <span class="input-group-text" id="basic-addon1"
                ><i class="bi bi-flag-fill fs-5"></i>
                <select class="form-select select" id="inputGroupSelect01">
                  <option value="1">+234</option>
                </select>
              </span>

              <input
                v-model.trim="$v.dispatch.mobile_number.$model"
                :class="{ 'form-danger': $v.dispatch.mobile_number.$error }"
                type="text"
                class="form-control"
                placeholder="Phone number"
                aria-label="phonenumber"
                aria-describedby="basic-addon1"
              />
              <!-- <div class="text-danger valid-feedback d-block" v-if="!$v.dispatch.mobile_number.required">
              Field is required
            </div> -->
              <div
                class="text-danger valid-feedback d-block"
                v-if="!$v.dispatch.mobile_number.maxLength"
              >
                Mobile number must not be more than
                {{ $v.dispatch.mobile_number.$params.maxLength.max }}
                characters.
              </div>
              <span
                class="text-danger valid-feedback d-block"
                v-else-if="!$v.dispatch.mobile_number.numeric"
                >Please enter valid number</span
              >
            </div>

            <div class="input-group mb-4">
              <span class="input-group-text" id="basic-addon1"
                ><i class="bi bi-flag-fill fs-5"></i
              ></span>
              <input
                disabled
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
                v-model.trim="$v.dispatch.sex.$model"
                :class="{ 'form-danger': $v.dispatch.sex.$error }"
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
                v-model.trim="$v.dispatch.state.$model"
                :class="{ 'form-danger': $v.dispatch.state.$error }"
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
                v-model.trim="$v.dispatch.town.$model"
                :class="{ 'form-danger': $v.dispatch.town.$error }"
              >
                <option disabled value="">City/Town</option>
                <option v-for="city in town.lgas" :key="city">
                  {{ city }}
                </option>
              </select>
            </div>
            <div class="input-group mb-4">
              <span class="input-group-text" id="basic-addon1"
                ><i class="bi bi-key-fill fs-5"></i
              ></span>
              <input
                v-model.trim="$v.dispatch.address.$model"
                :class="{ 'form-danger': $v.dispatch.address.$error }"
                type="text"
                class="form-control"
                placeholder="Address"
                aria-label="address"
                aria-describedby="basic-addon1"
              />
            </div>

            <div class="row">
              <div class="col-md-6 mb-4">
                <div class="input-group col">
                  <span class="input-group-text" id="basic-addon1"
                    ><i class="bi bi-cash fs-5"></i
                  ></span>
                  <input
                    v-model.trim="$v.dispatch.bvn.$model"
                    :class="{ 'form-danger': $v.dispatch.bvn.$error }"
                    type="text"
                    class="form-control"
                    placeholder="BVN"
                    aria-label="bvn"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div
                  class="text-danger valid-feedback d-block"
                  v-if="!$v.dispatch.bvn.maxLength"
                >
                  BVN must not be more than
                  {{ $v.dispatch.bvn.$params.maxLength.max }} characters.
                </div>
              </div>
              <div class="col-md-6 mb-4">
                <div class="input-group col">
                  <span class="input-group-text" id="basic-addon1"
                    ><i class="bi bi-flag fs-5"></i
                  ></span>
                  <input
                    v-model.trim="$v.dispatch.identification_number.$model"
                    :class="{
                      'form-danger': $v.dispatch.identification_number.$error,
                    }"
                    type="text"
                    class="form-control"
                    placeholder="NIN"
                    aria-label="nin"
                    aria-describedby="basic-addon1"
                  />
                  <div
                    class="text-danger valid-feedback d-block"
                    v-if="!$v.dispatch.identification_number.maxLength"
                  >
                    identification number must not be more than
                    {{
                      $v.dispatch.identification_number.$params.maxLength.max
                    }}
                    characters.
                  </div>
                </div>
              </div>
              <div>
                <h5>Emergency Contacts</h5>
                <p>
                  Your safety is important to us. Provide two trusted contacts
                  for emergency purposes.
                </p>
              </div>
              <div class="col-md-6">
                <div class="input-group mb-4">
                  <span class="input-group-text" id="basic-addon1"
                    ><i class="bi bi-person fs-5"></i
                  ></span>

                  <input
                    v-model.trim="$v.dispatch.emergency_contact_one_name.$model"
                    :class="{
                      'form-danger':
                        $v.dispatch.emergency_contact_one_name.$error,
                    }"
                    type="text"
                    class="form-control"
                    placeholder="Full Name"
                    aria-label="fullname"
                    aria-describedby="basic-addon1"
                  />
                  <!-- <div class="text-danger valid-feedback d-block" v-if="!$v.dispatch.mobile_number.required">
              Field is required
            </div> -->
                  <div
                    class="text-danger valid-feedback d-block"
                    v-if="!$v.dispatch.emergency_contact_one_name.minLength"
                  >
                    Name must have at least
                    {{
                      $v.dispatch.emergency_contact_one_name.$params.minLength
                        .min
                    }}
                    letters.
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="input-group mb-4 col">
                  <span class="input-group-text" id="basic-addon1"
                    ><i class="bi bi-flag fs-5"></i
                  ></span>
                  <input
                    v-model.trim="
                      $v.dispatch.emergency_contact_one_phone.$model
                    "
                    :class="{
                      'form-danger':
                        $v.dispatch.emergency_contact_one_phone.$error,
                    }"
                    type="text"
                    class="form-control"
                    placeholder="Phone Number"
                    aria-label="nin"
                    aria-describedby="basic-addon1"
                  />
                  <div
                    class="text-danger valid-feedback d-block"
                    v-if="!$v.dispatch.emergency_contact_one_phone.maxLength"
                  >
                    Mobile number must not be more than
                    {{
                      $v.dispatch.emergency_contact_one_phone.$params.maxLength
                        .max
                    }}
                    characters.
                  </div>
                  <span
                    class="text-danger valid-feedback d-block"
                    v-else-if="!$v.dispatch.emergency_contact_one_phone.numeric"
                    >Please enter valid number</span
                  >
                </div>
              </div>
              <hr />
              <div class="col-md-6">
                <div class="input-group mb-4">
                  <span class="input-group-text" id="basic-addon1"
                    ><i class="bi bi-person fs-5"></i
                  ></span>

                  <input
                    v-model.trim="$v.dispatch.emergency_contact_two_name.$model"
                    :class="{
                      'form-danger':
                        $v.dispatch.emergency_contact_two_name.$error,
                    }"
                    type="text"
                    class="form-control"
                    placeholder="Full Name"
                    aria-label="fullname"
                    aria-describedby="basic-addon1"
                  />
                  <!-- <div class="text-danger valid-feedback d-block" v-if="!$v.dispatch.mobile_number.required">
              Field is required
            </div> -->
                  <div
                    class="text-danger valid-feedback d-block"
                    v-if="!$v.dispatch.emergency_contact_two_name.minLength"
                  >
                    Name must have at least
                    {{
                      $v.dispatch.emergency_contact_two_name.$params.minLength
                        .min
                    }}
                    letters.
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-group mb-4 col">
                  <span class="input-group-text" id="basic-addon1"
                    ><i class="bi bi-flag fs-5"></i
                  ></span>
                  <input
                    v-model.trim="
                      $v.dispatch.emergency_contact_two_phone.$model
                    "
                    :class="{
                      'form-danger':
                        $v.dispatch.emergency_contact_two_phone.$error,
                    }"
                    type="text"
                    class="form-control"
                    placeholder="Phone Number"
                    aria-label="phonenumber"
                    aria-describedby="basic-addon1"
                  />

                  <div
                    class="text-danger valid-feedback d-block"
                    v-if="!$v.dispatch.emergency_contact_two_phone.maxLength"
                  >
                    Mobile number must not be more than
                    {{
                      $v.dispatch.emergency_contact_two_phone.$params.maxLength
                        .max
                    }}
                    characters.
                  </div>
                  <span
                    class="text-danger valid-feedback d-block"
                    v-else-if="!$v.dispatch.emergency_contact_two_phone.numeric"
                    >Please enter valid number</span
                  >
                </div>
              </div>
            </div>
            <div class="text-center d-grid gap-2 col-6 mx-auto mb-4">
              <button
                @click.prevent="$v.dispatch.$touch"
                class="btn btn-deep btn-block txt-register btn-sign"
              >
                SIGN UP
              </button>
            </div>
          </form>
        </div>

        <div>
          <p class="text-center mb-3 valid-feedback d-block text-muted">
            By Signing up, you agree to accept our
            <span class="txt-dark">Privacy Policy</span> &
            <span class="txt-dark">Terms of Service.</span>
          </p>
          <div class="text-center">
            <p class="mb-0">Become a customer instead?</p>
            <router-link to="/customer"
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
      profile: null,
      switch: true,
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
        emergency_contact_one_phone: "",
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
  validations: {
    dispatch: {
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
      bvn: {
        required,
        maxLength: maxLength(11),
        numeric,
      },
      identification_number: {
        required,
        maxLength: maxLength(11),
        numeric,
      },
      emergency_contact_one_name: {
        required,
        minLength: minLength(4),
      },
      emergency_contact_two_name: {
        required,
        minLength: minLength(4),
      },
      emergency_contact_one_phone: {
        required,
        maxLength: maxLength(11),
        numeric,
      },
      emergency_contact_two_phone: {
        required,
        maxLength: maxLength(11),
        numeric,
      },
      mobile_number: {
        required,
        maxLength: maxLength(11),
        numeric,
      },
      sex: {
        required,
      },
      state: {
        required,
      },
      town: {
        required,
      },
      address: {
        required,
      },
    },
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
      try {
        const ImageData = new FormData();
        ImageData.append("profile", this.profile);
        const res = await this.uploadImage(ImageData);
        this.dispatch.profile_image = res.data.data.secure_url;

        const response = await this.signup(this.dispatch);
        this.$toast.success(response.data.message);
        this.dispatch = null;
      } catch (err) {
        console.log(err);
      }
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
  mounted() {},
};
</script>

<style scoped>
.move {
  position: absolute;
  bottom: 8px;
  left: 90px;
  border-radius: 6px;
}

input:focus,
select:focus {
  box-shadow: none;
}
</style>
