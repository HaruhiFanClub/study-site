<template>
  <div class="signup-project" style="padding: 32px;">
    <a-form-model ref="form" layout="inline" :model="form" @submit="handleSubmit" @submit.native.prevent :rules="rules">
      <a-form-model-item label="QQ号" prop="QQ">
        <a-input v-model="form.QQ" placeholder="请输入" onkeyup="this.value=this.value.replace(/\D/g,'')">
        </a-input>
      </a-form-model-item>
      <a-form-model-item label="职能" prop="job" style="width:255.71px" :wrapperCol="{span: 235, offset: 0}">
        <a-select v-model="form.job" style="width:186.67px">
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
      <a-form-model-item>
        <a-button
          type="primary"
          html-type="submit"
          style="margin-right:10px"
        >
          提交
        </a-button>
        <a-button>
          取消
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        QQ: '',
        job: ''
      },
      rules: {
        QQ: [{ required: true, message: '请输入5到11位QQ号码', trigger: 'change' },
          { min: 5, max: 11, message: '请输入5到11位QQ号码', trigger: 'change' }
        ],
        job: [{ required: true, message: '请选择职能', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleSubmit (e) {
      console.log(this.formInline)
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
