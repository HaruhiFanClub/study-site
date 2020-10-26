<template>
  <div class="learning-android">
    <section class="content-side">
      <span class="level-I">
        <font class="title">Android 总积分：600分</font>
        <a-divider style="height:2px" />
        <blockquote>
          智能时代，信息交流⻛起云涌。作为流量的载体，各⼤*APP*在其中起到了举⾜轻重的作⽤，⽽移动互联⽹将是抢占信息滩头的重要战场，也是应援团迫切需 求所在。此教程将从程序设计与设计语⾔出发，循序渐进地为学习者培训相关 开发能力⾄⼊⻔级以上，同时也将提供未来的实践机会，让应援团带领学习者不断提⾼，相互成就。
        </blockquote>
      </span>
      <p><strong>本文中使用的操作系统为Windows 10</strong></p>
      <p><strong>本文所需要的文档、开发指南等均在第三部分“附录”中提供</strong></p>
      <span class="level-I">
        <font class="title">0. 在开始之前</font>
         </span>
         <a-divider style="height:2px" />
        <blockquote>
          Android系统是由Andy Rubin创建，后来被Google收购。最早的版本是:Android 1.1版本 而现在(2020年)最新的版本是Android 11。你可以使用 Kotlin、Java 和 C++ 语言编写 Android 应用。来自开发者社区的热情与积极采用推动了 Kotlin 成为 Android 开发的首选语言 [**Kotlin-first**]((https://developer.android.google.cn/kotlin/first) )。即便谷歌大力推广Kotlin，但Java仍旧是学习Android的基础，因此应在学习了Java的基础知识后再开始Android和Kotlin的学习。Google官方为中国开发者提供了经翻译的Android开发文档

在开始时你需要准备如下工具
        </blockquote>
        <a-divider style="height:2px" />
        <blockquote>
          1. 良好的网络(有些情况下你需要科学上网才能解决玄学问题)
          2. 学会使用[Google](https://www.google.com)和[Stack Overflow](https://stackoverflow.com)(使用英文搜索可以更高效的解决问题)
          3. 不论是Java、Kotlin还是Android，都要学会查看官方文档，Android和Kotlin的官方文档相当部分已经被翻译，而且给出了使用示例。Android的API在版本更新时会发生变化，这时只有官方文档才是最新的知识
          </blockquote>
                <span class="level-I">
        <font class="title">1. Java部分</font>
          </span>
          <p><strong>在这一部分，你将学习Java开发环境的搭建，Java语言基础和面向对象的基本概念</strong></p>

    </section>
    <anchor-tree :hasUrl="hasUrl" :anchorList="anchorList" :path='"\\learning\\tittle-tattle"'></anchor-tree>
  </div>
</template>

<script>
import AnchorTree from '@/components/AnchorTree'
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
  }
}
</script>

<style lang="scss" scoped>
@mixin line-base {
  font-family: "Microsoft YaHei";
  margin-left: 32px;
  margin-bottom: 0;
  width: 640px;
}
.learning-android {
  background-color: #ffffff;
  margin: 0 24px;
  padding: 32px;
  display: flex;
  justify-content: space-between;
  .content-side {
    // max-width: 800px;
    .ant-btn {
      height: 26px;
      display: inline-flex;
      align-items: center;
    }
    h1 {
      @include line-base;
      margin-top: 32px;
      font-size: 32px;
      font-weight: 400;
      line-height: 40px;
      color: #000000bf;
    }
    h2 {
      @include line-base;
      margin-top: 18px;
      font-size: 24px;
      font-weight: 400;
      line-height: 32px;
      color: #000000bf;
    }
    p {
      @include line-base;
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      color: #000000a5;
    }
    .title{
      @include line-base;
      font-size: 40px;
      font-weight: 400;
      line-height: 48px;
      color: #000000d8;
      font-family: "Microsoft YaHei ", "Microsoft YaHei", sans-serif;
    }
    .mission-intro {
      @include line-base;
      margin-top: 15px;
      font-weight: 700;
      line-height: 22px;
    }
    blockquote {
      @include line-base;
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      border-left: 3px solid #cccccc;
      padding-left: 24px;
      color: #00000072;
    }
    .image {
      @include line-base;
      img {
        width: 100%;
      }
      .smallImage {
        display: block;
        width: 339px;
        margin: 0 auto;
      }
    }
  }
}
</style>
