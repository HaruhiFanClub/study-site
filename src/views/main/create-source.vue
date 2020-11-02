<template>
  <div class="create-source" style="padding: 64px;">
    <span style="font-weight: 650;
    font-style: normal;
    font-size: 16px;
    color: #000000d8;
    line-height: 24px;">公共素材</span><br />
    <a-form-model :model="form" :label-col="labelCol" :rules="rules" ref="form">
    <a-form-model-item label="标题" prop="title">
      <a-input v-model="form.title" />
    </a-form-model-item>
    <a-form-model-item label="素材介绍" :wrapperCol="{span: 30, offset: 4}" prop="content">
      <quill-editor v-model="form.content" ref="QuillEditor" :options="options" style="max-width:672px;"></quill-editor>
    </a-form-model-item>
    <a-form-model-item label="QQ" prop="QQ">
      <a-input v-model="form.QQ" onkeyup="this.value=this.value.replace(/\D/g,'')" />
    </a-form-model-item>
    <a-form-model-item label="素材简介" prop="intro">
      <a-input v-model="form.intro" type="textarea" />
    </a-form-model-item>
    <a-form-model-item label="授权协议">
      <a-input v-model="form.license" type="textarea" />
    </a-form-model-item>
    <a-form-model-item :wrapperCol="{span: 10, offset: 4}">
      <a-upload
        ref="up"
        name="file"
        :multiple="true"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        :headers="headers"
        @change="handleChange"
      >
        <a-button> <a-icon type="upload" />上传文件</a-button>
      </a-upload>
    </a-form-model-item>
    <template v-for="(tag) in tags">
      <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
        <a-tag :key="tag" closable @close="() => handleTagClose(tag)">
          {{ `${tag.slice(0, 20)}...` }}
        </a-tag>
      </a-tooltip>
      <a-tag v-else :key="tag" closable @close="() => handleTagClose(tag)">
        {{ tag }}
      </a-tag>
    </template>
    <a-input
      v-if="inputVisible"
      ref="tagInput"
      type="text"
      size="small"
      :style="{ width: '78px' }"
      :value="tagInputValue"
      @change="handleTagInputChange"
      @blur="handleTagInputConfirm"
      @keyup.enter="handleTagInputConfirm"
    />
    <a-tag v-else style="background: #fff; borderStyle: dashed;" @click="showTagInput">
      <a-icon type="plus" /> New Tag
    </a-tag>
    <a-form-model-item :wrapper-col="{ offset: 4 }">
      <a-button type="primary" @click="submit">
        Create
      </a-button>
      <a-button style="margin-left: 10px;">
        Cancel
      </a-button>
    </a-form-model-item>
  </a-form-model>
  </div>
</template>
<script>
import { publishMaterial } from '@/api/source'
const toolbarOptions = [
  ['bold',
    'italic',
    'underline',
    'strike',
    { indent: '+1' },
    { indent: '-1' },
    'blockquote',
    'code-block',
    { list: 'ordered' },
    { list: 'bullet' }
  ],
  [{ align: [] },
    { color: [] },
    { background: [] },
    { header: [1, 2, false] },
    // 'code',
    'link', 'image', 'video',
    'clean'
  ]
]
export default {
  name: 'create-project',
  data () {
    return {
      headers: {
        authorization: 'authorization-text'
      },
      labelCol: { span: 4 },
      tags: [],
      inputVisible: false,
      tagInputValue: '',
      form: {
        title: '',
        content: '',
        QQ: '',
        intro: '',
        license: ''
      },
      options: {
        modules: {
          toolbar: {
            container: toolbarOptions
          }
        },
        placeholder: '请输入正文'
      },
      rules: {
        title: [
          { required: true, message: '请输入项目标题', trigger: 'change' }
          // { min: 1, message: '请输入项目标题', trigger: 'blur' },
        ],
        content: [{ required: true, message: '请输入项目正文', trigger: 'change' }],
        QQ: [{ required: true, message: '请输入5到11位QQ号码', trigger: 'change' },
          { min: 5, max: 11, message: '请输入5到11位QQ号码', trigger: 'change' }
        ],
        intro: [{ required: true, message: '请输入项目简介', trigger: 'change' }]
      }
    }
  },
  methods: {
    submit () {
      console.log(this.tags)
      console.log(this.$refs.up.sFileList[0])
      publishMaterial({
        token: this.$store.state.user.token,
        title: this.handleText(this.form.title),
        content: this.handleText(this.form.content),
        intro: this.handleText(this.form.intro),
        QQ: this.form.QQ,
        tags: this.tags,
        license: this.form.license,
        file: 'http://xxxxxx.xx.com',
        url: 'http://xxxxxx.xx.com'
      })
    },
    showTagInput () {
      this.inputVisible = true
      this.$nextTick(function () {
        this.$refs.tagInput.focus()
      })
    },
    handleTagInputChange (e) {
      this.tagInputValue = e.target.value
    },
    handleTagInputConfirm () {
      const tagInputValue = this.tagInputValue
      let tags = this.tags
      if (tagInputValue && tags.indexOf(tagInputValue) === -1) {
        tags = [...tags, tagInputValue]
      }
      console.log(tags)
      Object.assign(this, {
        tags,
        inputVisible: false,
        tagInputValue: ''
      })
    },
    handleTagClose (removedTag) {
      const tags = this.tags.filter(tag => tag !== removedTag)
      console.log(tags)
      this.tags = tags
    },
    handleChange (info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`)
      }
    },
    handleText (content) {
      return content.replace(/<|>|{|}|;|'|"| |\n/g, function (str) {
        switch (str) {
          case '<':
            return '\\<'
          case '>':
            return '\\>'
          case '{':
            return '\\{'
          case '}':
            return '\\}'
          case ';':
            return '\\;'
          case '\'':
            return '\\\''
          case '"':
            return '\\"'
          case ' ':
            return '&nbsp;'
          case '\n':
            return '\\n'
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.ant-input {
  max-width: 440px;
}
</style>
