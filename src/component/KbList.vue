<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
  >
    <el-table-column
      prop="name"
      label="名称"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="date"
      label="更新时间"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      label=""
    >
      <el-button type="primary" onclick="window.open('http://www.baidu.com')">管理</el-button>

    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "KbList",
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: 'test',
        address: 'http://www.baidu.com?search=1'
      }, {
        date: '2016-05-04',
        name: 'test1',
        address: 'http://www.baidu.com'
      }, {
        date: '2016-05-01',
        name: 'test2',
        address: 'http://www.baidu.com'
      }, {
        date: '2016-05-03',
        name: 'test3',
        address: 'http://www.baidu.com'
      }]
    }
  },
  methods: {
    formatter(row, column) {
      return row.address;
    }
  }
}
</script>

<style scoped>

</style>
