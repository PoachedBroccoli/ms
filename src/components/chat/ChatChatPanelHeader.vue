<template>
  <header
    class="chat-header"
    :class="{ show: isShow }"
    @click="isShow = !isShow"
  >
    <span>{{ room }}</span>
    <span @click.stop="isShow = !isShow" class="userlist-icon">
      <i class="fas fa-users"></i>
    </span>
    <ChatUserListPanel />
  </header>
</template>

<script>
import { mapState } from 'vuex'
import ChatUserListPanel from '@/components/chat/ChatUserListPanel'

export default {
  name: 'ChatChatPanelHeader',
  components: {
    ChatUserListPanel
  },
  data () {
    return {
      isShow: false
    }
  },
  computed: {
    ...mapState('chat', { room: 'room' }),
  },
  methods: {
    show () {

    }
  }
}
</script>

<style>
.chat-chat-panel .chat-header {
  height: 60px;
  line-height: 60px;
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
}
.chat-chat-panel .userlist-icon {
  position: absolute;
  right: 20px;
}
</style>