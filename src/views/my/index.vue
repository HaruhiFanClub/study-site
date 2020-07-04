<template>
  <div class="index-page">
    <a-row class="main" :gutter="[10,10]">
      <a-col
        class="item"
        v-for="item in mainList"
        :key="item.title"
        :xs="24"
        :sm="12"
        :xl="8"
      >
        <div class="card">
          <div class="title">
            <span>{{ item.title }}</span>
            <a-icon v-if="item.icon" :type="item.icon" />
            <span v-else></span>
          </div>
          <div class="num">{{ item.num }}</div>
          <div class="footer">
            <span class="label">本月新增</span>
            <span class="value">112</span>
          </div>
        </div>
      </a-col>
    </a-row>
    <div class="other">
      <div class="other-title">正在学习</div>
      <learning-list :data="otherList"></learning-list>
    </div>
  </div>
</template>

<script>
import LearningList from '_c/LearningList'
const mockData = {
  main: [
    { title: '积分', num: 210, monthNum: 112 },
    { title: '总积分', num: 210, monthNum: 112 },
    { title: '参与学习', num: 210, monthNum: 112 },
    { title: '完成学习', num: 210, monthNum: 112 },
    { title: '完成任务', num: 210, monthNum: 112 },
    { title: '完成题目', num: 210, monthNum: 112 },
    { title: '参与项目', num: 210, monthNum: 112 },
    { title: '创建项目', num: 210, monthNum: 112 },
    { title: '上传素材', num: 210, monthNum: 112 },
    { title: '发表帖子', num: 210, monthNum: 112 }
  ],
  other: [
    { title: '学习方向1', desc: '学习方向学习方向学习方向学习方向学习方向学习方向学习方向学习方向', progress: 60, icon: 'edit' },
    { title: '学习方向2', desc: '学习方向学习方向学习方向学习方向学习方向学习方向学习方向学习方向学习方向学习方向学习方向学习方向学习方向', progress: 60, icon: 'delete' },
    { title: '学习方向3', desc: '学习方向学习方向学习方向学习方向学习方向学习方向学习方向学习方向', progress: 60, icon: 'home' },
    { title: '学习方向4', desc: '学习方向学习方向学习方向学习方向学习方向学习方向学习方向学习方向', progress: 60, icon: 'diff' },
    { title: '学习方向5', desc: '学习方向学习方向', progress: 60, icon: 'highlight' },
    { title: '学习方向6', desc: '学习方向学习方向学习方向学习方向学习方向学习方向学习方向学习方向', progress: 60, icon: 'home' }
  ]
}
export default {
  name: 'my-index',
  components: {
    LearningList
  },
  data () {
    return {
      mainList: mockData.main,
      otherList: mockData.other
    }
  }
}
</script>

<style lang="scss" scoped>
.index-page {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  padding-bottom: 50px;
  .main {
    .item {
      .card {
        padding: 20px 20px;
        border: 1px solid #eee;
        cursor: pointer;
        transition: all 0.15s;
        &:hover {
          transform: scale(1.03);
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
        .title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          line-height: 1.5em;
          color: rgba(0, 0, 0, 0.43);
        }
        .num {
          margin: 5px 0;
          font-size: 30px;
          font-weight: 400;
          line-height: 38px;
          color: rgba(0, 0, 0, 0.85);
        }
        .footer {
          padding-top: 5px;
          border-top: 1px solid #e9e9e9;
          .label {
            margin-right: 15px;
          }
          .value {}
        }
      }
    }
  }
  .other {
    .other-title {
      margin: 10px 0;
      text-align: left;
    }
  }
}
</style>
