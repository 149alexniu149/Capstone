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


jQuery(function(){ 
	jQuery('#container').highcharts({
		chart:{
			type: 'bar'
			},
			title:{
				text: 'Fruit Consumption'
			},
			xAxis:{
				categories: ['Apples', 'Bananas', 'Oranges']
			},
			yAxis:{
				title:{
					text: 'Fruit eaten'
				}
			},
			series: [{
				name: 'Jane',
				data: [1, 0, 4]
			}, {
					name: 'John',
					data: [5, 7, 3]
				}]
	});
});