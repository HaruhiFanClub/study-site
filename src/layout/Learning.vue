<template>
  <a-layout class="learning-page">
    <a-row style="width:100%">
      <a-col :xs="0" :sm="0" :md="0" :lg="0" :xl="0" :xxl="3"></a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" :xxl="18" class="page-main">
        <a-layout-sider width="200" collapsible>
          <slot name="menu"></slot>
        </a-layout-sider>
        <a-layout>
          <a-layout-header>
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
          <section style="margin:24px">
            <slot name="level"></slot>
            <!-- <a-breadcrumb>
              <a-breadcrumb-item><router-link to="/">首页</router-link></a-breadcrumb-item>
              <a-breadcrumb-item><router-link to="/learning"></router-link></a-breadcrumb-item>
            </a-breadcrumb> -->
          </section>
          <a-layout-content>
            <router-view />
          </a-layout-content>
          <a-layout-footer>©2020 Created by HaruhiFanClub</a-layout-footer>
        </a-layout>
      </a-col>
      <a-col :xs="0" :sm="0" :md="0" :lg="0" :xl="0" :xxl="3"></a-col>
    </a-row>
  </a-layout>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'learning',
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
$page-background: #ffffff;
.learning-page {
  display: flex;
  margin: 0 auto;
  padding: 0;
  background-color: $page-background;
  .page-main {
    display: flex;
    .ant-layout-sider{
    }
    .ant-layout{
      .ant-layout-header {
        height: $header-height;
        margin: 0;
        padding: 0 20px;
        background-color: $page-background;
        display: flex;
        justify-content: flex-end;
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
  }
}
</style>
