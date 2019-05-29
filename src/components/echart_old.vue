<template>
  <div id="main" ref="edata" style="width: 600px;height:400px;">
      
  </div>
 
</template>



   
<script>
export default {
  name: "echart",
  props: {
    msg: String
  },
  data() {
    return {
      seriesArr2: [],
      option: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          },
          formatter:function(data){
            console.log(data,'tooltip');
          }
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["emptycircle", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          // color:['blue','green','red','yellow'],
          data: ["蒸发量","降水量","蒸发量", "平均温度"]
          // data:[]
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
            // min: 0,
            // max: 250,
            // interval: 50,
            axisLabel: {
              formatter: "{value} ml"
            }
          },
          {
            type: "value",
            name: "温度",
            // min: 0,
            // max: 25,
            // interval: 5,
            axisLabel: {
              formatter: "{value} °C"
            }
          }
        ],
        series: [
          {
            color:'red',
            name: "蒸发量",
            type: "bar",
            // stack: ["zhengFaLiang", "jiangShuiLiang"], //这个只是简单拼在一起,实际效果需要重叠,待解决
            // barGap: "-100%", //添加此配置项即为重叠效果
            stack:'xx',
            data: []
          },
          {
            name: "降水量",
            // name: "蒸发量",
            color:'green',

            type: "bar",
            // stack: ["zhengFaLiang", "jiangShuiLiang"], //这个只是简单拼在一起,实际效果需要重叠,待解决
            // stack: ["蒸发量", "降水量"], //这个只是简单拼在一起,实际效果需要重叠,待解决
            // barGap: "-100%", //添加此配置项即为重叠效果
            stack:'xx',
            data: []
          },
          {
            // name: "降水量",
            name: "总雨量",
            color:'red',
            type: "bar",
            // stack: ["zhengFaLiang", "jiangShuiLiang"], //这个只是简单拼在一起,实际效果需要重叠,待解决
            // stack: ["蒸发量", "降水量"], //这个只是简单拼在一起,实际效果需要重叠,待解决
            // barGap: "-100%", //添加此配置项即为重叠效果
            stack:'xx',
            data: []
          },
          {
            name: " 平均温度",
            stack:'xx',   
            type: "line",
            yAxisIndex: 1,
            data: []
          }
        ]
      },
     
     
   
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
          pingJunWenDu: "2.0,2.2,3.3,4.5,6.3,10.2,20.3,23.4,23.0,16.5,12.0,6.2",
          zongYuLiang: "2.3,5.8,6.0,16.4,38.7,78.7,105.6,205.2,5.7,18.8,8.0,28.3",
        }
      ];
      let tempData = data[0];
      // 图例
      // for (let key in tempData) {
      //   console.log(key, ".....key");
      //   this.option.legend.data.push(key);
      // }
      // x轴
      console.log(tempData, "...tempData");

      let test = (this.option.xAxis[0].data = tempData.Month.split(","));
      console.log(test, "...");
      // series
      let series0 = tempData.zhengFaLiang;
      let series1 = tempData.jiangShuiLiang;
      let series2 = tempData.pingJunWenDu;
      let series3 = tempData.zongYuLiang;
      this.option.series[0].data = series0.split(",");
      this.option.series[1].data = series1.split(",");
      this.option.series[2].data = series2.split(",");
      this.option.series[3].data = series3.split(",");

      data.forEach(function(val, index, arr) {});
      console.log(tempData.Month, "...m");
      // this.option.xAxis.data.push(tempData.split(','))
      myChart.setOption(this.option);
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
