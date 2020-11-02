<template>
  <div class="my-study-page">
    <learning-list :data="list"></learning-list>
    <!-- <div class="question-list">
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
    </div> -->
  </div>
</template>

<script>
import LearningList from '_c/LearningList'
import { getSubjectsByUser, getMissionInfoByUserAndSubject } from '@/api/study'
import config from '@/config'
const learningMeta = config.learningMeta
const mockData = []
export default {
  name: 'my-study',
  components: {
    LearningList
  },
  data () {
    return {
      list: mockData
    }
  },
  async created () {
    // getMissions().then((res)=>{
    //   console.log(res)
    // })
    // getMissionInfoByUser(this.$store.state.user.userId,subject_id)
    await getSubjectsByUser(this.$store.state.user.token).then((res) => {
      // console.log(res)
      const subjects = res.subjects
      subjects.map(async subjectItem => {
        console.log(learningMeta[subjectItem.subject_id])
        let done = 0
        let mission = null
        let missionSize = 0
        await getMissionInfoByUserAndSubject(this.$store.state.user.userId, subjectItem.subject_id).then((res) => {
          console.log(res)
          res.userScoreInfo.forEach(missionItem => {
            missionSize++
            if (missionItem.score_percentage !== 0) {
              done++
              mission = missionItem.mission
            }
          })
        })
        const subjectObj = {
          title: subjectItem.name,
          desc: mission,
          progress: done / missionSize,
          icon: (() => {
            let icon = null
            learningMeta.forEach(direction => {
              direction.children.forEach(subject => {
                if (subject.id === subjectItem.subject_id) icon = direction.meta.icon
              })
            })
            return icon
          })()
        }
        console.log(subjectItem)
        console.log(subjectObj)
        mockData.push(subjectObj)
        // console.log(subjectItem.subject_id)
        // console.log(learningMeta)
      })
    })
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
