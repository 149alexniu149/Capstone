//frontend.js



function bitfrequest()
{
	//define variables for use in DB query
	/*var vol = document.getElementById("bitfVol").value;
	var bid = document.getElementById("bitfBid").value;
	var ask = document.getElementById("bitfAsk").value;*/
	alert("ran")
}

function bitfrequest()
{
	//define variables for use in DB query
	/*var vol = document.getElementById("bitsVol").value;
	var bid = document.getElementById("bitsBid").value;
	var ask = document.getElementById("bitsAsk").value;*/
}

$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });
 
        var chart;
		$('#container').highcharts({
            chart: {
                type: 'line',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {
 
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        var series2 = this.series[1];
                        var series3 = this.series[2];
						
                        var k=0;
                        setInterval(function() {
							var bitFiniexPrice=[15,17,22,23,21,21,19,18,16,20,23,24,26,30,36,35,36,34,33,34,29,30,16,20,23,24,26,30,36,35,36,34,26,30,23,24,26,21,19,18,16,20,24,29,30,16,29,30,16,20,23,24,26,24,26,30,36,35,36,34,33,36,34,29,30,16,26,30,36,35,24,26,21,19,18,16,20,16,20,20,23,24,30,23,24,26,21,19,18,16,30,16,20,23,24,21,19,18,16,20,23,35,23,36,34,26,30,21,19,18,16,20,23,26,30,36,34,29,30,16,29,30,16,20,23,24,26,30,36,35,36,34,26,30,23,24,26,21,19,18,16,20,16,20,23,24,26,30,36,35,23,24,26,21,19,18,30,16,22,21,15,17,22,23,21,21,19,18,16,20,23,24,26,30,36,35,36,34,33,34,29,30,16,20,23,24,26,30,36,35,36,34,26,30,23,24,26,21,19,18,16,20,24,29,30,16,29,30,16,20,23,24,26];
							var bitStampPrice=[21,19,18,16,20,23,26,30,36,34,29,30,16,29,30,16,20,23,24,26,30,36,35,36,34,26,30,23,24,26,21,19,18,16,20,16,20,23,24,26,30,36,35,23,24,26,21,19,18,30,16,22,21,15,17,22,23,21,21,19,18,16,20,23,24,26,30,36,35,36,34,33,34,29,30,16,20,23,24,26,30,36,35,36,34,26,30,23,24,26,21,19,18,16,20,24,29,30,16,29,30,16,20,23,24,26,24,26,30,36,35,36,34,33,36,34,29,30,16,26,30,36,35,24,26,21,19,18,16,20,16,20,20,23,24,30,23,24,26,21,19,18,16,30,16,20,23,24,21,19,18,16,20,23,35,23,36,34,26,30,21,19,18,16,20,23,26,30,36,34,29,30,16,29,30,16,20,23,24,26,30,36,35,36,34,26,30,23,24,26,21,19,18,16,20,16,20,23,24,26,30,36,35,23,24,26,21,19,18,30,16,22,21];
							var otherPrice=[24,26,30,36,35,36,34,33,36,34,29,30,16,26,30,36,35,24,26,21,19,18,16,20,16,20,20,23,24,30,23,24,26,21,19,18,16,30,16,20,23,24,21,19,18,16,20,23,35,23,36,34,26,30,21,19,18,16,20,23,26,30,36,34,29,30,16,29,30,16,20,23,24,26,30,36,35,36,34,26,30,23,24,26,21,19,18,16,20,16,20,23,24,26,30,36,35,23,24,26,21,19,18,30,16,22,21,15,17,22,23,21,21,19,18,16,20,23,24,26,30,36,35,36,34,33,34,29,30,16,20,23,24,26,30,36,35,36,34,26,30,23,24,26,21,19,18,16,20,24,29,30,16,29,30,16,20,23,24,26,24,26,30,36,35,36,34,33,36,34,29,30,16,26,30,36,35,24,26,21,19,18,16,20,16,20,20,23,24,30,23,24,26,21,19,18,16,30,16,20,23,24,21,19,18,16,20,23,35,23,36,34,26];
        
                            var x = (new Date()).getTime(), // current time
                                y = bitFiniexPrice[k];
                                z = bitStampPrice[k];
                                w = otherPrice[k];
                            series.addPoint([x, y], false, true);
                            series2.addPoint([x, z], false, true);
                            series3.addPoint([x,w], true, true);
							k++;
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'BitCoin Exchange'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: [{
                title: {
                    text: 'BitFinex'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
                    {
                title: {
                    text: 'BitStamp'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            {
                title: {
                    text: 'OtherBit'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
                
            }],
            tooltip: {
                formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'BitFinex data',
                data: (function() {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;
 
                    for (i = -19; i <= 0; i++) {
                        data.push({
                            x: time + i * 1000,
                            y: 30
                        });
                    }
                    return data;
                })()
            },
                     {
                name: 'BitStamp data ',
                data: (function() {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;
					var j=0, 				//counter
					price=[10]
                    for (i = -19; i <= 0; i++) {
                        data.push({
                            x: time + i * 1000,
                            y: 10
                        });
						j++;
                    }
                    return data;
                })()
            },
                    {
                name: 'OtherBit data',
                data: (function() {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;
 
                    for (i = -19; i <= 0; i++) {
                        data.push({
                            x: time + i * 1000,
                            y: 20
                        });
                    }
                    return data;
                })()
            }]
        });
    });
 
});
/**
 * Dark theme for Highcharts JS
 * @author Torstein Honsi
 */

// Load the fonts
Highcharts.createElement('link', {
   href: '//fonts.googleapis.com/css?family=Unica+One',
   rel: 'stylesheet',
   type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
   colors: ["#2b908f", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
   chart: {
      backgroundColor: {
         linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
         stops: [
            [0, '#222'],
            [1, '#222']
         ]
      },
      style: {
         fontFamily: "'Unica One', sans-serif"
      },
      plotBorderColor: '#606063'
   },
   title: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase',
         fontSize: '20px'
      }
   },
   subtitle: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase'
      }
   },
   xAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      title: {
         style: {
            color: '#A0A0A3'

         }
      }
   },
   yAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      tickWidth: 1,
      title: {
         style: {
            color: '#A0A0A3'
         }
      }
   },
   tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      style: {
         color: '#F0F0F0'
      }
   },
   plotOptions: {
      series: {
         dataLabels: {
            color: '#B0B0B3'
         },
         marker: {
            lineColor: '#333'
         }
      },
      boxplot: {
         fillColor: '#505053'
      },
      candlestick: {
         lineColor: 'white'
      },
      errorbar: {
         color: 'white'
      }
   },
   legend: {
      itemStyle: {
         color: '#E0E0E3'
      },
      itemHoverStyle: {
         color: '#FFF'
      },
      itemHiddenStyle: {
         color: '#606063'
      }
   },
   credits: {
      style: {
         color: '#666'
      }
   },
   labels: {
      style: {
         color: '#707073'
      }
   },

   drilldown: {
      activeAxisLabelStyle: {
         color: '#F0F0F3'
      },
      activeDataLabelStyle: {
         color: '#F0F0F3'
      }
   },

   navigation: {
      buttonOptions: {
         symbolStroke: '#DDDDDD',
         theme: {
            fill: '#505053'
         }
      }
   },

   // scroll charts
   rangeSelector: {
      buttonTheme: {
         fill: '#505053',
         stroke: '#000000',
         style: {
            color: '#CCC'
         },
         states: {
            hover: {
               fill: '#707073',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            },
            select: {
               fill: '#000003',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            }
         }
      },
      inputBoxBorderColor: '#505053',
      inputStyle: {
         backgroundColor: '#333',
         color: 'silver'
      },
      labelStyle: {
         color: 'silver'
      }
   },

   navigator: {
      handles: {
         backgroundColor: '#666',
         borderColor: '#AAA'
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(255,255,255,0.1)',
      series: {
         color: '#7798BF',
         lineColor: '#A6C7ED'
      },
      xAxis: {
         gridLineColor: '#505053'
      }
   },

   scrollbar: {
      barBackgroundColor: '#808083',
      barBorderColor: '#808083',
      buttonArrowColor: '#CCC',
      buttonBackgroundColor: '#606063',
      buttonBorderColor: '#606063',
      rifleColor: '#FFF',
      trackBackgroundColor: '#404043',
      trackBorderColor: '#404043'
   },

   // special colors for some of the
   legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
   background2: '#505053',
   dataLabelsColor: '#B0B0B3',
   textColor: '#C0C0C0',
   contrastTextColor: '#F0F0F3',
   maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);
