<template>
  <Learning>
    <template v-slot:menu>
    <div class="logo">学习方案</div>
      <div class="menu-side">
        <a-menu mode="inline" theme="dark" :open-keys="openKeys" :default-selected-keys="selectedSubjectName" @openChange="onOpenChange">
          <a-sub-menu v-for="directionItem in directionList" :key="directionItem.name">
            <span slot="title">
              <a-icon :type="directionItem.icon" />
              <span>{{directionItem.title}}</span>
            </span>
            <a-menu-item v-for="subjectItem in directionItem.children" :key="subjectItem.name">
              <router-link :to="subjectItem.path">
                <span>{{subjectItem.title}}</span>
              </router-link>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </div>
    </template>
    <template v-slot:level>
      <a-breadcrumb>
        <a-breadcrumb-item><router-link to="/">首页</router-link></a-breadcrumb-item>
        <a-breadcrumb-item>学习方案</a-breadcrumb-item>
        <!-- <a-breadcrumb-item>{{directionList.find(item => item.name === openKeys.toString()).title}}</a-breadcrumb-item>
        <a-breadcrumb-item>{{subjectList.find(item => item.name === selectedSubjectName.toString()).title}}</a-breadcrumb-item> -->
      </a-breadcrumb>
    </template>
  </Learning>
</template>
<script>
import Learning from '@/layout/Learning'
export default {
  name: 'index',
  components: {
    Learning
  },
  data () {
    return {
      selectedSubjectName: [this.$route.name],
      rootSubmenuKeys: [],
      openKeys: [],
      directionList: [],
      subjectList: []
    }
  },
  created () {
    const routes = this.$router.options.routes.find(item => item.name === 'learning-index').children
    this.directionList = routes.map(directionItem => {
      this.rootSubmenuKeys.push(directionItem.name)
      return {
        title: directionItem.meta.title,
        name: directionItem.name,
        icon: directionItem.meta.icon,
        children: directionItem.children.map(subjectItem => {
          const subjectObj = {
            title: subjectItem.meta.title,
            path: `/learning/${subjectItem.path}`,
            name: subjectItem.name,
            parent: directionItem
          }
          this.subjectList.push(subjectObj)
          return subjectObj
        })
      }
    })
    this.openKeys = [this.subjectList.find(item => item.name === this.$route.name).parent.name]
  },
  mounted () {
    document.querySelector('body').addEventListener('scroll', () => {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      var menuSide = document.querySelector('.menu-side')
      if (scrollTop >= 64) {
        menuSide.style.top = '0px'
        menuSide.style.position = 'fixed'
      } else {
        menuSide.style.position = 'relative'
      }
    })
  },
  methods: {
    onOpenChange (openKeys) {
      const latestOpenKey = openKeys.find(
        key => this.openKeys.indexOf(key) === -1
      )
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$header-height: 64px;
.as{
    background: #001529;
    box-shadow: none;
}
.logo{
  display: flex;
  width: 100%;
  height: $header-height;
  cursor: default;
  padding: 0 20px;
  align-items: center;
  background-color: #00284d;;
  color: #ffffffd9;
  font-size: 20px;
  font-weight: 650;
  line-height: 28px;
  margin: 0;
}
.menu-side{
  overflow: hidden;
  width: 200px;
  height: 100%;
  .ant-menu{
    background-color: #001529;
    overflow: auto;
    height: calc(100% - 48px);
  }::-webkit-scrollbar {
    // width: 0px;
    background-color: rgba(0,0,0,0);
  }::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #d4d2cf;
  }::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: rgba(0,0,0,0);
  }
}
</style>
