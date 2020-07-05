<template>
  <div class="home-page">
    <div class="main-side">
      <section>用户学习列表</section>
      <section class="project-list-container">
        <project-list :data="projectList"></project-list>
        <div class="action">
          <router-link to="/">
            <a-button size="large" style="margin-right: 20px;">我想立项</a-button>
          </router-link>
          <router-link to="/projects">
            <a-button size="large">查看更多</a-button>
          </router-link>
        </div>
      </section>
      <section class="project-list-container">
        <source-list :data="sourceList"></source-list>
        <div class="action">
          <router-link to="/source">
            <a-button size="large">查看更多</a-button>
          </router-link>
        </div>
      </section>
    </div>
    <div class="right-side">
      <section class="about">
        <div class="desc">
          "我们希望用这个企划，<br>
          孵化凉宫圈的未来"<br>
        </div>
        <a-button class="about-btn">点击这里，了解详情</a-button>
      </section>
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
          <label>创建项目：</label>
          <span class="value">1</span>
        </div>
        <div class="item-info">
          <label>参与项目：</label>
          <span class="value">3</span>
        </div>
        <div class="item-info">
          <label>投稿素材：</label>
          <span class="value">0</span>
        </div>
      </section>
      <section class="bbs">
        <div class="item">
          <div class="title">讨论</div>
          <p>帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题</p>
        </div>
        <div class="item">
          <div class="title">经验</div>
          <p>帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题</p>
        </div>
        <div class="item">
          <div class="title">展示</div>
          <p>帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题</p>
        </div>
        <div class="action">
          <router-link to="/">进入论坛</router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ProjectList from '_c/ProjectList'
import SourceList from '_c/SourceList'
const mockData = {
  projectList: [
    {
      id: '1',
      title: '项目名称项目名称项目名称',
      tags: [
        '游戏', 'RPG Maker', '像素风'
      ],
      desc: '项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介',
      progress: '招募中',
      addDate: '2017-10-01 18:00',
      authorInfo: {
        userId: '1',
        nickName: '幕后黑手',
        avatar: 'http://m.imeitou.com/uploads/allimg/2019022710/b4jgfd5plcg.jpg'
      }
    },
    {
      id: '2',
      title: '项目名称项目名称项目名称',
      tags: [
        '游戏', 'RPG Maker', '像素风'
      ],
      desc: '项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介',
      progress: '招募中',
      addDate: '2017-10-01 18:00',
      authorInfo: {
        userId: '1',
        nickName: '幕后黑手',
        avatar: 'http://m.imeitou.com/uploads/allimg/2019022710/b4jgfd5plcg.jpg'
      }
    }
  ],
  sourceList: [
    {
      id: '1',
      title: '素材名称素材名称素材名称',
      tags: [
        '游戏', 'RPG Maker', '像素风'
      ],
      desc: '素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介',
      addDate: '2017-10-01 18:00',
      authorInfo: {
        userId: '1',
        nickName: '幕后黑手',
        avatar: 'http://m.imeitou.com/uploads/allimg/2019022710/b4jgfd5plcg.jpg'
      }
    },
    {
      id: '2',
      title: '素材名称素材名称素材名称',
      tags: [
        '游戏', 'RPG Maker', '像素风'
      ],
      desc: '素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介素材简介',
      addDate: '2017-10-01 18:00',
      authorInfo: {
        userId: '1',
        nickName: '幕后黑手',
        avatar: 'http://m.imeitou.com/uploads/allimg/2019022710/b4jgfd5plcg.jpg'
      }
    }
  ]
}
export default {
  name: 'home',
  components: {
    ProjectList,
    SourceList
  },
  computed: {
    userName () {
      return this.$store.state.user.userName
    }
  },
  data () {
    return {
      projectList: mockData.projectList,
      sourceList: mockData.sourceList
    }
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  padding: 20px 20px 20px 0;
  .main-side {
    flex: 1;
    margin-right: 30px;
    section {
      border-bottom: 1px solid #e9e9e9;
    }
    .project-list-container {
      padding: 20px;
      .action {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-top: 20px;
      }
    }
  }
  .right-side {
    width: 264px;
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
