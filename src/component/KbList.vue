<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      type="index"
      label="序号"
      width="50"
      align="center">
    </el-table-column>
    <el-table-column

      label="名称"
      sortable
      width="150"
      align="center">
      <template slot-scope="scope">
        <el-tag @click.native="viewKb(scope.row)">
          {{ scope.row.kb_name }}
        </el-tag>


      </template>
    </el-table-column>
    <el-table-column
      prop="join_time"
      label="加入时间"
      sortable
      width="180"
      align="center">
    </el-table-column>
    <el-table-column
      prop="can_edit"
      label="能否编辑"
      sortable
      width="100"
      align="center"
    >
    </el-table-column>
    <el-table-column
      width="180px"
      label="操作"
      align="center"
    >
      <template slot-scope="scope">
        <el-button type="success" size="mini" @click.native="viewKb(scope.row)">
          查看
        </el-button>
        <el-button type="success" v-if="scope.row.can_edit==='Y'" size="mini" @click="mangerKb(scope.row)">
          管理
        </el-button>
        <!--        <el-button type="success" v-if="scope.row.can_edit==='Y'" size="mini" @click="editKb(scope.row)">-->
        <!--          添加文档-->
        <!--        </el-button>-->
      </template>

    </el-table-column>
    <el-table-column
      prop="creator_id"
      label="创建者"
      sortable
      width="100"
      align="center"
    >
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "KbList",
  data() {
    return {
      tableData: [{
        join_time: '2021-01-21 14:45:50',
        kb_name: 'Linux',
        kb_id: 'http://www.baidu.com?search=3'
      }],
      pageObj: {size: 10, page: 1},
    }
  },
  methods: {
    editKb: function (kb) {
      this.$router.push({name: 'edit', query: {id: kb.kb_id}})
    },
    mangerKb: function (kb) {
      this.$router.push({name: 'manger', query: {id: kb.kb_id}})
    },
    viewKb: function (kb) {
      //alert(kb.kb_name)
      this.$router.push({name: 'detail', query: {id: kb.kb_id}})
    },
    getKbs: function () {
      this.axios.post("http://dashboard-back.deeplythink.com/kns", JSON.stringify(this.pageObj))
      .then(res=>{
        this.tableData = res.data.result
      })
    }
  },
  mounted() {
    this.getKbs()
  }
}
</script>

<style scoped>

</style>
