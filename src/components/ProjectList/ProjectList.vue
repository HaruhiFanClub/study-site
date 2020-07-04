<template>
  <ul class="list">
    <li class="item" v-for="item in data" :key="item.id">
      <router-link to="/">
        <h3>{{ item.title }}</h3>
      </router-link>
      <div class="tags">
        <span class="tag" v-for="(tag, index) in item.tags" :key="index">{{ tag }}</span>
      </div>
      <div class="desc">{{ item.desc }}</div>
      <div class="item-footer">
        <img :src="item.authorInfo.avatar" alt="发起者头像" class="avatar">
        <span style="margin-right: 0.5em">发起人</span>
        <router-link to="/">{{ item.authorInfo.nickName }}</router-link>
        <span class="progress-info">{{ item.progress }}</span>
        <span class="date">{{ item.addDate }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ProjectList',
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
  padding-left: 17px;
  margin-bottom: 30px;
  .item {
    margin-top: 25px;
    h3 {
      width: 670px;
      margin: 0 0 15px 0;
      font-size: 20px;
      line-height: 28px;
      font-weight: 650;
      color: rgba(0, 0, 0, 0.847058823529412);
    }
    .tags {
      margin-bottom: 18px;
      .tag {
        display: inline-block;
        margin-right: 14px;
        padding: 0 8px;
        height: 24px;
        line-height: 24px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.647058823529412);
        background-color: #f7f7f7;
        border: 1px solid #ebebeb;
        border-radius: 5px;
      }
    }
    .desc {
      width: 670px;
      margin-bottom: 20px;
      font-size: 14px;
      line-height: 22px;
      color: rgba(0, 0, 0, 0.647058823529412);
    }
    .item-footer {
      display: flex;
      align-items: center;
      padding-bottom: 32px;
      border-bottom: 1px solid #e9e9e9;
      .avatar {
        width: 14px;
        height: 14px;
        margin-right: 15px;
      }
      a {
        margin-right: 35px;
      }
      .progress-info {
        margin-right: 38px;
      }
      .progress-info,.date {
        opacity: 0.35;
      }
    }
  }
}
</style>
