<template>
  <div class="main-app">
    <home-tit></home-tit>
    <el-row class="bcg-normal">
     <el-row class="bcg-white">
       <line-echarts></line-echarts> 
     </el-row>
    </el-row>
    <el-row class="pad">
        <el-col :sm="24" :xs="24" :lg="8" style="padding:10px">
          <div class="bcg-white">
              <pie-echarts></pie-echarts>
          </div>
        </el-col>
        <el-col :sm="24" :xs="24" :lg="8" style="padding:10px">
          <div class="bcg-white">
              <radar-eacharts></radar-eacharts>
          </div>
        </el-col>
       <el-col :sm="24" :xs="24" :lg="8" style="padding:10px">
          <div class="bcg-white">
              <bar-eacharts></bar-eacharts>
          </div>
        </el-col>    
    </el-row>
    <el-row  class="pad">
      <el-col :sm="24" :xs="24" :lg="9" style="padding:10px">
          <div class="bcg-white">
              <transaction-table></transaction-table>
          </div>
      </el-col>
       <el-col :sm="24" :xs="24" :lg="7" style="padding:10px">
          <div class="bcg-white">
              <todo-list></todo-list>
          </div>
      </el-col>
       <el-col :sm="24" :xs="24" :lg="8" style="padding:10px">
          <div class="bcg-white">
              <Progress ></Progress >
          </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HomeTit from "@/components/home/HomeTit";
import LineEcharts from "@/components/home/homeEcharts/LineEcharts.vue";
import PieEcharts from "@/components/home/homeEcharts/PieEcharts.vue";
import RadarEacharts from "@/components/home/homeEcharts/RadarEacharts.vue";
import BarEacharts from "@/components/home/homeEcharts/BarEacharts.vue";
import TransactionTable from "@/components/home/homeEcharts/TransactionTable.vue";
import TodoList from "@/components/home/homeEcharts/TodoList.vue";
import Progress from "@/components/home/homeEcharts/Progress.vue";
export default {
  components: {
    HomeTit,
    LineEcharts,
    PieEcharts,
    RadarEacharts,
    BarEacharts,
    TransactionTable,
    TodoList,
    Progress
  }
};
</script>
<style lang="scss" scoped>
.bcg-normal {
  background: #f0f2f5;
  padding: 16px;
}
.bcg-white {
  background: #fff;
}
.pad{
  padding:6px;
   background: #f0f2f5;
}
</style>



