<template>
  <header class="header">
    <span>Music Chat</span>
    <!-- <span class="autho" v-if="!isSignin">
      <router-link
        class="signin"
        :to="{ path: 'auth', query: { status: 'signin' } }"
        >Sign in</router-link
      >
      <span class="vertical-line">|</span>
      <router-link
        class="signup"
        :to="{ path: 'auth', query: { status: 'signup' } }"
        >Sign up</router-link
      >
    </span>
    <span class="autho" v-if="isSignin">
      <span class="name">{{ nickname }}</span>
      <span class="vertical-line">|</span>
      <span class="logout" @click="logout">logout</span>
    </span> -->
  </header>
</template>

<script>
// import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Header',
  computed: {
    // ...mapState('auth', { nickname: 'nickname' }),
    // ...mapGetters('auth', { isSignin: 'isSignin' }),
  },
}
</script>

<style>
.header {
  position: relative;
  height: 50px;
  background-color: #000;
  color: #fff;
  line-height: 50px;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
}
.autho {
  position: absolute;
  right: 40px;
}
.autho .signin,
.autho .vertical-line,
.autho .signup,
.autho .name,
.autho .logout {
  padding: 0 5px;
  font-size: 12px;
  color: #fff;
  text-decoration: none;
}

.autho .logout {
  cursor: pointer;
}
</style>