<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view v-if="isRouterAlive" />
    </div>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true,
      locale: zhCN
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(() => {
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style lang="less">
:root{
  scrollbar-color: rgb(200,200,200) rgb(225,225,225) !important;
  scrollbar-width: thin !important;
}
html,body{
  width: 100%;
  height: 100%;
  overflow-y: overlay;
  margin: 0;
  padding: 0;
  font-size: 14px;
}
::-webkit-scrollbar {
  width: 8px;
  height: 16px;
  background-color: #eee;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #eee;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #d4d2cf;
}
</style>
