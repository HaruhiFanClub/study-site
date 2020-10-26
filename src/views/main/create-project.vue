<template>
  <div class="create-project" style="padding: 64px;">
    <span style="font-weight: 650;
    font-style: normal;
    font-size: 16px;
    color: #000000d8;
    line-height: 24px;">立项</span><br />
    <a-form-model :model="form" :label-col="labelCol" :rules="rules" ref="form">
    <a-form-model-item label="标题" prop="title">
      <a-input v-model="form.title" />
    </a-form-model-item>
    <a-form-model-item label="项目正文" :wrapperCol="{span: 30, offset: 4}" prop="content">
      <quill-editor v-model="form.content" ref="QuillEditor" :options="options" style="max-width:672px;"></quill-editor>
    </a-form-model-item>
    <a-form-model-item label="QQ" prop="QQ">
      <a-input v-model="form.QQ" onkeyup="this.value=this.value.replace(/\D/g,'')" />
    </a-form-model-item>
    <a-form-model-item label="项目简介" prop="intro">
      <a-input v-model="form.intro" type="textarea" />
    </a-form-model-item>
    <a-form-model-item label="招募" prop="recruitment">
      <a-radio-group v-model="form.recruitment">
        <a-radio value="1">
          开启
        </a-radio>
        <a-radio value="2">
          关闭
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="招募简介" prop="recruitmentIntro">
      <a-input v-model="form.recruitmentIntro" type="textarea" />
    </a-form-model-item>
    <a-form-model
    v-for="(item,index) in form.recruitmentList"
      :key="index"
      :rules="{
        required: true,
        message: 'domain can not be null',
        trigger: 'blur',
      }" style="display: flex;" :labelCol="{span: 13,offset: 0}">
      <a-form-model-item label="所需职能" :wrapperCol="{span: 11, offset: 0}">
        <a-input v-model="item.job" />
      </a-form-model-item>
      <a-form-model-item label="水平要求" style="width:255.71px" :wrapperCol="{span: 11, offset: 0}">
        <a-select v-model="item.level">
          <a-select-option value="0">
            零基础
          </a-select-option>
          <a-select-option value="1">
            入门
          </a-select-option>
          <a-select-option value="2">
            中级
          </a-select-option>
          <a-select-option value="3">
            高级
          </a-select-option>
        </a-select>
        <!-- <a-input v-model="item.level" /> -->
      </a-form-model-item>
      <a-icon
        style="align-self: center;
                margin-left: 15px;
                margin-bottom: 24px;
                font-size: 24px;
                color: #999;
                transition: all 0.3s;"
        v-if="form.recruitmentList.length > 1"
        type="minus-circle-o"
        @click="removeJob(item)"
      />
      <a-icon
          style="align-self: center;
                margin-left: 15px;
                margin-bottom: 24px;
                font-size: 24px;
                color: #999;
                transition: all 0.3s;"
          v-if="form.recruitmentList.indexOf(item)+1 === form.recruitmentList.length"
          type="plus-circle"
          @click="addJob"
        />
    </a-form-model>
    <a-form-model :labelCol="{span: 13,offset: 0}">
      <a-form-model-item label="使用的公共素材" style="width:255.71px" :wrapperCol="{span: 11, offset: 0}">
          <a-select>
            <!-- <a-select-option value="0">
            </a-select-option> -->
          </a-select>
          <!-- <a-input v-model="item.level" /> -->
        </a-form-model-item>
      </a-form-model>
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
import { createProject } from '@/api/project'
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
      labelCol: { span: 4 },
      tags: [],
      inputVisible: false,
      tagInputValue: '',
      form: {
        title: '',
        content: '',
        QQ: '',
        intro: '',
        recruitment: null,
        recruitmentIntro: '',
        recruitmentList: [
          {
            job: '',
            level: ''
          }
        ]
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
        intro: [{ required: true, message: '请输入项目简介', trigger: 'change' }],
        recruitment: [{ required: true, message: '必选', trigger: 'change' }],
        recruitmentIntro: [{ required: true, message: '请输入招募简介', trigger: 'change' }]
      }
    }
  },
  methods: {
    submit () {
      createProject({
        user_id: this.$store.state.user.userId,
        title: this.handleText(this.form.title),
        content: this.handleText(this.form.content),
        intro: this.handleText(this.form.intro),
        recruitmentIntro: this.handleText(this.form.recruitmentIntro),
        QQ: this.form.QQ,
        recruitment: this.form.recruitment,
        recruitmentList: this.form.recruitmentList,
        tags: this.tags,
        sourceList: this.form.sourceList
      })
    },
    removeJob (item) {
      const index = this.form.recruitmentList.indexOf(item)
      if (index !== -1) {
        this.form.recruitmentList.splice(index, 1)
      }
    },
    addJob () {
      this.form.recruitmentList.push({
        job: '',
        level: ''
      })
      console.log(this.form.recruitmentList)
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
    handleText (text) {
      return text.replace(/<|>|{|}|;|'|"| |\n/g, function (str) {
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
