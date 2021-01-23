<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="管理文档" name="doc">管理文档</el-tab-pane>
      <el-tab-pane label="知识库成员" name="members">知识库成员</el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Manger",
  data() {
    return {
      activeName: 'doc'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }

}
</script>

