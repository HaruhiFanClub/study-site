<template>
  <div class="project-page">
    <div class="list-container">
      <project-list :data="list"></project-list>
      <div class="pagination-container">
        <a-pagination
          v-model="pageId"
          :total="50"
          show-less-items
          show-size-changer
          show-quick-jumper
          @showSizeChange="onPageSizeChange"
        />
      </div>
    </div>
    <div class="right-side">
      <div class="initiation">
        <div class="desc">
          用创造改变圈子，用合作超越自我<br>
          立项or参与项目<br>
          未来的可能性，就在你的手中。<br>
        </div>
        <a-button class="initiation-btn">我想立项</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getProjectList } from '@/api/project'
import ProjectList from '_c/ProjectList'
export default {
  name: 'projects',
  components: {
    ProjectList
  },
  data () {
    return {
      pageId: 1,
      pageSize: 5,
      list: []
    }
  },
  watch: {
    pageId (val) {
      this.getList()
    },
    pageSize (val) {
      this.getList()
    }
  },
  methods: {
    onPageSizeChange (current, pageSize) {
      console.log(current)
      console.log(pageSize)
      this.pageSize = pageSize
    },
    async getList () {
      const { pageId, pageSize } = this
      const list = await getProjectList({ pageId, pageSize })
      this.list = list
      console.log(list)
    }
  },
  mounted () {
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
.project-page {
  display: flex;
  padding: 24px 33px 100px 33px;
  box-sizing: border-box;
  .list-container {
    width: 760px;
    padding-left: 17px;
    .pagination-container {
      margin-top: 30px;
      text-align: center;
    }
  }
  .right-side {
    flex: 1;
    .initiation {
      width: 100%;
      padding: 15px 15px 10px 15px;
      border: 1px solid #e9e9e9;
      .desc {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
