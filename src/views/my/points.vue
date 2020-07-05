<template>
  <div class="my-points-page">
    <div class="main-list">
      <div class="title">
        <span>总积分：321</span>
        <span>排名：11</span>
      </div>
      <div class="item" v-for="(item, index) in list" :key="item.id">
        <span class="num">{{ index + 1 }}</span>
        <a-avatar class="avatar" alt="用户头像" :size="40" :src="item.avatar" />
        <div class="info">
          <div class="user-name">{{ item.userName }}</div>
          <div class="points">{{ item.points }}</div>
        </div>
      </div>
    </div>
    <div class="right-side">
      <section class="my-points">
        <div class="title">可用积分：221</div>
        <router-link to="/">
          <a-button class="action">兑换奖品</a-button>
        </router-link>
        <div class="prize">
          <p class="prize-name">奖品名称奖品名称奖品名称</p>
          <span>积分：111</span>
        </div>
        <div class="prize">
          <p class="prize-name">奖品名称奖品名称奖品名称</p>
          <span>积分：111</span>
        </div>
        <div class="prize">
          <p class="prize-name">奖品名称奖品名称奖品名称</p>
          <span>积分：111</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
const mocckData = [
  {
    id: '1',
    userName: '电脑社成员',
    avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593935723191&di=f95de4d1d1eddc7ac1061cdfdaee2cef&imgtype=0&src=http%3A%2F%2Fimg.duoziwang.com%2F2016%2F11%2F23%2F16432937557.jpg',
    points: '1000'
  },
  {
    id: '2',
    userName: '幕后黑手',
    avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593935723191&di=f95de4d1d1eddc7ac1061cdfdaee2cef&imgtype=0&src=http%3A%2F%2Fimg.duoziwang.com%2F2016%2F11%2F23%2F16432937557.jpg',
    points: '900'
  },
  {
    id: '3',
    userName: '春日酱',
    avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593935723191&di=f95de4d1d1eddc7ac1061cdfdaee2cef&imgtype=0&src=http%3A%2F%2Fimg.duoziwang.com%2F2016%2F11%2F23%2F16432937557.jpg',
    points: '800'
  }
]
export default {
  name: 'my-points',
  data () {
    return {
      list: mocckData
    }
  }
}
</script>

<style lang="scss" scoped>
.my-points-page {
  display: flex;
  padding: 30px;
  .main-list {
    flex: 1;
    margin-right: 10px;
    .title {
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: 700;
    }
    .item {
      display: flex;
      align-items: center;
      padding: 20px 0;
      border-bottom: 1px solid #e9e9e9;
      .num {
        font-size: 16px;
        font-weight: 700;
        color: rgb(0, 0, 0, 0.85);
      }
      .avatar {
        margin: 0 15px;
      }
      .info {
        .user-name {
          font-weight: 650;
          color: rgb(0, 0, 0, 0.85);
        }
        .points {
          color: rgb(0, 0, 0, 0.45);
        }
      }
    }
  }
  .right-side {
    width: 260px;
    section {
      border: 1px solid #d7d7d7;
    }
    .my-points {
      padding: 18px;
      .title {
        font-size: 18px;
        font-weight: 700;
      }
      .action {
        margin: 15px 0;
      }
      .prize {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 15px;
        .prize-name {
          width: 130px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 0;
        }
      }
    }
  }
}
</style>
