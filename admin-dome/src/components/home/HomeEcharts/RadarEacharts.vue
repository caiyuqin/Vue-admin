<template>
     <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
// 引入 ECharts 主模块
var echarts = require("echarts/lib/echarts");
import { debounce } from "@/utils";
// 引入柱状图
require("echarts/lib/chart/radar");
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
      let _this = this;
      this.chart = echarts.init(this.$el);
      this.setOptions();
      this.__resizeHanlder = debounce(() => {
        if (_this.chart) {
          _this.chart.resize();
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
          trigger: "item",
          backgroundColor: "rgba(0,0,250,0.2)"
        },
        legend: {
          type: "scroll",
          bottom: 10,
          data: (function() {
            var list = [];
            for (var i = 1; i <= 17; i++) {
              list.push(i + 2000 + "");
            }
            return list;
          })()
        },
        visualMap: {
          top: "middle",
          right: 10,
          color: ["red", "yellow"],
          calculable: true
        },
        radar: {
          indicator: [
            { text: "IE8-", max: 400 },
            { text: "IE9+", max: 400 },
            { text: "Safari", max: 400 },
            { text: "Firefox", max: 400 },
            { text: "Chrome", max: 400 }
          ]
        },
        series: (function() {
          var series = [];
          for (var i = 1; i <= 17; i++) {
            series.push({
              name: "浏览器",
              type: "radar",
              symbol: "none",
              center: ["50%", "50%"],
              itemStyle: {
                normal: {
                  lineStyle: {
                    width: 1
                  }
                },
                emphasis: {
                  areaStyle: { color: "rgba(0,250,0,0.3)" }
                }
              },
              data: [
                {
                  value: [
                    (40 - i) * 10,
                    (38 - i) * 4 + 60,
                    i * 5 + 10,
                    i * 9,
                    i * i / 2
                  ],
                  name: i + 2000 + ""
                }
              ]
            });
          }
          return series;
        })()
      });
    }
  }
};
</script>
