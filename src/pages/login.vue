<template>
  <div class="login-screen__form">
    <p>Who dares to open this Pokédex? Are you a trainer?</p>
    <div class="nes-field">
      <label for="name_field">Your name</label>
      <input
        id="name_field"
        v-model="username"
        type="text"
        class="nes-input"
        @keyup.enter="checkPassword"
      >
    </div>
    <div class="nes-field">
      <label for="password_field">Password</label>
      <input
        id="password_field"
        v-model="password"
        type="password"
        class="nes-input"
        @keyup.enter="checkPassword"
      >
    </div>
    <a
      class="nes-btn"
      @click="checkPassword"
    >
      Continue
    </a>
    <p
      v-if="showPasswordError"
      class="nes-text is-error"
    >
      Oops, that was a wrong password. Try again
    </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { validatePassword } from '@/utils/validatePassword'

export default {
    data: function() {
        return {
            username: '',
            password: '',
            passwordCorrect: false,
            showPasswordError: false,
        }
    },
    methods: {
        checkPassword() {
            this.passwordCorrect = validatePassword(this.password)
            if (this.passwordCorrect) {
                this.setUserLoggedIn()
                this.$router.push('/')
            } else {
                this.showPasswordError = true
            }
        },
        ...mapActions(['setUserLoggedIn']),
    },
}
</script>

<style scoped>
.login-screen__form {
    width: 500px;
    margin: 300px auto;
}
</style>
