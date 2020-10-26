<template>
  <div class="source-post">
    <section class="content-side" ref="content">
      <font class="source-title">项目标题</font><br/>
      <span class="source-info">
        <span style="margin-right: 20px;"><a-icon type="clock-circle" />{{date}}</span>
        <span style="margin-right: 20px;"><a-icon type="user" />{{user}}</span>
        <span>{{state}}</span>
      </span>
      <a-divider style="height:2px" />
    </section>
    <section class="right-side">
      <!-- <a-col :xs="0" :sm="0" :md="0" :lg="24" :xl="24" :xxl="24"> -->
      <!-- <div style="position: fixed;"> -->
        <div class="license">
          <span style="font-weight: 400;
          font-style: normal;
          font-size: 16px;
          color: #000000d8;
          line-height: 24px;">授权协议</span>
          <div style="margin-top: 5px" class="license-desc">招募简介招募简介招募简介招募简介招募简介招募简介招募简介招募简介招募简介</div>
          <a-button style="margin-top: 10px;">下载素材</a-button>
        </div>
      <!-- </div> -->
      <!-- </a-col> -->
    </section>
  </div>
</template>
<script>
import './content.scss'
export default {
  name: 'source-post',
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
.source-post {
  padding: 32px;
  display: flex;
  justify-content: space-between;
  .content-side {
    width: 672px;
    .source-title {
      font-family: "Microsoft YaHei";
      margin-left: 32px;
      margin-bottom: 0;
      max-width: 640px;
      font-size: 40px;
      font-weight: 400;
      line-height: 48px;
      color: #000000d8;
    }
    .source-info {
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
    .license {
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
    }
  }
}
</style>
