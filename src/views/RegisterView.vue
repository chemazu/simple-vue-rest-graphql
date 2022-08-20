<template>
  <div class="register">
    <div class="register-card">
      <div class="heading">
        <h2>Create Account</h2>
        <p>
          Already have an account <router-link to="/login">Log in</router-link>
        </p>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="form-row">
          <div class="form-item">
            <label for="name"> First Name</label>
            <input type="text" v-model="fName" placeholder=" First Name" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-item">
            <label for="name"> Last Name</label>
            <input type="text" v-model="lName" placeholder="Last Name" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-item">
            <label for="email"> Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Email"
            />
          </div>
          password
          <div class="form-item">
            <label for="password"> Password</label>
            <input type="password" v-model="password" placeholder="Password" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-item">
            <label for="password"> Confirm Password</label>
            <input
              type="password"
              v-model="confirmPassword"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-item">
            <button type="submit" class="btn btn-primary">Register</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { register } from "@/services/register";

export default {
  data() {
    return {
      fName: "",
      lName: "",
      email: "",
      password: "",
      confirmPassword: "",
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
};
</script>

<style>
.regsiter {
  background: #e5e5e5;
}
</style>
