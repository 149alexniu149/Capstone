//Capstone_HIGHCHART

//this program will grab information from a server and graph 
//informatition that is recieved

$(function(){
 //Dark Unica theme
 //borrowed from highcharts site
 //further documented by Dele Amon
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
			//xy1 & xy2 are the corners of the screen
			linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
			stops: [//this determines color gradiation across chart
				[0, '#2a2a2b'],
				[1, '#3e3e40']
			]
		},
		style: {
			fontFamily: "'Unica One', sans-serif"
		},
		//border color
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
				color: '#E0E0E3'//color of the x-coor categories
			}
		},
		lineColor: '#707073',// color of the base line
		minorGridLineColor: '#505053',
		tickColor: '#707073',// color of increment ticks
		title: {
			style: {
				color: '#A0A0A3'

			}
		}
	},
	yAxis: {
		gridLineColor: '#707073', //color of incremental gridlines
		labels: {
			style: {
				color: '#E0E0E3'// color of labels(y-increments)
			}
		},
		lineColor: '#707073',
		minorGridLineColor: '#505053',
		tickColor: '#707073',//Y- tick details here, change this and increment grid color for 1 even color
		tickWidth: 1,
		title: {
			style: {
				color: '#A0A0A3'//y- label color 
			}
		}
	},
	tooltip: {
		backgroundColor: 'rgba(0, 0, 0, 0.85)',// effects tooltip background color and transpancy
		style: {
			color: '#F0F0F0'// font color within tooltip window
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
			color: '#E0E0E3'//font color of legend items
		},
		itemHoverStyle: {
			color: '#FFF'
		},
		itemHiddenStyle: {
			color: '#606063'//color of a item/stock you want to hide 
		}
	},
	credits: {
		style: {
			color: '#666'// color of highcarts logo in corner
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
			//below changes the color of the options icon
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

//actuall chart init here
$('#stockContainer').highcharts({
	
	title: {
		text: 'BitCoin Comparison'
			},
	xAxis: {
			categories:['Avg Price','Ask','Bid','Price']
		   },

	yAxis: { labels: {
		format: '{value} $',
		style: {
                 color: Highcharts.getOptions().colors[5]
                }
        title: {
        	    text:'Dollar Amount',
        	 	style: {
        	 			color: Highcharts.getOptions().colors[5]
        	 		   }
        	 		   opposite: true
        }
	},
	tooltip: {
            shared: true
        },
	series:[{}]
})})

/*legend: {
            layout: 'vertical',
            align: 'left',
            x: 80,
            verticalAlign: 'top',
            y: 55,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        }*/
