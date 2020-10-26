<template>
  <div style="width: calc( 440px + 5em );margin: 0 auto;">
    学习方向：<a-tree-select v-model="value" style="width: 440px" :tree-data="treeData" show-search>
    </a-tree-select>
    <a-button type="primary" @click="signUp">提交</a-button>
  </div>
</template>
<script>
import config from '@/config'
import { signUpForLearning } from '@/api/study'
// const treeData = [
//   {
//     title: 'node1',
//     value: '0-0',
//     // key: '0-0',
//     id: 0,
//     selectable: false,
//     children: [
//       {
//         title: 'Child Node1',
//         value: '文字',
//         id: 0
//         // key: '0-0-1',
//       },
//       {
//         title: 'Child Node2',
//         value: '0-0-2',
//         id: 1
//         // key: '0-0-2',
//       },
//     ]
//   }
// ]
const learningMeta = config.learningMeta
export default {
  name: 'signUp-learning',
  data () {
    return {
      value: null,
      treeData: null
    }
  },
  created () {
    this.treeData = learningMeta.map(directionItem => {
      // let directionObj = directionItem
      return {
        title: directionItem.meta.title,
        value: directionItem.meta.title,
        id: directionItem.id,
        selectable: false,
        children: directionItem.children.map(subjectItem => {
          return {
            title: subjectItem.meta.title,
            value: subjectItem.meta.title,
            id: subjectItem.id
          }
        })
      }
    })
  },
  methods: {
    signUp () {
      console.log('signUp')
      console.log(this.value)
      this.treeData.forEach(directionItem => {
        directionItem.children.forEach(subjectItem => {
          if (subjectItem.value === this.value) {
            console.log(subjectItem.id)
            signUpForLearning(subjectItem.id, this.$store.state.user.token)
          }
        })
      })
      // for(let directionItem in this.treeData){
      //   for(let subjectItem in directionItem){
      //     if(subjectItem.value === this.value){
      //       console.log(subjectItem.id)
      //       break
      //     }
      //   }
      //   console.log(i)
      //   i++
      // }
    }
  },
  watch: {
    value () {
      console.log(this.value)
    }
  }
}
</script>
