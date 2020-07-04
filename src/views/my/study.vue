<template>
  <div class="my-study-page">
    <learning-list :data="list"></learning-list>
    <div class="question-list">
      <div class="title">
        <h3>今日题目</h3>
        <a href="javascript:;">开始做题</a>
      </div>
      <div class="list">
        <div class="item">
          <div class="title">标题名称标题名称标题名称</div>
        </div>
        <div class="item">
          <div class="title">标题名称标题名称标题名称</div>
        </div>
        <div class="item">
          <div class="title">标题名称标题名称标题名称</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LearningList from '_c/LearningList'
const mockData = [
  { title: '学习方向1', desc: '学习方向学习方向学习方向学习方向学习方向学习方向学习方向学习方向', progress: 60, icon: 'edit' },
  { title: '学习方向2', desc: '学习方向学习方向学习方向学习方向学习方向学习方向学习方向学习方向学习方向学习方向学习方向学习方向学习方向', progress: 60, icon: 'delete' },
  { title: '学习方向3', desc: '学习方向学习方向学习方向学习方向学习方向学习方向学习方向学习方向', progress: 60, icon: 'home' },
  { title: '学习方向4', desc: '学习方向学习方向学习方向学习方向学习方向学习方向学习方向学习方向', progress: 60, icon: 'diff' },
  { title: '学习方向5', desc: '学习方向学习方向', progress: 60, icon: 'highlight' },
  { title: '学习方向6', desc: '学习方向学习方向学习方向学习方向学习方向学习方向学习方向学习方向', progress: 60, icon: 'home' }
]
export default {
  name: 'my-study',
  components: {
    LearningList
  },
  data () {
    return {
      list: mockData
    }
  }
}
</script>

<style lang="scss" scoped>
.my-study-page {
  width: 100%;
  padding: 10px;
  .question-list {
    margin-top: 20px;
    .title {
      display: flex;
      align-items: center;
      h3 {
        margin: 0;
        margin-right: 15px;
        font-size: 16px;
        font-weight: 700;
      }
    }
    .list {
      .item {
        padding: 10px 0;
        border-bottom: 1px solid #e9e9e9;
        .title {}
      }
    }
  }
}
</style>
