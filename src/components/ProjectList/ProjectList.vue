<template>
  <ul class="list">
    <li class="item" v-for="item in data" :key="item.id">
      <div class="title">
        <router-link to="/">
          <h3>{{ item.title }}</h3>
        </router-link>
        <a v-if="edit" class="action-btn" href="javascript:;" @click="handlerEdit(item)">编辑</a>
        <a v-if="quit" class="action-btn" href="javascript:;" @click="handlerQuit(item)">退出</a>
      </div>
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
    },
    edit: {
      type: Boolean,
      default: false
    },
    quit: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handlerEdit (val) {
      this.$emit('handlerEdit', val)
    },
    handlerQuit (val) {
      this.$emit('handlerQuit', val)
    }
  }
}
</script>

<style lang="scss" scoped>
ul, ul li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
.list {
  .item {
    margin-top: 25px;
    .title {
      display: flex;
      align-items: flex-end;
      margin: 0 0 15px 0;
      h3 {
        display: inline-block;
        margin: 0;
        font-size: 20px;
        line-height: 28px;
        font-weight: 650;
        color: rgba(0, 0, 0, 0.847058823529412);
      }
      .action-btn {
        margin-left: 15px;
      }
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
      width: 100%;
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
