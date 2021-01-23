<template>
  <div id="app" style="margin-top: 0px!important;">
    <el-container>
      <el-header>

        <el-menu class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
          <el-button class="el-icon-document" type="primary" style="float: right" v-if="$route.meta.show" @click="save">
            保存
          </el-button>
        </el-menu>

      </el-header>
      <el-container>
        <el-aside width="200px" style="height: calc(100vh - 60px);" v-if="!$route.meta.document">


          <el-col :span="12" style="width: 200px">
            <el-menu
              :default-active="$route.path"
              class="el-menu-vertical-demo"
              router="true">
              <el-menu-item index="/">
                <i class="el-icon-monitor"></i>
                <span slot="title">工作台</span>
              </el-menu-item>
              <el-menu-item index="/kbList">
                <i class="el-icon-document"></i>
                <span slot="title">知识库列表</span>
              </el-menu-item>
            </el-menu>
          </el-col>


        </el-aside>
        <el-container>
          <el-main style="height: calc(100vh - 60px);">
            <keep-alive>
              <router-view v-on:getDocContent="getDocContent"></router-view>
            </keep-alive>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import edit from './component/Edit.vue'

export default {
  name: 'app',
  components: {
    edit
  },
  data() {
    return {
      docContent: "",
    }
  },
  methods: {
    save: function () {
      alert("当前路径:"+this.$route.fullPath + "\n当前内容:" + this.docContent)
    },
    getDocContent: function (val) {
      this.docContent = val
    }
  }
}
</script>
