<template>
  <Main>
    <template v-slot:sider>
      <a-menu
        mode="inline"
        :default-selected-keys="[selectedPageName]"
        :style="{ width: '200px', borderRight: 0 }"
        class="side-menu"
      >
        <a-menu-item v-for="item in menuList" :key="item.name">
          <router-link :to="item.path">
            <a-icon v-if="item.icon" :type="item.icon" />
            <span>{{ item.title }}</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </template>
  </Main>
</template>

<script>
import Main from './Main'
export default {
  name: 'MyView',
  components: { Main },
  data () {
    return {
      menuList: [],
      selectedPageName: this.$route.name
    }
  },
  created () {
    const routes = this.$router.options.routes.find(item => item.name === 'My').children
    this.menuList = routes.map(item => {
      return {
        title: item.meta.title,
        path: `/my/${item.path}`,
        name: item.name,
        icon: item.meta.icon
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.side-menu {
  min-height: 850px;
  padding-top: 5px;
  .ant-menu-item {
    &:first-child {
      margin-top: 0;
    }
  }
  a {
    display: flex;
    align-items: center;
  }
}
</style>
