<template>
  <div class="chat-user-list-panel">
    <span>Online:&nbsp;{{ count }}</span>
    <ul>
      <li v-for="(user, i) in userList" :key="i">{{ user }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'ChatUserListPanel',
  computed: {
    ...mapState('chat', { userList: 'userList' }),
    ...mapGetters('chat', { count: 'count' })
  },
}
</script>

<style>
.chat-user-list-panel {
  position: absolute;
  top: 0;
  right: -250px;
  width: 250px;
  height: 100%;
  color: #fff;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  transition: all 0.5s;
}
.chat-user-list-panel ul li {
  color: #fff;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: left;
  padding-left: 15px;
  font-size: 16px;
}
.show .chat-user-list-panel {
  right: 0;
}
ul {
  list-style: none;
}
</style>