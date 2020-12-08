<template>
  <div class="item">
    <header
      class="item-header"
      :class="{ ff: !musicImg[index] }"
      :style="{
        background:
          ' url(' + (musicImg[index] && musicImg[index].artworkUrl100) + ')',
      }"
    >
      <div class="bb">
        <div class="dd"></div>
      </div>
    </header>

    <div class="item-info-group">
      <span class="song">{{ music.song }}</span>
    </div>
    <div class="item-info-group">
      <span class="rank">{{ music.rank }}</span>
      <span class="vertical-line">|</span>
      <span :class="music.subtract | addClass">{{ music.subtract }}</span>
    </div>
    <div class="item-info-group" :class="{ current: getCurrent }">
      <div class="p">
        <span>
          <i class="far fa-play-circle" @click="playAudio(music)"></i>
        </span>
        <span>
          <i class="far fa-pause-circle" @click="pauseAudio()"></i>
        </span>
      </div>
      <span class="l" @click="link(music)">
        <i class="fas fa-link"></i>
      </span>
      <span class="q" @click="qrcode(music)">
        <i class="fas fa-qrcode"></i>
      </span>
      <span class="y" @click="yt(music)">
        <i class="fab fa-youtube"></i>
      </span>
    </div>
    <div class="item-info-button">
      <button @click="chat(music)">chat</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Item',
  props: ['music', 'musicImg', 'index'],
  components: {
  },
  data () {
    return {
      rank: []
    }
  },
  filters: {
    addClass (rank) {
      if (rank.startsWith('-')) {
        return 'trend-down'
      } else if (rank.startsWith('+')) {
        return 'trend-up'
      } else if (rank.startsWith('New')) {
        return 'trend-new'
      }
    },
  },
  computed: {
    ...mapState('audio', {
      currentPlay: 'currentPlay',
      collectionViewUrl: 'collectionViewUrl'
    }),
    ...mapState('auth', { name: 'name' }),
    ...mapGetters('auth', { isSignin: 'isSignin' }),

    getCurrent () {
      return this.currentPlay == this.rank
    }
  },
  methods: {
    ...mapActions('audio', { a_play: 'a_play', a_link: 'a_link', a_qrcode: 'a_qrcode' }),
    ...mapActions('yt', { a_yt: 'a_yt' }),

    async playAudio ({ rank, songartist }) {
      this.rank = rank
      if (this.currentPlay == rank) {
        this.$emit('play')
        return
      }
      this.a_play({ rank, songartist })
        .then(() => {
          this.$emit('play')
        })
    },
    pauseAudio () {
      this.$emit('pause')
    },
    link ({ songartist }) {
      this.a_link({ songartist })
        .then(() => {
          window.open(this.collectionViewUrl, '_blank')
        })
    },
    qrcode ({ songartist }) {
      this.a_qrcode({ songartist })
        .then(() => {
          this.$emit('qr')
        })
    },
    yt ({ songartist }) {
      this.a_yt({ songartist })
    },
    chat ({ song }) {
      if (this.isSignin) {
        this.$store.commit('chat/m_room', song)
        this.$router.push({ path: '/chat' })
      } else {
        this.$router.push({ path: '/auth', query: { k: song } })
      }
    }
  }
}
</script>

<style>
.item {
  width: 220px;
  margin-bottom: 20px;
}
.item:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 4px #999;
  transition: all 0.5s ease-out;
}
.item-header {
  width: 100%;
  height: 200px;
}
.ff .bb {
  width: 100%;
  height: 100%;
  background: url('~@/assets/img/404.jpg') no-repeat center / 150%;
}
.ff .bb .dd {
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
.item-info-group .song {
  font-weight: 700;
}
.item-info-group .vertical-line {
  padding: 0 8px;
}
.item-info-group .p,
.item-info-group .l,
.item-info-group .q,
.item-info-group .y,
.item-info-button button {
  cursor: pointer;
}
.item-info-group .p:hover,
.item-info-group .l:hover,
.item-info-group .q:hover,
.item-info-group .y:hover {
  color: #fe3580;
}
.item-info-group .p {
  position: relative;
  top: 4px;
  display: inline-block;
  width: 30px;
  height: 20px;
}
.item-info-group .p span {
  position: absolute;
}
.item-info-group .p span:nth-child(2) {
  display: none;
}
.play .current .p span:nth-child(1) {
  display: none;
}
.play .current .p span:nth-child(2) {
  color: #fe3580;
  display: inline-block;
}
.item-info-group .l {
  padding: 0 4px 0 8px;
}
.item-info-group .q {
  padding: 0 8px 0 4px;
}
.item-info-button {
  margin: 5px 0;
}
.item-info-button button {
  padding: 3px 5px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  color: #fff;
  background: #2c3f4f;
  opacity: 0.7;
}
.item-info-button button:hover {
  background: #fe3580;
}
.trend-up {
  color: #4fdcb1;
}
.trend-down {
  color: #fe3580;
}
.trend-new {
  color: #ffaa36;
}
</style>