<template>
  <div class="my-source-page">
    <div class="source-list-container">
      <source-list :data="list" edit @handlerEdit="handlerEdit"></source-list>
    </div>
  </div>
</template>

<script>
import SourceList from '_c/SourceList'
const mockData = [
  {
    id: '1',
    title: '项目名称项目名称项目名称',
    tags: [
      '游戏', 'RPG Maker', '像素风'
    ],
    desc: '项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介',
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
    addDate: '2017-10-01 18:00',
    authorInfo: {
      userId: '1',
      nickName: '幕后黑手',
      avatar: 'http://m.imeitou.com/uploads/allimg/2019022710/b4jgfd5plcg.jpg'
    }
  }
]
export default {
  name: 'my-source',
  components: {
    SourceList
  },
  data () {
    return {
      list: mockData
    }
  },
  methods: {
    handlerEdit (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-source-page {
  padding-left: 20px;
}
</style>
