import './content.scss'
import AnchorTree from '@/components/AnchorTree'
import { getMissionInfoByUserAndSubject } from '@/api/study'
export default {
  components: {
    AnchorTree
  },
  data () {
    return {
      disabled: [],
      hasUrl: true,
      user_mission: [
        {
          mission_id: 0,
          score: 20
        },
        {
          mission_id: 1,
          score: 20
        },
        {
          mission_id: 2,
          score: 20
        }
      ],
      anchorList: []
    }
  },
  created () {
    if (/^\/learning\/mine\/.+/.test(this.$route.path)) {
      this.hasUrl = false
    }
  },
  mounted () {
    // let mission_button = document.querySelectorAll(".ant-btn");
    // console.log(mission_button)
    console.log(this.$store.state.user.userId)
    console.log(this.$route)
    getMissionInfoByUserAndSubject({
      user_id: this.$store.state.user.userId,
      subject_id: this.$route.meta.id
    }).then((res) => {
      console.log(res)
    })

    this.user_mission.map(userMissionItem => {
      if (userMissionItem.score !== 0) {
        this.disabled[userMissionItem.mission_id] = true
      }
    })

    let anchorIndex = 1
    document.querySelectorAll('.level-I').forEach(levelI => {
      levelI.id = 'anchor-' + anchorIndex
      const anchorObj = {
        id: '#anchor-' + anchorIndex,
        value: levelI.firstElementChild.textContent
      }
      if (levelI.querySelectorAll('.level-II').length !== 0) {
        anchorObj.children = []
        levelI.querySelectorAll('.level-II').forEach(levelII => {
          anchorIndex++
          levelII.id = 'anchor-' + anchorIndex
          anchorObj.children.push({
            id: '#anchor-' + anchorIndex,
            value: levelII.firstElementChild.textContent
          })
        })
      }
      this.anchorList.push(anchorObj)
      anchorIndex++
    })
  }
}
