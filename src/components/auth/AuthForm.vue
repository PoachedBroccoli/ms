<template>
  <form class="auth-form">
    <!-- nickname1 -->
    <div class="form-group form-group-nickname">
      <AuthFormItem
        :state="status"
        icon="fa fa-user"
        placeholder="nickname"
        fieldName="nickname"
        v-model="nickname"
      />
    </div>

    <div class="err">
      <span>{{ nameErr }}</span>
    </div>

    <!-- number2 -->
    <div class="form-group form-group-number">
      <AuthFormItem
        :state="status"
        icon="fas fa-lock"
        placeholder="number"
        fieldName="number"
        v-model="number"
      />
    </div>

    <div class="err">
      <span>{{ numberErr }}</span>
    </div>

    <div class="form-group-button">
      <AuthFormButton @click.native="EnterChat" />
    </div>

    <transition name="error-msg">
      <div class="btn err" v-if="formErr">
        <span>{{ errInfo }}</span>
      </div>
    </transition>
  </form>
</template>

<script>
// import { AuthFormItem, AuthFormButton } from '@/components/index'
import { mapActions } from 'vuex'
import { validator } from '@/plugin/validator'
import AuthFormItem from '@/components/auth/AuthFormItem'
import AuthFormButton from '@/components/auth/AuthFormButton'


export default {
  name: 'AuthForm',
  props: {
    status: Boolean,
  },
  components: {
    AuthFormItem,
    AuthFormButton,
  },
  data () {
    return {
      nickname: '',
      number: '',
      formErr: false,
      errInfo: '',
      duplicateErr: false,
      preventDuplicate: true,
      nameErr: '',
      numberErr: '',
      room: this.$route.query.k
    }
  },
  computed: {
    formdata () {
      const { status, nickname, number, room } = this
      return { status, nickname, number, room }
    },
    validation () {
      return {
        nickname: !!this.nickname.trim() && !this.nameErr,
        number: !!this.number.trim() && !this.numberErr,
      }
    },
    isValid () {
      let validation = this.validation
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    },
  },
  watch: {
    state () {
      Object.assign(this.$data, this.$options.data())
    },
    nickname () {
      this.nameErr = validator('nickname', this.nickname.trim())
    },
    number () {
      this.numberErr = validator('number', this.number.trim())
    }
  },
  methods: {
    ...mapActions('auth', { a_enter: 'a_enter' }),

    EnterChat () {
      if (this.preventDuplicate) {
        if (this.isValid) {
          this.preventDuplicate = !this.preventDuplicate
          this.a_enter(this.formdata).then(status => {
            this.preventDuplicate = !this.preventDuplicate
            if (status === 200) {
              this.$router.push('/chat')
            } else if (status === 401) {
              this.formErr = true
              this.errInfo = 'user does not exist'
              setTimeout(() => { this.formErr = false }, 2500)
            } else if (status === 402) {
              this.formErr = true
              this.errInfo = 'user already exists'
              setTimeout(() => { this.formErr = false }, 2500)
            }
          })
        } else {
          this.preventDuplicate = !this.preventDuplicate
          this.formErr = true
          this.errInfo = 'Please check the form'
          setTimeout(() => {
            this.formErr = false
            this.preventDuplicate = !this.preventDuplicate
          }, 2000)
        }
      }

    }
  }
}
</script>

<style>
.error-msg-enter-active {
  transition: all 0.5s;
}
.error-msg-enter {
  opacity: 0;
  transform: translate(10%, 10%);
}
.error-msg-leave-active {
  transition: all 0.5s;
}
.error-msg-leave-to {
  opacity: 0;
  transform: translate(-10%, -10%);
}

.auth-form {
  margin-top: 15px;
  padding: 10px;
}

.form-group {
  /* margin-bottom: 30px; */
}

.err {
  width: 100%;
  height: 20px;
  margin: 3px auto 10px;
  color: #fe3580;
  text-align: left;
  padding-left: 30px;
}
.form-group-button {
  margin: 20px auto 0;
}
.btn {
  text-align: center;
}
</style>