<template>
  <span class="auth-form-button">
    <input type="button" />
    <span class="in">Sign in</span>
    <span class="up">Sign up</span>
  </span>
</template>

<script>
export default {
  name: 'AuthFormButton'
}
</script>

<style>
.auth-form-button {
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
}
.auth-form-button > input {
  flex: 1;
  height: 40px;
  background-color: #6a89cc;
  border: none;
  border-radius: 5px;
}
.auth-form-button > span {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 40px;
  font-weight: 600;
  color: #fff;
  transition: all 0.3s;
}

.up {
  transform: translateY(-100%) scale(0.1);
}
.signup .in {
  transform: translateY(-100%) scale(0.1);
}
.signup .up {
  transform: translateY(0%);
}
</style>