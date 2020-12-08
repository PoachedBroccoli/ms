<template>
  <div
    class="yt-container"
    ref="videoContainer"
    :style="{ backgroundImage: 'url(' + videoBg + ')' }"
    :class="{ fix: fixed }"
  >
    <div class="blur">
      <div class="yt-content" ref="videoContent" v-html="player"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Yt',
  data () {
    return {
      fixed: false,
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scroll >= 430) {
        this.fixed = true
      } else {
        this.fixed = false
      }
    }, false)
  },
  computed: {
    ...mapState('yt', { videoBg: 'videoBg', player: 'player' })
  }
}
</script>

<style>
.yt-container {
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  margin-bottom: 50px;
  z-index: 999999;
}
.blur {
  width: 100%;
  height: 100%;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
}
.yt-content {
  display: flex;
  justify-content: center;
}
.fix {
  position: fixed;
  top: 0;
  width: 800px;
}
</style>