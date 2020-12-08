<template>
  <div class="banner">
    <div class="wrapper">
      <div
        v-for="(music, i) in modifiedCarousel"
        :key="i"
        :class="music.className"
        :style="music.sty"
        @mouseenter="stopTimer"
        @mouseleave="startTimer"
        @click="changeSlide(music.id)"
      >
        <div
          class="img"
          :style="{ backgroundImage: 'url(' + music.artworkUrl100 + ')' }"
        ></div>
        <div class="mark"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Banner',
  props: {
    initial: {
      type: Number,
      default: 0
    },
    interval: {
      type: Number,
      default: 3000
    }
  },
  data () {
    return {
      modifiedCarousel: [],
      currentInitial: 0,
      timer: null
    }
  },
  created () {
    this.init()
  },
  computed: {
    ...mapState('music', {
      carousel: 'carousel'
    })
  },
  methods: {
    init () {
      let source = this.carousel.slice(0)
      let diff = source.length - 5
      if (diff < 0) {
        diff = Math.abs(diff)
        let diffArr = source.slice(0, diff)
        source = [...source, ...diffArr]
      }
      source.forEach((item, index) => {
        item.id = index + 1
      })
      source = this.computed(this.initial, source)
      this.modifiedCarousel = source
      this.currentInitial = this.initial

      setTimeout(() => {
        this.autoPlay()
      }, 3000)
    },
    stopTimer () {
      clearInterval(this.timer)
    },
    startTimer () {
      this.autoPlay()
    },
    changeSlide (id) {
      this.currentInitial = id - 1
      this.modifiedCarousel = this.computed(id - 1, this.modifiedCarousel)
    },
    autoPlay () {
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.timer = null
      let autoTimer = null
      const autoPlay = () => {
        autoTimer = setInterval(() => {
          this.currentInitial++
          if (this.currentInitial >= this.modifiedCarousel.length) {
            this.currentInitial = 0
          }
          this.modifiedCarousel = this.computed(this.currentInitial, this.modifiedCarousel)
        }, this.interval)
      }
      autoPlay()
      this.timer = autoTimer
    },
    computed (initial, source) {
      let len = source.length
      let temp1 = initial - 2
      let temp2 = initial - 1
      let temp3 = initial
      let temp4 = initial + 1
      let temp5 = initial + 2
      temp1 < 0 ? (temp1 = len + temp1) : null
      temp2 < 0 ? (temp2 = len + temp2) : null
      temp3 = temp3 < 0 ? 0 : (temp3 >= len) ? len - 1 : temp3
      temp4 >= len ? (temp4 = temp4 - len) : null
      temp5 >= len ? (temp5 = temp5 - len) : null

      return source.map((item, index) => {
        let transform = `translate(-50%,-50%) scale(0.45)`
        let zIndex = 0
        let className = 'slide'
        switch (index) {
          case temp3:
            transform = `translate(-50%,-50%) scale(1)`
            zIndex = 3
            className = 'slide active'
            break
          case temp1:
            transform = `translate(-150%,-50%) scale(0.7)`
            zIndex = 1
            className = 'slide'
            break
          case temp2:
            transform = `translate(-100%,-50%) scale(0.85)`
            zIndex = 2
            className = 'slide'
            break
          case temp4:
            transform = `translate(0%,-50%) scale(0.85)`
            zIndex = 2
            className = 'slide'
            break
          case temp5:
            transform = `translate(50%,-50%) scale(0.7)`
            zIndex = 1
            className = 'slide'
            break
        }
        item.sty = {
          transform,
          zIndex
        }
        item.className = className
        return item
      })
    }
  }
}
</script>

<style>
.banner {
  position: relative;
  width: 100%;
  height: 380px;
  margin: 5px 0 10px;
}
.banner > .wrapper {
  width: 80%;
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.wrapper > .slide {
  width: 45%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  /* border: 3px solid #000; */
  /* overflow: hidden; */
  transition: all 0.8s;
}
.wrapper > .slide.active .mark {
  background-color: rgba(0, 0, 0, 0);
}
.wrapper > .slide:hover .mark {
  background-color: rgba(0, 0, 0, 0);
}
.wrapper > .slide > .img {
  /* width: 300px;
  height: 300px; */
  width: 100%;
  height: 100%;
  position: absolute;
  background-position: center;
}
.wrapper > .slide > .mark {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.75);
  transition: all 0.3s;
}
</style>