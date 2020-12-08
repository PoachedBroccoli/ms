<template>
  <div class="chat-left-panel">
    <div class="info">
      <div class="avatar">
        <img src="https://source.unsplash.com/1600x900/?cartoons" />
      </div>
      <div class="name">{{ nickname }}</div>
      <div class="index" @click="home"><i class="fas fa-home"></i></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ChatInfoPanel',
  computed: {
    ...mapState('auth', { nickname: 'nickname' })
  },
  methods: {
    ...mapActions('chat', { a_close: 'a_close' }),

    home () {
      this.a_close()
      this.$router.push('/')
    }
  }
}
</script>

<style>
.chat-left-panel {
  width: 74px;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
}
.chat-left-panel .info {
  position: relative;
  padding: 10px 5px;
  height: 100%;
}
.chat-left-panel .info .avatar {
  width: 55px;
  height: 55px;
  margin: 0 auto;
}
.chat-left-panel .info .avatar img {
  width: 100%;
  height: 100%;
}
.chat-left-panel .info .name {
  color: #fff;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 3px 0 0 0;
}
.chat-left-panel .info .index {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  color: #fff;
  cursor: pointer;
}
</style>