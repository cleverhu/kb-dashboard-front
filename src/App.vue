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
          <el-button class="el-icon-document" type="primary" style="float: right;margin-right: 10%"
                     v-if="$route.meta.isKbList"
                     @click="showAddKbDialog=true">
            新建知识库
          </el-button>

          <el-dialog title="添加知识库" :visible.sync="showAddKbDialog" style="width: 700px;margin-left: 20%" :modal="false"
                     :close-on-click-modal="false">
            <el-form>
              <el-form-item label="知识库类型"><br>
                <el-select v-model="kbInfoData.kb_kind_id">
                  <el-option
                    v-for="item in kbKindObj.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="知识库标题">
                <el-input v-model="kbInfoData.kb_name"></el-input>
              </el-form-item>
              <el-form-item label="知识库描述">
                <el-input v-model="kbInfoData.kb_desc"></el-input>
              </el-form-item>
              <el-form-item label="是否私有">
                <el-checkbox v-model="kbInfoData.is_private"></el-checkbox>
              </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="showAddKbDialog = false">取 消</el-button>
              <el-button type="primary" @click="addkb">添 加</el-button>
            </div>
          </el-dialog>
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
import axios from 'axios'

export default {
  name: 'app',
  components: {
    edit
  },
  data() {
    return {
      docContent: "",
      showAddKbDialog: false,
      kbKindObj: {
        options: [{
          value: 1,
          label: '文档知识库'
        }, {
          value: 2,
          label: '资源知识库'
        }]
      },
      kbInfoData: {kb_kind_id: 1, kb_name: "", kb_desc: "", is_private: false}
    }
  },
  methods: {
    save: function () {
      alert("当前路径:" + this.$route.fullPath + "\n当前内容:" + this.docContent)
    },
    getDocContent: function (val) {
      this.docContent = val
    },
    addkb: function () {
      if (this.kbInfoData.is_private) {
        this.kbInfoData.is_private = "Y"
      } else {
        this.kbInfoData.is_private = "N"
      }
      axios.put("http://dashboard-back.deeplythink.com/kns", JSON.stringify(this.kbInfoData))
        .then(res => {
          alert(res.data.result)
          this.showAddKbDialog = false
          this.$router.go(0)
        })
        .catch(err => {
          alert(err.error)
        })
    },
  },
}
</script>

<style>
.el-dialog__body {
  padding: 0 20px !important;
}
</style>
