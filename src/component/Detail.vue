<template>
  <div>
    <el-header style="height: 80px; margin-left: 10%;margin-right: 10%">
      <el-tag @click.native="$router.push('/kbList')">返回知识库列表</el-tag>
    </el-header>
    <div style="height: calc(100vh - 60px); margin-left: 10%;margin-right: 10%" >
      <h1 align="center">{{kbData.kb_info.kb_name}}</h1>
      <h2 align="center" v-html="kbData.kb_info.kb_desc"></h2>
      <h3 align="center">{{kbData.users}}</h3>
      <!--  {{kbData}}-->
    </div>
  </div>

</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      kbData:{},
    }
  },
  mounted() {
    this.kbData = JSON.parse('{"code":10001,"result":{"kb_info":{"kb_name":"知识库名字","kb_desc":"\u003cem\u003e知识库描述\u003c/em\u003e","creator_id":10000,"is_private":"N","create_time":"2021-01-21T14:45:50+08:00"},"users":[{"ID":10000},{"ID":10001},{"ID":10002},{"ID":10003},{"ID":10004},{"ID":10005}]}}').result
  }
}
</script>

<style>
.h1{
  align:"center"
}
</style>

