<template>
  <div id="main" ref="edata" style="width: 600px;height:400px;"></div>
</template>

   
<script>
let data = [
  {
    Month: "1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月",
    zhengFaLiang: " 2.0,4.9,7.0,23.2,25.6,76.7,135.6,162.2,32.6,20.0,6.4,3.3",
    jiangShuiLiang: "2.6,5.9,9.0,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6.0,2.3"
  }
];
export default {
  name: "main",
  props: {
    msg: String
  },
  data() {
    return {
      option: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ["蒸发量", "降水量", "平均温度"]
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisPointer: {
              type: "shadow"
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "水量",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value} ml"
            }
          },
          {
            type: "value",
            name: "温度",
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: "{value} °C"
            }
          }
        ],
        series: [
          // {
          //   stack:['蒸发量','降水量']
          // },
          {
            name: "蒸发量",
            type: "bar",
            stack: ["蒸发量", "降水量"],
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ]
          },
          {
            name: "降水量",
            stack: ["蒸发量", "降水量"],
            type: "bar",
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ]
          },
          {
            name: "平均温度",
            type: "line",
            yAxisIndex: 1,
            data: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2
            ]
          }
        ]
      }
    };
  },
  // var myChart = echarts.init(document.getElementById('main'));
  mounted() {
    // let myChart = echarts.init(this.$refs.edata)
    this.drawCharts();
    // myChart.setOption(this.option);
  },
  methods: {
    drawCharts() {
      // var myChart = this.echarts.init(document.getElementById('main'));
      let myChart = this.echarts.init(this.$refs.edata);

      myChart.setOption(this.option);
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
