<template>
  <div class="source-page">
    <a-col :xs="24" :sm="24" :md="17" :lg="17" :xl="17" :xxl="17" class="main-side">
      <div class="list-container">
        <source-list :data="list"></source-list>
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
    </a-col>
    <a-col :xs="0" :sm="0" :md="7" :lg="7" :xl="7" :xxl="7" class="right-side">
      <div class="initiation">
        <div class="desc">
          今日的共享，将铺就未来的基石，<br>
          今日的付出，将孵化无数果实。<br>
          届时，面对我们所做的一切，<br>
          高尚的人们将洒下热泪。<br>
        </div>
        <a-button class="initiation-btn">上传素材</a-button>
      </div>
    </a-col>
  </div>
</template>

<script>
import { getSourcetList } from '@/api/source'
import SourceList from '_c/SourceList'
export default {
  name: 'source-page',
  components: {
    SourceList
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
      const list = await getSourcetList({ pageId, pageSize })
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
.source-page {
  display: flex;
  padding: 32px 32px 100px 32px;
  box-sizing: border-box;
  .main-side{
    flex: 1;
    margin-right: 30px;
    .list-container {
      padding: 0 20px;
      .pagination-container {
        margin-top: 30px;
        text-align: center;
      }
    }
  }
  .right-side {
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
