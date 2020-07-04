<template>
  <div class="my-project-page">
    <section>
      <div class="title">我创建的</div>
      <project-list :data="createdList" edit @handlerEdit="handlerEdit"></project-list>
    </section>
    <section>
      <div class="title">我参与的</div>
      <project-list :data="involvedList" quit @handlerQuit="handlerQuit"></project-list>
    </section>
  </div>
</template>

<script>
import { getProjectList } from '@/api/project'
import ProjectList from '_c/ProjectList'
const mockData = {
  created: [
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
    }
  ],
  involved: [
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
  ]
}
export default {
  name: 'my-projects',
  components: {
    ProjectList
  },
  data () {
    return {
      list: [],
      createdList: mockData.created,
      involvedList: mockData.involved
    }
  },
  methods: {
    handlerEdit (val) {
      console.log(val)
    },
    handlerQuit (val) {
      console.log(val)
    },
    async getList () {
      const list = await getProjectList()
      this.list = list
    }
  },
  mounted () {
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
.my-project-page {
  padding-left: 17px;
  section{
    padding-top: 15px;
    .title {
      font-size: 16px;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.85);
    }
  }
}
</style>
