<template>
  <div id="main" ref="edata" style="width: 600px;height:400px;"></div>
</template>

   
<script>
export default {
  name: "echart",
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
          data: []
        },
        xAxis: [
          {
            type: "category",
            data: [],
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
          {
            name: "zhengFaLiang",
            type: "bar",
            stack: ["蒸发量", "降水量"], //这个只是简单拼在一起,实际效果需要重叠,待解决
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
            name: "jiangShuiLiang",
            type: "bar",
            stack: ["蒸发量", "降水量"], //这个只是简单拼在一起,实际效果需要重叠,待解决
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
            name: " pingJunWenDu",
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

      let data = [
        {
          Month: "1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月",
          zhengFaLiang:
            " 2.0,4.9,7.0,23.2,25.6,76.7,135.6,162.2,32.6,20.0,6.4,3.3",
          jiangShuiLiang:
            "2.6,5.9,9.0,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6.0,2.3",
          pingJunWenDu: "2.0,2.2,3.3,4.5,6.3,10.2,20.3,23.4,23.0,16.5,12.0,6.2"
        }
      ];
      let tempData = data[0];
    
      for (let index = 0; index < data.length; index++) {
        const element = data[0];
        console.log(element);
        
      }

      for (let key in tempData) {
        console.log(key, ".....key");
        this.option.legend.data.push(key);
      }
      data.forEach(function(val,index,arr){

      })
      console.log(tempData.Month,'...m');
      // this.option.xAxis.data.push(tempData.split(','))
      myChart.setOption(this.option);
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
