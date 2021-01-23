<template>
  <div>
    <div style="margin-bottom: 20px">
      {{kb_id}}
      <span>知识库名字</span>
      <el-input value="Linux" disabled="true" style="width: 150px"></el-input>
      <span>分组</span>
      <el-select v-model="groupOption.value" placeholder="请选择">
        <el-option
          v-for="item in groupOption.options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <mavon-editor v-model="docContent"/>
  </div>

</template>

<script>
export default {
  name: "Edit",
  data() {
    return {
      docContent: "",
      groupOption: {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      },
      kb_id: "",
    }

  },
  mounted() {
    this.kb_id = this.$route.fullPath
  },
  watch: {
    docContent(newValue, oldValue) {
      this.$emit("getDocContent", newValue)
    },
    $route: {
      handler(val) {
        this.kb_id = val.fullPath
        this.beforeRouter = val.path
      },
      // 深度观察监听
      deep: true
    }
  }
}
</script>
