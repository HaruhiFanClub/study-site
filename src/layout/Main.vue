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
        <router-link to="/my/index">我的</router-link>
      </nav>
      <div v-if="userName" class="user-info">
        <a-avatar class="avatar" :size="32">{{ userName.substr(0, 1) }}</a-avatar>
        <span class="user-name">{{ userName }}</span>
        <div class="action-menu-list">
          <div class="action-menu" @click="logout">退出登录</div>
        </div>
      </div>
      <div v-else class="user-info" @click="navToLogin">
        <span class="user-name">请登录</span>
      </div>
    </a-layout-header>
    <a-layout-content class="main">
      <div class="page-content">
        <slot name="sider"></slot>
        <router-view/>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'MainView',
  data () {
    return {}
  },
  computed: {
    userName () {
      return this.$store.state.user.userName
    }
  },
  methods: {
    ...mapActions([
      'handleLogout'
    ]),
    navToLogin () {
      this.$router.push({ name: 'login' })
    },
    async logout () {
      await this.handleLogout()
      location.reload()
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
      position: relative;
      display: flex;
      align-items: center;
      height: 100%;
      cursor: pointer;
      .avatar {
        margin-right: 10px;
      }
      .action-menu-list {
        position: absolute;
        top: 60px;
        opacity: 0;
        height: 0;
        width: 150px;
        overflow: hidden;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        transition: opacity 0.5s;
        .action-menu {
          height: 50px;
          line-height: 50px;
          padding-left: 10px;
          border-bottom: 1px solid #eaeaea;
          &:hover {
            background-color: #f0f2f5;
          }
        }
      }
      &:hover {
        .action-menu-list {
          height: auto;
          opacity: 1;
        }
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
      display: flex;
      width: 1155px;
      margin: 0 auto;
      background-color: #fff;
    }
  }
}
</style>
