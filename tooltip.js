tooltip ={                                      //提示框组件
  trigger: 'item',                            //触发类型,'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。 'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
  triggerOn:"mousemove",                      //提示框触发的条件,'mousemove'鼠标移动时触发。'click'鼠标点击时触发。'mousemove|click'同时鼠标移动和点击时触发。'none'不在 'mousemove' 或 'click' 时触发
  showContent:true,                           //是否显示提示框浮层
  alwaysShowContent:true,                     //是否永远显示提示框内容
  showDelay:0,                                  //浮层显示的延迟，单位为 ms
  hideDelay:100,                                //浮层隐藏的延迟，单位为 ms
  enterable:false,                             //鼠标是否可进入提示框浮层中
  confine:false,                               //是否将 tooltip 框限制在图表的区域内
  transitionDuration:0.4,                      //提示框浮层的移动动画过渡时间，单位是 s,设置为 0 的时候会紧跟着鼠标移动
  position:['50%', '50%'],                    //提示框浮层的位置，默认不设置时位置会跟随鼠标的位置,[10, 10],回掉函数，inside鼠标所在图形的内部中心位置，top、left、bottom、right鼠标所在图形上侧，左侧，下侧，右侧，
  formatter:"{b0}: {c0}<br />{b1}: {c1}",     //提示框浮层内容格式器，支持字符串模板和回调函数两种形式,模板变量有 {a}, {b}，{c}，{d}，{e}，分别表示系列名，数据名，数据值等
  backgroundColor:"transparent",            //标题背景色
  borderColor:"#ccc",                        //边框颜色
  borderWidth:0,                              //边框线宽
  padding:5,                                  //图例内边距，单位px  5  [5, 10]  [5,10,5,10]
  textStyle:mytextStyle,                     //文本样式
};


app.title = '堆叠柱状图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) { //自定义函数修改折线图给数据加单位
               console.log(params)
                var str = '';//声明一个变量用来存储数据
                str += '<div>'+ params[0].name +'</div>';   //显示日期的函数
                for(var i=0; i<params.length; i++) {  //图显示的数据较多时需要循环数据，这样才可以成功的给多条数据添加单位
                    str += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+params[i].color+';"></span>'+ params[i].seriesName +'</span> : <span>'+ (params[i].data ? params[i].data+'%' : '暂无') +'</br>';
                }
                return str;
            }
    },
    legend: {
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'邮件营销',
            type:'bar',
            stack: '广告',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'bar',
            stack: '广告',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'bar',
            stack: '广告',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'搜索引擎',
            type:'bar',
            data:[862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                data : [
                    [{type : 'min'}, {type : 'max'}]
                ]
            }
        },
        {
            name:'百度',
            type:'bar',
            barWidth : 5,
            stack: '搜索引擎',
            data:[620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
            name:'谷歌',
            type:'bar',
            stack: '搜索引擎',
            data:[120, 132, 101, 134, 290, 230, 220]
        },
        {
            name:'必应',
            type:'bar',
            stack: '搜索引擎',
            data:[60, 72, 71, 74, 190, 130, 110]
        },
        {
            name:'其他',
            type:'bar',
            stack: '搜索引擎',
            data:[62, 82, 91, 84, 109, 110, 120]
        }
    ]
};
 
