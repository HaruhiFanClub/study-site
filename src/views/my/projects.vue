<template>
  <div class="index-page">
    <project-list :data="list"></project-list>
  </div>
</template>

<script>
import { getProjectList } from '@/api/project'
import ProjectList from '_c/ProjectList'
export default {
  name: 'my-projects',
  components: {
    ProjectList
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    async getList () {
      const list = await getProjectList()
      this.list = list
    }
  },
  mounted () {
    this.getList()
  }
}
</script>

<style lang="scss" scoped>

</style>
