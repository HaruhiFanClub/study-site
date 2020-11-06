<template>
  <a-row class="home-page">
    <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18" :xxl="19" class="main-side">
      <section class="learning-list-container">
        <div class="list">
            <a-collapse :bordered="false" expandIconPosition="right">
              <a-collapse-panel v-for="userItem in userList" :key="userItem.id" :style="customStyle">
                <div slot="header" style="display:flex;padding: 8px 0 8px 4px;">
                  <a-avatar shape="square" alt="用户头像" :size="40">{{ userItem.userName.substring(0, 1) }}</a-avatar>
                  <div style="margin-left: 20px;height: 40px;">
                    <div style="line-height: 20px;">{{userItem.userName}}</div>
                    <div style="line-height: 20px;">
                      <span>积分：</span>
                      <span class="points">{{userItem.points}}</span>
                    </div>
                  </div>
                </div>
                <div v-for="learningItem in userItem.learningList" :key="learningItem.subject_id" style="margin-left: 64px;display: flex;justify-content: space-between;">
                  <router-link to="/learning/tittle-tattle">{{learningItem.title}}</router-link>
                  <a-progress :percent="learningItem.percent" size="small" style="width: 200px;" />
                </div>
              </a-collapse-panel>
            </a-collapse>
        </div>
        <div class="action">
          <router-link to="/study">
            <a-button size="large">了解详情</a-button>
          </router-link>
        </div>
      </section>
      <a-tree
          :show-line="true"
          :show-icon="false"
        >
          <a-tree-node v-for="directionItem in learningMeta" :key="directionItem.id" :title="directionItem.meta.title">
            <a-tree-node v-for="subjectItem in directionItem.children" :key="`${directionItem.id}-${subjectItem.id}`" :title="subjectItem.meta.title">
            </a-tree-node>
          </a-tree-node>
        </a-tree>
    </a-col>
    <a-col :xs="0" :sm="0" :md="6" :lg="6" :xl="6" :xxl="5" class="right-side">
      <section class="user-info">
        <div class="user-name">{{ userName }}</div>
        <div class="item-info">
          <label>积分：</label>
          <span class="value">121</span>
        </div>
        <div class="item-info">
          <label>总积分：</label>
          <span class="value">422</span>
        </div>
        <div class="item-info">
          <label>参与学习：</label>
          <span class="value">3</span>
        </div>
        <div class="item-info">
          <label>完成学习：</label>
          <span class="value">2</span>
        </div>
        <div class="item-info">
          <label>完成题目：</label>
          <span class="value">1</span>
        </div>
        <div class="item-info">
          <label>完成任务：</label>
          <span class="value">3</span>
        </div>
        <div class="item-info">
          <label>学习打卡：</label>
          <span class="value">0</span>
        </div>
        <a-button>报名学习</a-button>
      </section>
    </a-col>
  </a-row>
</template>

<script>
import config from '@/config'
import { getMissionInfoByUserAndSubject, getAllDirections } from '@/api/study'
import { getAvatarByQQ, getUsersByPage, getTop3ScoreUsers } from '@/api/user'
export default {
  name: 'home',
  computed: {
    userName () {
      return this.$store.state.user.userName
    }
  },
  data () {
    return {
      learningMeta: config.learningMeta,
      text: 'A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.',
      customStyle: 'background: white;overflow: hidden;align-items: center;padding: 0px;border-bottom: 1px solid #e9e9e9;',
      userList: []
    }
  },
  mounted () {
    this.initUserList()
    this.initLearningList()
    getUsersByPage({
      page: 1,
      size: 3
    }).then(res => {
      console.log(res.data)
      res.data.forEach(userItem => {
        userItem.learningList.forEach(userLearningItem => {
          getMissionInfoByUserAndSubject({
            user_id: this.userItem.user_id,
            subject_id: userLearningItem.subject_id
          }).then(res => {
            console.loe(res)
          })
        })
      })
    })
    // getAvatarByQQ('123456').then((res) => {
    //   state 400  跨域问题
    // })
  },
  methods: {
    getAvatarByQQ: getAvatarByQQ,
    async initUserList () {
      const res = await getTop3ScoreUsers()
      this.userList = res.map((item, index) => {
        // TODO: 需要后端给数据
        const mockData = {
          id: index + 1 + '',
          userName: item.name,
          points: item.score,
          avatar: '',
          learningList: [
            {
              subject_id: 0,
              title: '学习方向-子方向',
              percent: 60
            },
            {
              subject_id: 1,
              title: '学习方向-子方向',
              percent: 60
            },
            {
              subject_id: 2,
              title: '学习方向-子方向',
              percent: 60
            }
          ]
        }
        return {
          ...item,
          ...mockData
        }
      })
    },
    async initLearningList () {
      const res = await getAllDirections()
      console.log(res) // TODO:
    }
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  padding: 32px;
  .main-side {
    flex: 1;
    margin-right: 30px;
    section {
      padding: 20px;
      border-bottom: 1px solid #e9e9e9;
      .action {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-top: 20px;
      }
    }
    .learning-list-container {
      padding: 0 0 20px 0;
      .list {
        .item {
          display: flex;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #e9e9e9;
          .info {
            flex: 1;
            margin-left: 20px;
          }
        }
      }
    }
  }
  .right-side {
    section {
      padding: 15px 15px 10px 15px;
      margin-bottom: 10px;
      border: 1px solid #e9e9e9;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .about {
      width: 100%;
      text-align: center;
      .desc {
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: 700;
      }
    }
    .user-info {
      .user-name {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.85);
      }
      .item-info {
        line-height: 2.5em;
        .value {
          color: rgba(0, 0, 0, 0.43);
        }
      }
    }
    .bbs {
      .item {
        .title {
          margin-bottom: 5px;
          font-size: 16px;
          font-weight: 700;
          color: rgba(0, 0, 0, 0.85);
        }
        p {
          $line-height: 20px;
          $max-line: 3;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: $max-line;
          text-overflow: ellipsis;
          height: $line-height * $max-line;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
