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
          },
          // formatter:function(data){
          //   console.log(data,'tooltip');
          //   var  html = data[0].name +'</br>';
          //   console.log(html,'...html');
          //   html = html + data[0].marker
          //   for(let i=0;i<data[0].length;i++){
          //     if(data[0].seriesName=="蒸发量"){
          //       console.log('2222');
          //       html = html +"降水量"
          //     }
          //   }
          //   return html
          // }
          formatter: function(params) {
            console.log(params);
            let arr = ["降水量","总量", "蒸发量", "温度"];
            var res = params[0].name;
            for (var i = 0, l = params.length; i < l; i++) {
              res += "<br/>" +params[i].marker+arr[i] + " : " + params[i].value;
            }
            return res;
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
          data: ["平均温度","总量","蒸发量", "蒸发量", ],
          // color:['#522689','#256','#896','#854']
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

            axisLabel: {
              formatter: "{value} ml"
            }
          },
          {
            type: "value",
            name: "温度",

            axisLabel: {
              formatter: "{value} °C"
            }
          }
        ],
        series: [
          {
            name: "蒸发量",
            type: "bar",
            stack: "..",
            color:'red',
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
            name: "总量",
            color:'green',
            type: "bar",
            stack: "..",
            data: [
              3.0,
              3.9,
              3.0,
              33.2,
              35.6,
              36.7,
              335.6,
              362.2,
              32.6,
              30.0,
              3.4,
              3.3
            ]
          },
          {
            name: "蒸发量",
            type: "bar",
            color:'red',
            stack: "..",
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
            color:'yellow',
            stack: "..",
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
