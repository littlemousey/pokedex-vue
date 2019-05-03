<template>
  <div class="login-screen__form">
    <p>Who dares to open this Pokédex? Are you a trainer?</p>
    <div class="nes-field">
      <label for="name_field">Your name</label>
      <input id="name_field" v-model="username" type="text" class="nes-input">
    </div>
    <div class="nes-field">
      <label for="password_field">Password</label>
      <input id="password_field" v-model="password" type="password" class="nes-input">
    </div>
    <a class="nes-btn" @click="checkPassword">Continue</a>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { validatePassword } from "@/utils/validatePassword";

export default {
  data: function() {
    return {
      username: "",
      password: "",
      passwordCorrect: false
    };
  },
  methods: {
    checkPassword() {
      this.passwordCorrect = validatePassword(this.password);
      if (this.passwordCorrect) {
        this.setUserLoggedIn();
        this.$router.push("select");
      }
      return;
    },
    ...mapActions(["setUserLoggedIn"])
  }
};
</script>

<style scoped>
.login-screen__form {
  width: 500px;
  margin: 300px auto;
}
</style>
