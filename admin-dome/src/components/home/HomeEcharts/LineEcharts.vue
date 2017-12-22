<template>
     <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
// 引入 ECharts 主模块
var echarts = require("echarts/lib/echarts");
import { debounce } from '@/utils'
// 引入柱状图
require("echarts/lib/chart/line");
// 引入提示框和标题组件
require("echarts/lib/component/legend");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

export default {
  props: {
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "350px"
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object
    }
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      this.chart = echarts.init(this.$el);
      this.setOptions();
      this.__resizeHanlder = debounce(() => {
        if (this.chart) {
          this.chart.resize();
        }
      }, 100);
      window.addEventListener("resize", this.__resizeHanlder);
    },
    beforeDestroy() {
      if (!this.chart) {
        return;
      }
      window.removeEventListener("resize", this.__resizeHanlder);
      this.chart.dispose();
      this.chart = null;
    },
    setOptions() {
      this.chart.setOption({
        tooltip: {
          trigger: "axis"
        },
        legend: {
          left: "center",
          top: "20",
          data: ["expected", "actual"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisLine: {
            lineStyle: {
              color: "#3888fa"
            }
          }
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#3888fa"
            }
          }
        },
        series: [
          {
            name: "expected",
            type: "line",
            stack: "总量",
            data: [210, 250, 101, 90, 456, 110, 210],
            itemStyle: {
              normal: {
                color: "#3888fa",
                lineStyle: {
                  color: "#3888fa",
                  width: 2
                },
                areaStyle: {
                  color: "#f3f8ff"
                }
              }
            }
          },
          {
            name: "actual",
            type: "line",
            stack: "总量",
            data: [220, 450, 400, 450, 80, 330, 310],
            itemStyle: {
              normal: {
                color: "#FF005A",
                lineStyle: {
                  color: "#FF005A",
                  width: 2
                },
                areaStyle: {
                  color: "#f3f8ff"
                }
              }
            }
          }
        ]
      });
    }
  }
};
</script>
