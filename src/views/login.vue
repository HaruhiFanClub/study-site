<template>
  <div class="login-page">
    <vue-particles></vue-particles>
    <div class="login-form">
      <div class="title">凉宫春日孵化计划</div>
      <div class="subtitle">共同孵化凉宫圈与应援团的未来</div>
      <a-form :form="form" @submit="handleSubmit" layout="vertical" class="form">
        <a-form-item>
          <a-input v-decorator="decorator.username" placeholder="邮箱/QQ" />
        </a-form-item>
        <a-form-item>
          <a-input-password v-decorator="decorator.password" placeholder="密码" />
        </a-form-item>
        <a-form-item>
          <a-checkbox v-decorator="decorator.remember">记住密码</a-checkbox>
        </a-form-item>
        <a-form-item>
          <a-button :loading="loading" type="primary" html-type="submit" block>登录</a-button>
        </a-form-item>
        <div style="text-align: right;">
          <a href="#">注册账户</a>
        </div>
      </a-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

const formDecorators = {
  username: [
    'username',
    {
      rules: [
        { required: true, message: '请输入邮箱/QQ' }
      ]
    }
  ],
  password: [
    'password',
    {
      rules: [
        { required: true, message: '请输入密码' },
        { min: 6, message: '密码长度为6-13位' },
        { max: 13, message: '密码长度为6-13位' }
      ]
    }
  ],
  remember: [
    'remember',
    { valuePropName: 'checked', initialValue: true }
  ]
}
export default {
  name: 'login',
  data () {
    return {
      form: this.$form.createForm(this, { name: 'login-form' }),
      decorator: formDecorators,
      loading: false
    }
  },
  methods: {
    ...mapActions([
      'handleLogin'
    ]),
    validateForm () {
      let formValue = null
      this.form.validateFields((err, val) => {
        if (!err) formValue = val
      })
      return formValue
    },
    async handleSubmit (e) {
      e.preventDefault()
      const formValue = this.validateForm()
      if (!formValue) return false
      this.loading = true
      try {
        await this.handleLogin(formValue)
        this.loading = false
        this.$router.push({ name: this.$config.homeName })
      } catch (err) {
        this.loading = false
        console.log(`err: ${err}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/images/login-bg.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  .login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 390px;
    height: auto;
    padding: 20px 10px;
    background-color: rgba(241, 242, 246, 0.8);
    border-radius: 5px;
    transform: translate(-50%, -60%);
    .title {
      font-size: 26px;
      line-height: 28px;
      font-weight: 650;
    }
    .subtitle {
      margin: 20px 0;
      font-size: 14px;
      line-height: 22px;
      font-weight: 400;
    }
    .form {
      width: 100%;
    }
  }
}
</style>
