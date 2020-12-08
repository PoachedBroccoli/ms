<template>
  <div class="content" :class="{ play: isPlaying, pause: isPause }">
    <Yt />

    <Item
      v-for="(musicItem, i) in music"
      :music="musicItem"
      :musicImg="musicImg"
      :index="i"
      @play="play"
      @pause="pause"
      @qr="qr"
      :key="i"
    ></Item>

    <audio
      class="audio"
      :src="src"
      style="display: none"
      ref="audio"
      preload="true"
    ></audio>

    <div
      class="qrcode"
      @click="switchFlag = !switchFlag"
      :class="{ on: switchFlag }"
    >
      <vue-qr
        :logoSrc="imageUrl"
        :text="url"
        :size="200"
        colorDark="#262735"
        :correctLevel="3"
        :autoColor="false"
        :margin="0"
        :logoMargin="3"
        ref="qrcode"
      ></vue-qr>
    </div>
  </div>
</template>

<script>
// import { Item, Yt } from '@/components/index.js'
import Item from '@/components/home/Item.vue'
import Yt from '@/components/home/Yt.vue'

import { mapState } from 'vuex'
import vueQr from 'vue-qr'

export default {
  name: 'Content',
  components: {
    'Item': Item,
    'Yt': Yt,
    vueQr
  },
  data () {
    return {
      onPlay: false,
      switchFlag: false,
    }
  },
  mounted () {
    this.$refs.audio.addEventListener('ended', () => {
      this.onPlay = false
    }, false)
  },
  computed: {
    ...mapState('music', {
      music: 'music',
      musicImg: 'musicImg'
    }),
    ...mapState('audio', {
      src: 'src',
      url: 'artistViewUrl',
      imageUrl: 'artworkUrl100'
    }),
    isPlaying () {
      return this.onPlay
    },
    isPause () {
      return !this.onPlay
    }
  },
  methods: {
    pauseAudio () {
      this.pause()
    },
    play () {
      this.onPlay = true
      this.$refs.audio.volume = 0.1
      // this.$refs.audio.load()
      this.$refs.audio.play()
    },
    pause () {
      this.onPlay = false
      this.$refs.audio.pause()
    },
    qr () {
      this.switchFlag = !this.switchFlag
    }
  }
}
</script>

<style>
.content {
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  margin: 10px auto;
  flex-wrap: wrap;
}
.qrcode {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}
div.on {
  display: block;
}
</style>