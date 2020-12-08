<template>
  <div class="chat-chat-panel-input">
    <input type="text" v-model.trim="msg" />
    <span @click="push">
      <i class="far fa-paper-plane"></i>
    </span>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import dayjs from 'dayjs'

export default {
  name: 'ChatChatPanelInput',
  computed: {
    ...mapState('chat', { room: 'room' })
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    ...mapActions('chat', { a_push: 'a_push' }),

    push () {
      this.reg()
      if (this.msg) {
        this.a_push({ 'content': this.msg, 'type': 'chat', 'time_stamp': dayjs().format('HH:mm:ss') })
        this.msg = ''
      }
    },
    reg () {
      let reg = /<[^>]+>/gim
      this.msg = this.msg.replace(reg, "")
    }
  }
}
</script>

<style>
.chat-chat-panel-input {
  position: relative;
  /* width: 100%; */
  height: 40px;
}
.chat-chat-panel-input input {
  width: 100%;
  height: 100%;
  padding: 0 45px 0 5px;
  outline: none;
  font-size: 14px;
}
.chat-chat-panel-input > span {
  position: absolute;
  right: 0px;
}
.chat-chat-panel-input > span > i {
  font-size: 40px;
  /* background: linear-gradient(to right, #ffc371, #ff5f6d); */
  color: rgba(0, 0, 0, 0.6);
}
</style>