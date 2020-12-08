<template>
  <div
    class="auth-form-item input"
    :placeholder="placeholder"
    @click="isActive = true"
    :class="{ active: isActive }"
  >
    <i v-if="icon" :class="[icon]"></i>
    <input
      type="text"
      :name="fieldName"
      :id="fieldName"
      v-model.trim="fieldV"
      @blur="handleFormData"
    />
  </div>
</template>

<script>

export default {
  name: 'AuthFormItem',
  props: {
    state: Boolean,
    placeholder: String,
    icon: String,
    fieldName: String,
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  data () {
    return {
      fieldV: '',
      isActive: false,
    }
  },
  watch: {
    state () {
      this.fieldV = ''
    }
  },
  methods: {
    handleFormData () {
      if (!this.fieldV) {
        this.isActive = false
      }
      this.$emit('change', this.fieldV)
    }
  }
}
</script>

<style>
.auth-form-item {
  position: relative;
  display: flex;
  width: 100%;
  border-radius: 3px;
  font-size: 14px;
  flex-wrap: wrap;
}
.auth-form-item > i {
  position: absolute;
  top: 26%;
  left: 3%;
}
.auth-form-item > input {
  width: 100%;
  height: 30px;
  padding-left: 35px;
  border: 1px solid #e4e6e9;
  outline: none;
  border-radius: 5px;
  font-size: 15px;
}
.input::after {
  content: attr(placeholder);
  position: absolute;
  left: 38px;
  top: 4px;
  font-size: 16px;
  opacity: 0.5;
  transition: all 0.3s;
}
.active.input::after {
  height: 15px;
  top: -10px;
  left: 30px;
  font-size: 14px;
  background: #fff;
}
</style>