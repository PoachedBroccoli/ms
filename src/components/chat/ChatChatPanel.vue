<template>
  <div class="chat-chat-panel">
    <ChatChatPanelHeader />
    <ChatChatPanelMessage />
    <ChatChatPanelInput />
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import { ChatChatPanelHeader, ChatChatPanelMessage, ChatChatPanelInput } from '@/components/index'
import ChatChatPanelHeader from '@/components/chat/ChatChatPanelHeader'
import ChatChatPanelMessage from '@/components/chat/ChatChatPanelMessage'
import ChatChatPanelInput from '@/components/chat/ChatChatPanelInput'

export default {
  name: 'ChatChatPanel',
  components: {
    ChatChatPanelHeader,
    ChatChatPanelMessage,
    ChatChatPanelInput
  },
  computed: {
    ...mapState('chat', { room: 'room' })
  },
}
</script>

<style>
.chat-chat-panel {
  position: relative;
  width: 100%;
  height: 100%;
}
.chat-chat-panel .chat-header {
  height: 60px;
  line-height: 60px;
  font-size: 22px;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
}
</style>