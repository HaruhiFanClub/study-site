<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
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
html,body{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  font-size: 14px;
}
</style>
