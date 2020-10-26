<template>
  <div class="learning-submit-page">
    <p style="padding-bottom:24px;margin:0;color:#00000072;">学习辛苦了！提交作业的方式是上传文件，审核通过后，任务即完成~</p>
    <section class="upload-container">
      <a-upload-dragger
      class="upload-side"
      listType="pictrue-card"
      name="file"
      :multiple="false"
      :directory="false"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      @change="handleChange"
      accept=".rar,.zip,.doc,.docx,.pdf,.jpg">
        <p class="ant-upload-drag-icon">
          <a-icon type="inbox" />
        </p>
        <p class="ant-upload-text">点击或将文件拖拽到这里上传</p>
        <p class="ant-upload-hint">支持扩展名：.rar .zip .doc .docx .pdf .jpg...</p>
      </a-upload-dragger>
    </section>
    <div class="selected-container">
      <a-button>提交</a-button>
      <a-button style="margin-left:24px;">返回学习页</a-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'submit',
  data () {
    return {}
  },
  methods: {
    handleChange (info) {
      const status = info.file.status
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.learning-submit-page{
  width: 438px;
  padding: 50px 0;
  margin: 0 auto;
  .upload-container{
    height: 192px;
  }
  .selected-container{
    margin: 70px 0;
  }
}
</style>
