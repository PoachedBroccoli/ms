<template>
  <div class="chat-list-panel">
    <div class="search">
      <div class="input">
        <input type="text" placeholder="Coming soon" />
      </div>
    </div>
    <div class="list">
      <div class="chat-item">
        <div class="">
          <span>{{ room }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ChatGroupListPanel',
  computed: {
    ...mapState('chat', { room: 'room', userList: 'userList' })
  },
}
</script>

<style>
.chat-list-panel {
  width: 230px;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}
.chat-list-panel .search {
  height: 60px;
  padding: 15px;
}
.chat-list-panel .search .input input {
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #e3e6e9;
  outline: none;
  font-size: 18px;
  padding-left: 5px;
}
.chat-list-panel .list {
  height: calc(100%-60px);
  overflow: auto;
}
.chat-list-panel .list .chat-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
}

</style>