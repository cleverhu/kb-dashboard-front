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
        <el-button type="success" size="mini" @click="mangerKb(scope.row)">
          管理
        </el-button>
        <el-button type="success" v-if="scope.row.can_edit==='Y'" size="mini" @click="editKb(scope.row)">
          添加文档
        </el-button>
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
      }]
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
    }
  },
  mounted() {
    this.tableData = JSON.parse('{"code":10000,"result":[{"kb_id":89,"kb_name":"Linux","join_time":"2021-01-21 14:45:50","can_edit":"Y","creator_id":10000},{"kb_id":90,"kb_name":"Linux","join_time":"2021-01-21 14:45:56","can_edit":"N","creator_id":10001},{"kb_id":91,"kb_name":"LINUX","join_time":"2021-01-21 14:45:58","can_edit":"Y","creator_id":10002},{"kb_id":92,"kb_name":"Linux","join_time":"2021-01-21 14:46:00","can_edit":"Y","creator_id":10004},{"kb_id":93,"kb_name":"Linux","join_time":"2021-01-21 14:46:23","can_edit":"Y","creator_id":10005},{"kb_id":94,"kb_name":"Linux","join_time":"2021-01-21 14:46:35","can_edit":"Y","creator_id":10009},{"kb_id":95,"kb_name":"Linux","join_time":"2021-01-21 14:46:39","can_edit":"Y","creator_id":10010},{"kb_id":96,"kb_name":"Linux","join_time":"2021-01-21 14:46:40","can_edit":"Y","creator_id":10011},{"kb_id":97,"kb_name":"Linux","join_time":"2021-01-21 14:46:42","can_edit":"Y","creator_id":10012},{"kb_id":98,"kb_name":"Linux","join_time":"2021-01-21 14:46:46","can_edit":"Y","creator_id":10013}]}').result
  }
}
</script>

<style scoped>

</style>
