<template>
  <el-tabs v-model="activeName" >
    <el-tab-pane label="文档" name="doc">
      <el-table
        :data="docData"
        style="width: 100%">
        <el-table-column
          width="200px">
          <template slot="header" slot-scope="scope">
            <el-select v-model="typeOption.value" style="width: 100px">
              <el-option
                v-for="item in typeOption.data"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
          <template slot-scope="scope">
            <a :href='scope.row.url' target="_blank">{{scope.row.name}}</a>
          </template>

        </el-table-column>

        <el-table-column
          prop="belong"
          width="200px">
          <template slot="header" slot-scope="scope">
            <el-select v-model="belongOption.value" style="width: 100px">
              <el-option
                :key="0"
                :value="0"
                :label="'归属'"
              >
                所有
              </el-option>
              <el-option

                v-for="item in belongOption.data"
                :key="item.value"
                :value="item.value"
                :label="item.label">
              </el-option>
            </el-select>
          </template>
        </el-table-column>

        <el-table-column
          prop="creator"
          width="200px">
          <template slot="header" slot-scope="scope">
            <el-select v-model="creationOption.value" style="width: 100px">
              <el-option
                :key="0"
                :value="0"
                :label="'创建者'"
              >
                所有
              </el-option>

              <el-option

                v-for="item in creationOption.data"
                :key="item.value"
                :value="item.value"
                :label="item.label">
              </el-option>

            </el-select>
          </template>
        </el-table-column>

        <el-table-column
          prop="updateAt"
          width="200px"
          label="最后操作时间">

        </el-table-column>

      </el-table>

    </el-tab-pane>

    <el-tab-pane label="资源" name="source">

      <el-table
        :data="sourceData"
        style="width: 100%">
        <el-table-column
          width="200px">
          <template slot="header" slot-scope="scope">
            <el-select v-model="typeOption.value" style="width: 100px">
              <el-option
                v-for="item in typeOption.data"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
          <template slot-scope="scope">
            <a :href='scope.row.url' target="_blank">{{scope.row.name}}</a>
          </template>

        </el-table-column>

        <el-table-column
          prop="belong"
          width="200px"
          label="归属">

        </el-table-column>

        <el-table-column
          prop="updateAt"
          width="200px"
          label="最后操作时间">

        </el-table-column>

      </el-table>

    </el-tab-pane>

  </el-tabs>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      activeName: 'doc',
      search: '',
      typeOption: {
        value: 0,
        data: [{value: 0, label: '所有'}, {value: 1, label: '文档'},]
      },
      belongOption: {
        value: 0,
        data: [{value: 1, label: 'deeplythink'},]
      },
      creationOption: {
        value: 0,
        data: [{value: 1, label: '我的'},]
      },
      docData: [{name: "文档1.doc", belong: "deeplythink", creator: "10000", updateAt: "2020-01-01 11:11:11",url:"http://www.doc1.com"},{name: "文档2.doc", belong: "deeplythink", creator: "10000", updateAt: "2020-01-01 11:11:11",url:"http://www.doc2.com"}],
      sourceData: [{name: "资源1.doc", belong: "deeplythink",  updateAt: "2021-01-01 11:11:11",url:"http://www.source1.com"},{name: "资源2.doc", belong: "deeplythink", updateAt: "2021-01-01 11:11:11",url:"http://www.source2.com"}],



    };
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>

</style>
