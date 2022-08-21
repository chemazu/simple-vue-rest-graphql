<template>
  <div class="register">
    <div class="register-card">
      <div class="heading">
        <h2 class="text-3xl font-bold">Create Account</h2>
        <p>
          Already have an account?
          <router-link to="/login">Log in</router-link>
        </p>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="form-row">
          <div class="form-item">
            <label for="name"> First Name</label>
            <input type="text" v-model="fName" placeholder="Type here" />
          </div>
          <div class="form-item">
            <label for="name"> Last Name</label>
            <input type="text" v-model="lName" placeholder="Type here" />
          </div>
        </div>

        <div class="form-item">
          <label for="email"> Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Type here"
          />
        </div>
        <div class="form-item">
          <label for="password"> Password</label>
          <input type="password" v-model="password" placeholder="Type here" />
        </div>
        <div class="button-wrapper">
          <ButtonComponent title="Sign Up" className="disabled" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { register } from "@/services/register";
import ButtonComponent from "../components/ButtonComponent.vue";

export default {
  data() {
    return {
      fName: "",
      lName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      const user = {
        username: `${this.fName} ${this.lName}`,
        email: this.email,
        password: this.password,
      };
      register(user)
        .then((res) => {
          if (res.status != false) {
            this.$router.push("/login");
          }
          console.log(res.error);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  components: {
    ButtonComponent,
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/RegisterView.scss";
</style>
