<template>
  <el-table
    :data="tableData"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="order_no"
      label="order_no"
      width="100" show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="price"
      label="price">
    </el-table-column>
    <el-table-column
      prop="status"
      label="status">
    </el-table-column>
  </el-table>
</template>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>

<script>
import MockApi from "../../../mock";
export default {
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      let _this = this;
      this.$http
        .get("transaction.json")
        .then(function(res) {
          _this.tableData = res.data.list;
        })
        .catch(function(res) {
          console.log(res);
        });
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 0) {
        return "success-row";
      }
    }
  }
};
</script>