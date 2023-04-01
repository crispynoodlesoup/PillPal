// Initialize the echarts instance based on the prepared dom
var myChart = echarts.init(document.getElementById('main'));

myChart.showLoading();

echarts.registerTransform(ecStat.transform.regression);

fetch('https://raw.githubusercontent.com/crispynoodlesoup/landing-page-project/main/countryData.json')
  .then((response) => response.json())
  .then(function(data) {
    myChart.hideLoading();

/* since polynomial regression being kinda stupid
for(let i = 0; i < data[0].length; i++) {
    data[0][i][0] = data[0][i][0]/1000;
}
for(let i = 0; i < data[1].length; i++) {
    data[1][i][0] = data[1][i][0]/1000;
}*/

let regressionData1 = [];
for(let i = 0; i < data[0].length; i++) {
    regressionData1.push([data[0][i][0], data[0][i][1]]);
}
let regressionData2 = [];
for(let i = 0; i < data[1].length; i++) {
    regressionData2.push([data[1][i][0], data[1][i][1]]);
}

option = {
    dataset: [
        {
          source: regressionData2
        },
        {
          transform: {
            type: 'ecStat:regression',
            config: { method: 'polynomial', order: 3 }
          }
        }
      ],
    backgroundColor: {
        type: 'radial',
        x: 0.35,
        y: 0.5,
        r: 0.6,
        colorStops: [
            {
                offset: 0,
                color: '#77777744'
            },
            {
                offset: 1,
                color: '#44444400'
            }
        ]
    },
    grid: {
        left: 10,
        containLabel: true,
        bottom: 10,
        top: 10,
        right: 30,
        borderColor: "#ffffff"
    },
    xAxis: {
        axisLine: {
            lineStyle: {
                color: "#bbb"
            }
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: "#bbb"
            }
        },
        splitLine: {
            show: false
        },
        scale: true
    },
    tooltip: {
        show: true,
        trigger: "item",
        formatter: function (params) {

            return `Population: ${params.data[2].toLocaleString('en-US')}`;
        },
        backgroundColor: '#666666',
        borderColor: '#111',
        textStyle: {
            color: 'white'
        }
    },
    series: [
        {
            name: '1990',
            data: data[0],
            type: 'scatter',
            symbolSize: function (data) {
                return Math.sqrt(data[2]) / 500;
            },
            emphasis: {
                focus: 'series',
                label: {
                    show: true,
                    formatter: function (params) {
                        return `${params.data[3]} - ${params.seriesName}`;
                    },
                    position: 'top',
                    color: "#fff",
                    fontWeight: "bold"
                }
            },
            itemStyle: {
                shadowBlur: 8,
                shadowColor: '#111111',
                shadowOffsetY: 3,
                color: {
                    type: 'radial',
                    x: 0.4,
                    y: 0.3,
                    r: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgb(251, 118, 123)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(204, 46, 72)'
                        }
                    ]
                }
            }
        },
        {
            name: '2015',
            data: data[1],
            type: 'scatter',
            symbolSize: function (data) {
                return Math.sqrt(data[2]) / 500;
            },
            emphasis: {
                focus: 'series',
                label: {
                    show: true,
                    formatter: function (params) {
                        return `${params.data[3]} - ${params.seriesName}`;
                    },
                    position: 'top',
                    color: "#fff",
                    fontWeight: "bold"
                }
            },
            itemStyle: {
                shadowBlur: 8,
                shadowColor: '#111111',
                shadowOffsetY: 3,
                color: {
                    type: 'radial',
                    x: 0.4,
                    y: 0.3,
                    r: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgb(129, 227, 238)'
                        },
                        {
                            offset: 1,
                            color: '#1ca5aa'
                        }
                    ]
                }
            }
        },
        {
          name: 'line',
          type: 'line',
          color: "red",
          smooth: true,
          datasetIndex: 1,
          symbolSize: 0.1,
          symbol: 'circle',
          label: { show: true, fontSize: 16, color: "white" },
          labelLayout: { dy: -20, dx: -20 },
          encode: { label: 2 },
          tooltip: {
            show: true,
            trigger: "item",
            formatter: function (params) {
    
                return `Polynomial Regression:<br />
                ${params.data[2]}`;
            }
          },
          textStyle: {
            color: "white"
          }
        }
    ]
};

// Display the chart using the configuration items and data just specified.
myChart.setOption(option);

});