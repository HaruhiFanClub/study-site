<template>
  <a-layout class="app-page">
    <a-row>
      <a-layout-header>
        <a-col :xs="0" :sm="1" :md="1" :lg="2" :xl="2" :xxl="2"></a-col>
        <a-col :xs="24" :sm="22" :md="22" :lg="20" :xl="20" :xxl="20">
          <div class="page-header">
            <div class="logo">
              <h1>孵化计划</h1>
            </div>
            <div class="nav">
              <router-link to="/">首页</router-link>
              <router-link to="/study">学习</router-link>
              <router-link to="/projects">项目</router-link>
              <router-link to="/source">公共素材</router-link>
              <router-link to="/">孵化论坛</router-link>
              <router-link to="/my/index">我的</router-link>
            </div>
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
          </div>
        </a-col>
        <a-col :xs="1" :sm="1" :md="1" :lg="2" :xl="2" :xxl="2"></a-col>
      </a-layout-header>
      <a-layout-content class="main">
        <a-col :xs="0" :sm="0" :md="0" :lg="2" :xl="2" :xxl="2" class="temp"></a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="20" :xl="20" :xxl="20" class="page-content">
          <slot name="sider"></slot>
          <div class="page-main">
            <router-view />
          </div>
        </a-col>
        <a-col :xs="0" :sm="0" :md="0" :lg="2" :xl="2" :xxl="2" class="temp"></a-col>
      </a-layout-content>
    </a-row>
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
    ...mapActions(['handleLogout']),
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
$page-width: 100%;
.app-page {
  min-height: 100vh;
  margin: 0 auto;
  padding: 0;
  background-color: #f0f2f5;
  .ant-layout-header {
    height: $header-height;
    width: $page-width;
    margin: 0 auto;
    padding: 0;
    color: #a5acb3;
    background-color: #001529;
    h1,
    a {
      color: #a5acb3;
    }
    .page-header {
      height: $header-height;
      width: $page-width;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      vertical-align: top;
      .logo {
        cursor: default;
        height: $header-height;
        h1 {
          display: inline-block;
          height: $header-height;
          line-height: $header-height;
          margin: 0;
          font-size: 24px;
          font-weight: 700;
          color: #fff;
        }
      }
      .nav {
        display: inline-flex;
        height: $header-height;
        line-height: $header-height;
        transform: translateX(-200px);
        a {
          display: inline-block;
          text-align: center;
          font-size: 1rem;
          padding: 0 2rem;
        }
        @media (max-width: 1100px) {
          transform: translateX(-100px);
          a {
            padding: 0 1.5rem;
          }
        }
        @media (max-width: 991px) {
          transform: translateX(-100px);
        }
        @media (max-width: 900px) {
          transform: translateX(-70px);
          a {
            padding: 0 1rem;
          }
        }
        @media (max-width: 767px) {
          transform: translateX(0px);
        }
        @media (max-width: 660px) {
          a {
            padding: 0 0.7rem;
          }
        }
      }
      .user-info {
        position: relative;
        display: inline-flex;
        align-items: center;
        height: 100%;
        cursor: pointer;
        .user-name {
          font-size: 1rem;
        }
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
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
  }
  .main {
    width: $page-width;
    height: 100%;
    min-height: calc(100vh - 64px);
    margin: 0 auto;
    padding-top: 22px;
    // background-color: #f0f2f5;
    .page-content {
      display: flex;
      // width: 100%;
      margin: 0 auto;
      background-color: #fff;
      .page-main {
        flex: 1;
      }
    }
  }
}
</style>
