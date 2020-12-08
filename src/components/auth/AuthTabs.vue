<template>
  <div class="auth-tabs">
    <span>Sign in</span>
    <span>Sign up</span>
  </div>
</template>

<script>
export default {
  name: 'AuthTabs',
}
</script>

<style >
.auth-tabs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 0;
  font-weight: 800;
  font-size: 18px;
}
.auth-tabs > span {
  transition: all 0.5s ease;
}
.auth-tabs > span:first-child,
.auth-tabs > span:last-child {
  padding: 0 5px;
  border: 1px solid #000;
  border-radius: 6px;
  cursor: pointer;
}
.signin > .auth-tabs > span:first-child {
  transform: translateX(310%) scale(1.2);
  border-color: transparent;
}
.signin > .auth-tabs > span:last-child {
  transform: translateX(-120%) scale(0.5);
  opacity: 0.5;
}

.signup > .auth-tabs > span:first-child {
  transform: translateX(120%) scale(0.5);
  opacity: 0.5;
}
.signup > .auth-tabs > span:last-child {
  transform: translateX(-280%) scale(1.2);
  border-color: transparent;
}
</style>
