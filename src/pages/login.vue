<template>
  <div class="login-screen__form">
    <p>Who dares to open this Pokédex? Are you a trainer?</p>
    <div class="nes-field">
      <label for="name_field">Your name</label>
      <input v-model="username" type="text" id="name_field" class="nes-input">
    </div>
    <div class="nes-field">
      <label for="password_field">Password</label>
      <input v-model="password" type="password" id="password_field" class="nes-input">
    </div>
    <a @click="checkPassword" class="nes-btn">Continue</a>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { validatePassword } from '@/utils/validatePassword'

    export default {
      data: function() {
        return {
          username: '',
          password: '',
          passwordCorrect: false
        }
      },
      methods: {
        checkPassword() {
          this.passwordCorrect = validatePassword(this.password)
          if (this.passwordCorrect) {
            this.setUserLoggedIn()
            this.$router.push('select')

          }
          return
        },
        ...mapActions([
            'setUserLoggedIn'
        ])
      }
    }
</script>

<style scoped>
.login-screen__form {
  width: 500px;
  margin: 300px auto;
}
</style>
