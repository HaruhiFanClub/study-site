<template>
  <div class="register-page">
    <vue-particles></vue-particles>
    <div class="register-form">
      <div class="title">凉宫春日孵化计划</div>
      <div class="subtitle">共同孵化凉宫圈与应援团的未来</div>
      <a-form-model ref="register-form" :model="form" :rules="formRules" layout="vertical" class="form">
        <a-form-item>
          <span style="font-size: 16px;">注册</span>
        </a-form-item>
        <a-form-model-item prop="email" has-feedback>
          <a-input v-model="form.email" placeholder="邮箱" />
        </a-form-model-item>
        <a-form-model-item prop="password" has-feedback>
          <a-input-password v-model="form.password" placeholder="6-16位密码，区分大小写" />
        </a-form-model-item>
        <a-form-model-item prop="passwordAgain" has-feedback>
          <a-input-password v-model="form.passwordAgain" placeholder="确认密码" />
        </a-form-model-item>
        <a-form-model-item prop="qq" has-feedback>
          <a-input v-model.number="form.qq" placeholder="输入QQ号" />
        </a-form-model-item>
        <div class="form-action">
          <a-button class="submit-btn" :loading="loading" type="primary" @click="onSubmit">注册</a-button>
          <router-link to="/login">使用已有账号登录</router-link>
        </div>
      </a-form-model>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    const passwordRule = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (value.length > 16 || value.length < 6) {
        callback(new Error('密码长度为6-16位'))
      } else {
        if (this.form.passwordAgain !== '') {
          this.$refs['register-form'].validateField('passwordAgain')
        }
        callback()
      }
    }
    const passwordAgainRule = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.password) {
        callback(new Error('两次密码输入不一致！'))
      } else {
        callback()
      }
    }
    return {
      form: {
        email: '',
        password: '',
        passwordAgain: '',
        qq: ''
      },
      formRules: {
        email: [
          { required: true, message: '请输入邮箱' },
          { type: 'email', message: '请输入正确的邮箱' }
        ],
        password: [
          { validator: passwordRule, trigger: 'change' }
        ],
        passwordAgain: [
          { validator: passwordAgainRule, trigger: 'change' }
        ],
        qq: [
          { type: 'number', message: '请输入正确的QQ号码' }
        ]
      },
      loading: false
    }
  },
  methods: {
    ...mapActions([
      'handleRegist'
    ]),
    async onSubmit () {
      let checkPass = false
      this.$refs['register-form'].validate(valid => {
        if (valid) checkPass = true
      })
      console.log(`验证结果：${checkPass}`)
      if (!checkPass) return false
      this.loading = true
      try {
        await this.handleRegist(this.form)
        this.loading = false
        this.$router.push({ name: 'login' })
      } catch (err) {
        this.loading = false
        console.log(`err: ${err}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.register-page {
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/images/login-bg.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  .register-form {
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
      .form-action {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .submit-btn {
          width: 175px;
        }
      }
    }
  }
}
</style>
