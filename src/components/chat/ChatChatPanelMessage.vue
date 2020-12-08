<template>
  <div class="chat-content" ref="chatBox">
    <div
      class="chat-item"
      v-for="(data, i) in chatData"
      :key="i"
      :class="{ self: data.user == nickname }"
    >
      <div class="nick-name">
        <span>{{ data.user }}</span>
        <span>{{ data.time_stamp }}</span>
      </div>
      <div class="message">{{ data.content }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ChatChatPanelMessage',
  mounted () {
    setTimeout(() => {
      this.setScrollTop()
    }, 1000)
  },
  computed: {
    ...mapState('chat', { chatData: 'chatData' }),
    ...mapState('auth', { nickname: 'nickname' })
  },
  methods: {
    setScrollTop () {
      this.$refs.chatBox.scrollTop = this.$refs.chatBox.scrollHeight
    }
  },
  updated () {
    this.$nextTick(() => {
      this.setScrollTop()
    })
  }
}
</script>

<style>
.chat-content {
  height: calc(100% - 105px);
  margin: 5px 0 0 5px;
  overflow-y: auto;
}
::-webkit-scrollbar {
  display: block !important;
}

.chat-content .chat-item {
  margin: 12px 15px;
  color: #fff;
  text-align: left;
  overflow: hidden;
}
.chat-content .self {
  text-align: right;
}
.chat-content .chat-item span:first-child {
  font-size: 20px;
  padding-right: 5px;
}
.chat-content .chat-item span:last-child {
  font-size: 12px;
  opacity: 0.7;
}
.chat-content .chat-item .message {
  max-width: 55%;
  padding: 5px 10px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.5);
  word-break: break-all;
  white-space: pre-wrap;
  float: left;
}
.chat-content .self .message {
  float: right;
  text-align: left;
}
</style>