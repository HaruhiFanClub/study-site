<template>
  <section class="anchor-tree">
    <a-col :xs="0" :sm="0" :md="0" :lg="0" :xl="24" :xxl="24">
      <div style="position: fixed;">
      <a-anchor>
        <a-anchor-link
          v-for="anchorItem in anchorList"
           :key="anchorItem.id"
          :href="anchorItem.id"
          :title="anchorItem.value"
        >
          <template v-if="anchorItem.children">
            <a-anchor-link
              v-for="children in anchorItem.children"
              :key="children.id"
              :href="children.id"
              :title="children.value"
            ></a-anchor-link>
          </template>
        </a-anchor-link>
      </a-anchor>
      <a-button v-if="hasUrl" type="primary" style="width: 100%;height: 42px;margin-top: 5px"><a :href="path">报名</a></a-button>
      </div>
    </a-col>
  </section>
</template>
<script>
export default {
  name: 'anchor-tree',
  props: {
    hasUrl: {
      type: Boolean,
      default: false
    },
    anchorList: {
      type: Array[Object],
      default: []
    },
    path: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.anchor-tree {
  width: 250px;
  // margin-right: 32px;
  @media (max-width: 1024px) {
    width: 0px;
  }
}
</style>
