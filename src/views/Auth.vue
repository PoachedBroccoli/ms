<template>
  <div class="auth">
    <!-- :class="{ signin: isSignIn, signup: isSignUp }" -->
    <div class="auth-container" :class="{ signin: isSignIn, signup: isSignUp }">
      <auth-tabs @click.native="changeState" />
      <auth-form :status="!!status" />
    </div>
  </div>
</template>

<script>
import { AuthTabs, AuthForm } from '@/components/index'

export default {
  name: 'Auth',
  components: {
    AuthTabs,
    AuthForm
  },
  data () {
    return {
      status: 0
    }
  },
  computed: {
    isSignIn () {
      return this.status === 0
    },
    isSignUp () {
      return this.status === 1
    }
  },
  methods: {
    changeState () {
      this.status = this.status === 0 ? 1 : 0
    }
  }
}
</script>

<style>
.auth {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(https://source.unsplash.com/3MAmj1ZKSZA);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-color: #fff;
  overflow: hidden;
  z-index: -2;
}
.auth:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: -30px;
  background-color: rgba(255, 255, 255, 0.4);
  background-image: url(https://source.unsplash.com/3MAmj1ZKSZA);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  filter: blur(8px);
  z-index: -1;
}
.auth-container {
  width: 500px;
  height: 280px;
  margin: 100px auto 0;
  background: #fff;
  border-radius: 5px;
  /* background: rgba(255, 255, 255, 0.6); */
  /* backdrop-filter: blur(15px); */
}
</style>