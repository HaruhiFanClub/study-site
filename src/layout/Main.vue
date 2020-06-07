<template>
  <a-layout class="app-page">
    <a-layout-header>
      <div class="logo">
        <h1>孵化计划</h1>
      </div>
      <nav class="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/study">学习</router-link>
        <router-link to="/projects">项目</router-link>
        <router-link to="/">公共素材</router-link>
        <router-link to="/">孵化论坛</router-link>
        <router-link to="/">我的</router-link>
      </nav>
      <div v-if="userName" class="user-info">
        <a-avatar class="avatar" :size="32" icon="user" :src="avatar" />
        <span class="user-name">{{ userName }}</span>
      </div>
      <div v-else class="user-info" @click="navToLogin">
        <span class="user-name">请登录</span>
      </div>
    </a-layout-header>
    <a-layout-content class="main">
      <div class="page-content">
        <router-view/>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
export default {
  name: 'MainView',
  data () {
    return {}
  },
  computed: {
    avatar () {
      return this.$store.state.user.avatorImgPath
    },
    userName () {
      return this.$store.state.user.userName
    }
  },
  methods: {
    navToLogin () {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style lang="scss" scoped>
$header-height: 64px;
$page-width: 1440px;
.app-page {
  min-height: 100vh;
  margin: 0 auto;
  padding: 0;
  background-color: #fff;
  .ant-layout-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: $header-height;
    width: $page-width;
    margin: 0 auto;
    padding: 0 145px;
    color: #a5acb3;
    background-color: #001529;
    h1,a {
      color: #a5acb3;
    }
    .logo {
      cursor: default;
      h1 {
        margin: 0;
        line-height: $header-height;
        font-size: 24px;
        font-weight: 700;
        color: #fff;
      }
    }
    .nav {
      display: flex;
      height: 100%;
      align-items: center;
      transform: translateX(-100px);
      a {
        display: inline-block;
        padding: 0 32px;
      }
    }
    .user-info {
      display: flex;
      align-items: center;
      height: 100%;
      cursor: pointer;
      .avatar {
        margin-right: 10px;
      }
    }
  }
  .main {
    width: $page-width;
    height: auto;
    min-height: calc(100vh - 64px);
    margin: 0 auto;
    padding-top: 22px;
    background-color: #f0f2f5;
    .page-content {
      width: 1155px;
      margin: 0 auto;
      background-color: #fff;
    }
  }
}
</style>
