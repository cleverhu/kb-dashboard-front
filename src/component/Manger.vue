<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="管理分组" name="group">
        <el-container>
          <el-header style="height:30px;margin-top: 10px">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item>{{ kbInfo.kbName }}</el-breadcrumb-item>
              <el-breadcrumb-item v-if="kbInfo.grpName!=='' && kbInfo.grpName!==undefined">{{ kbInfo.grpName }}
              </el-breadcrumb-item>
              <el-breadcrumb-item v-if="kbInfo.docName!=='' && kbInfo.docName!==undefined">{{ kbInfo.docName }}
              </el-breadcrumb-item>
            </el-breadcrumb>
          </el-header>
          <el-container style="top:20px;bottom:0;">
            <el-aside>
              <el-tree :data="docInfo" :props="defaultProps"
                       @node-click="handleNodeClick"
                       :default-expanded-keys="expandArr"
                       node-key="url"
                       :current-node-key="kbInfo.docShortUrl"
                       style="background-color:#fafafa!important;"
                       :default-expand-all="true"
                       @node-drop="handleDrop"
                       draggable
                       :expand-on-click-node="false"
              >
              </el-tree>
              <el-button type="primary"
                         @click="groupInfo.group_id=0;groupInfo.label='';kbInfo={};showAddAndDelete=false">顶级目录
              </el-button>
            </el-aside>

            <el-main>
              <el-form label-width="70px">
                <el-form-item label="父ID" style="display: none">
                  <el-input type="text" v-model="groupInfo.group_id" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="父标题">
                  <el-input type="text" v-model="groupInfo.label" :disabled="false"></el-input>
                </el-form-item>
                <el-form-item label="子标题">
                  <el-input type="text" v-model="groupInfo.sonTitle" :disabled="false"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="success">添加子节点</el-button>
                  <el-button type="warning" v-if="showAddAndDelete">修改父节点</el-button>
                  <el-button type="danger" v-if="showAddAndDelete">删除父节点</el-button>
                </el-form-item>
              </el-form>

            </el-main>
          </el-container>

        </el-container>

      </el-tab-pane>
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
      expandArr: [],
      activeName: 'group',
      kbInfo: {kbName: "", docGrpShortUrl: "", docShortUrl: "", grpName: "", docName: ""},
      docInfo: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      groupInfo: {group_id: 0, label: "", sonTitle: ""},
      showAddAndDelete: false,
      kb_id: 0,
    }
  },
  methods: {
    handleClick: function (args) {
      console.log(args)
    },
    handleNodeClick: function (data) {
      this.groupInfo = this.cloneObjectFn(data)
      this.showAddAndDelete = true
      let grp = this.getParentShortUrl(data.url, this.docInfo)
      if (grp !== undefined) {
        this.kbInfo.docName = data.label
        this.kbInfo.grpName = grp.label
        localStorage.setItem("docName", data.label)
        localStorage.setItem("grpName", grp.label)
      } else {
        this.kbInfo.grpName = data.label
        this.kbInfo.docName = undefined
      }
    },
    getParentShortUrl: function (sonUrl, par) {
      if (par.length === undefined) {
        for (let j = 0; j < par.children.length; j++) {
          if (par.children[j].url === sonUrl) {
            return par
          }
          if (par.children[j].children !== undefined) {
            let result = this.getParentShortUrl(sonUrl, par.children[j])
            if (result !== undefined) {
              return result
            }
          }

        }
      }

      for (let i = 0; i < par.length; i++) {
        for (let j = 0; j < par[i].children.length; j++) {
          if (par[i].children[j].url === sonUrl) {
            return par[i]
          }
          if (par[i].children[j].children !== undefined) {
            let result = this.getParentShortUrl(sonUrl, par[i].children[j])
            if (result !== undefined) {
              return result
            }
          }

        }
      }
    },
    cloneObjectFn(obj) {
      return JSON.parse(JSON.stringify(obj))
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      console.log(draggingNode);
      console.log(dropNode)
      console.log(dropType)
    },
    getGroupInfo: function (kbID) {
      this.axios.get("http://dashboard-back.deeplythink.com/group/"+kbID)
      .then(res=>{
        this.docInfo = res.data.result
      })
    },
  },
  mounted() {
    },
  watch: {
    $route: {
      handler(val) {
        this.kb_id = this.$route.query.id
        if (this.kb_id !== undefined) {
          this.getGroupInfo(this.kb_id)
        }
        //alert(this.kb_id)
        //this.$forceUpdate()
      },
      // 深度观察监听
      deep: true
    }

  }
}
</script>

<style>
.is-current > .el-tree-node__content {
  color: orange !important;
}

</style>
