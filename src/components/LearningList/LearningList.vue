<template>
  <a-row class="list" :gutter="[10,10]">
    <a-col
      class="item"
      v-for="item in data"
      :key="item.title"
      :xs="24"
      :sm="12"
      :xl="8"
    >
      <div class="card">
        <div class="card-title">
          <a-icon v-if="item.icon" :type="item.icon" theme="twoTone" style="margin-right: 15px;" />
          <span>{{ item.title }}</span>
        </div>
        <p class="desc">{{ item.desc }}</p>
        <div class="progress">
          <a-progress :percent="item.progress" size="small" />
        </div>
      </div>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: 'LearningList',
  props: {
    data: {
      type: Array[Object],
      default: []
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  .item {
    .card {
      padding: 15px 15px;
      border: 1px solid #eee;
      cursor: pointer;
      transition: all 0.15s;
      &:hover {
        transform: scale(1.03);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
      .card-title {
        display: flex;
        align-items: center;
        font-weight: 650;
        color: rgba(0, 0, 0, 0.85);
      }
      .desc {
        $line-height: 20px;
        $max-line: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: $max-line;
        text-overflow: ellipsis;
        height: $line-height * $max-line;
        overflow: hidden;
        margin: 10px 0;
        font-size: 12px;
        line-height: $line-height;
        color: rgba(0, 0, 0, 0.45);
      }
      // .progress {}
    }
  }
}
</style>
