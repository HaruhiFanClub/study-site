<template>
  <div class="project-post">
    <section class="content-side" ref="content">
      <font class="project-title">项目标题</font><br/>
      <span class="project-info">
        <span style="margin-right: 20px;"><a-icon type="clock-circle" />{{date}}</span>
        <span style="margin-right: 20px;"><a-icon type="user" />{{user}}</span>
        <span>{{state}}</span>
      </span>
      <a-divider style="height:2px" />
    </section>
    <section class="right-side">
      <!-- <a-col :xs="0" :sm="0" :md="0" :lg="24" :xl="24" :xxl="24"> -->
      <!-- <div style="position: fixed;"> -->
        <div class="recruitment">
          <span style="font-weight: 400;
          font-style: normal;
          font-size: 16px;
          color: #000000d8;
          line-height: 24px;">招募状态</span>
          <div style="margin-top: 5px" class="recruitment-desc">招募简介招募简介招募简介招募简介招募简介招募简介招募简介招募简介招募简介</div>
          <div class="recruitment-info">
            <span>美工</span>
            <span>水平要求：初级</span>
          </div>
          <div class="recruitment-info">
            <span>美工</span>
            <span>水平要求：初级</span>
          </div>
          <div class="recruitment-info">
            <span>美工</span>
            <span>水平要求：初级</span>
          </div>
          <div class="recruitment-info">
            <span>美工</span>
            <span>水平要求：初级</span>
          </div>
          <a-button style="margin-top: 10px;">我要报名</a-button>
        </div>
      <!-- </div> -->
      <!-- </a-col> -->
    </section>
  </div>
</template>
<script>
import './content.scss'
export default {
  name: 'project-post',
  data () {
    return {
      date: '2020-12-12 12:12',
      user: 'asc',
      state: '进行中',
      content: null
    }
  },
  created () {
    console.log(this.$route.params.id)
  },
  mounted () {
    this.$refs.content.innerHTML += this.content.replace(/&nbsp;/g, ' ')
  }
}
</script>
<style lang="scss" scoped>
.project-post {
  padding: 32px;
  display: flex;
  justify-content: space-between;
  .content-side {
    max-width: 672px;
    .project-title {
      font-family: "Microsoft YaHei";
      margin-left: 32px;
      margin-bottom: 0;
      max-width: 640px;
      font-size: 40px;
      font-weight: 400;
      line-height: 48px;
      color: #000000d8;
    }
    .project-info {
      display: inline-block;
      margin-top: 15px;
      margin-left: 32px;
      font-weight: 400;
      font-style: normal;
      font-size: 12px;
      color: #0000003f;
      line-height: 18px;
    }
  }
  .right-side {
    @media (max-width: 1920px) {
      width: 290px;
    }
    @media (max-width: 1400px) {
      width: 230px;
    }
    @media (max-width: 1280px) {
      width: 200px;
    }
    // width: 290px;
    // $width: width;
    width: 290px;
    .recruitment {
      @media (max-width: 1920px) {
        width: 290px;
      }
      @media (max-width: 1400px) {
        width: 230px;
      }
      @media (max-width: 1280px) {
        width: 200px;
      }
      padding: 10px 15px;
      position: fixed;
      border-width: 1px;
      border-style: solid;
      border-color: #e9e9e9;
      border-radius: 2px;
      .recruitment-info {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
