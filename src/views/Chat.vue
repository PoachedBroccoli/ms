<template>
  <div class="chat" :class="{ 'show-tip': flag }">
    <div class="tip">
      <span>{{ ee }} {{ doing }} {{ room }}</span>
    </div>
    <div class="chat-panel">
      <ChatInfoPanel />
      <ChatGroupListPanel />
      <ChatChatPanel />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { ChatInfoPanel, ChatGroupListPanel, ChatChatPanel } from '@/components/index'
import { init } from '@/service/websocket.js'

export default {
  name: 'Chat',
  components: {
    'ChatInfoPanel': ChatInfoPanel,
    'ChatGroupListPanel': ChatGroupListPanel,
    'ChatChatPanel': ChatChatPanel
  },
  computed: {
    ...mapState('chat', { room: 'room', flag: 'flag', ee: 'ee', doing: 'doing' })
  },
  created () {
    console.log('出发了！！！！！！')
    // init('ws://127.0.0.1:8080/ws')
    init('ws://www.pipiic.com:8080/ws')
    window.addEventListener('onmessage', this.a_data)
  },
  mounted () {

  },
  methods: {
    ...mapActions('chat', { a_data: 'a_data' }),

  },
  beforeDestroy () {
    window.removeEventListener('onmessage', this.a_data)
  }
}
</script>

<style>
.chat {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(https://source.unsplash.com/QftcBQYxVNM);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  background-color: #fff;
  overflow: hidden;
  z-index: -2;
}
.show-tip .tip {
  top: 20px;
  opacity: 1;
}
.tip {
  position: absolute;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: all 0.4s;
}
.tip span {
  padding: 2px 5px;
  background: #fff;
  border-radius: 3px;
}
.chat-panel {
  position: relative;
  display: flex;
  /* max-width: 1000px;
  min-width: 300px;
  width: 100%; */
  max-width: 1000px;
  height: 80%;
  margin: 60px auto 0;
  border-radius: 5px;
  background-image: url(https://source.unsplash.com/QftcBQYxVNM);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
  z-index: 1;
}
.chat-panel:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: -30px;
  background-color: rgba(255, 255, 255, 0.4);
  background-image: url(https://source.unsplash.com/QftcBQYxVNM);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  filter: blur(8px);
  z-index: -1;
}
</style>