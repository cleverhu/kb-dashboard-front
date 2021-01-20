<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="文档" name="doc">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="title"
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
        </el-table-column>
        <el-table-column
          prop="title"
          width="200px">
          <template slot="header" slot-scope="scope">
<!--            {value: 0, label: '所有'}-->
            <el-select v-model="belongOption.value" style="width: 100px" @visible-change="belongOptionChange">
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
                :label="item.value">
              </el-option>
            </el-select>
          </template>
        </el-table-column>

        <!--        <el-table-column-->
        <!--          prop="title"-->
        <!--          width="200px">-->
        <!--          <template slot="header" slot-scope="scope">-->
        <!--            <el-select v-model="value">-->
        <!--              <el-option-->
        <!--                v-for="item in options"-->
        <!--                :key="item.value"-->
        <!--                :label="item.label"-->
        <!--                :value="item.value">-->
        <!--              </el-option>-->
        <!--            </el-select>-->
        <!--          </template>-->
        <!--        </el-table-column>-->

        <!--        <el-table-column-->
        <!--          prop="creator"-->
        <!--          width="200px">-->
        <!--          <template slot="header" slot-scope="scope">-->
        <!--            <el-select v-model="value">-->
        <!--              <el-option-->
        <!--                v-for="item in options"-->
        <!--                :key="item.value"-->
        <!--                :label="item.label"-->
        <!--                :value="item.value">-->
        <!--              </el-option>-->
        <!--            </el-select>-->
        <!--          </template>-->
        <!--        </el-table-column>-->

        <!--        <el-table-column-->
        <!--          prop="date"-->
        <!--          label="最近操作"-->
        <!--          width="200px">-->

        <!--        </el-table-column>-->

      </el-table>

    </el-tab-pane>


    <el-tab-pane label="资源" name="source">

      <el-table-column
        prop="title"
        width="200px">
        <template slot="header" slot-scope="scope">
          <el-select v-model="value">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>

      <el-table-column
        prop="title"
        width="200px">
        <template slot="header" slot-scope="scope">
          <el-select v-model="value">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>

      <el-table-column
        prop="title"
        width="200px">
        <template slot="header" slot-scope="scope">
          <el-select v-model="value">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>

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
        data: [ {value: 0, label: '所有'},{value: 1, label: '文档'},]
      },
      belongOption: {
        value: 0,
        data: [ {value: 1, label: 'test'},]
      },
      tableData: [{title: "test"}],
      flags:false,
      labeldata:''
    };
  },
  computed:{

  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    belongOptionChange: function (b) {

    }
  }
}
</script>

<style scoped>

</style>
