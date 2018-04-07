// Code goes here

function loadChartHOme(){

  var pie = new d3pie("pieChart",{
    header:{
      title:{
        text:"Sales March 2018",
        color:"#ef3d43",
        fontSize:22,
        font:"verdana"
      }
    },
    size:{
      canvasHeight:500,
      canvasWidth: 650
    },
    data:{
      content:[
        {
          label:"Ozzy Osbourne",
          value:2807,
          color:"#6473ce"
        },
        {
          label:"Pink",
          value:1072,
          color:"#f4837d"
        },
        {
          label:"Green Day",
          value:972,
          color:"#00416b"
        },
        {
          label:"Camila Cabello",
          value:380,
          color:"#a3cbef"
        },
        {
          label:"5 Seconds of Summer",
          value:580,
          color:"#01b7ab"
        },
        {
          label:"Halsey",
          value:310,
          color:"#333"
        }
      ]
    },
    labels:{
      outer:{
        pieDistance:35
      },
      mainLabel:{
        font:"verdana",
        color:"#000",
        fontSize: 18
      },
      percentage:{
        color:"#fff",
        font:"verdana",
        decimalPlaces: 0,
        fontSize: 15
      },
      // value:{
      //   color:"blue",
      //   font:"verdana",
      // },
      lines:{
        enabled:!0,
        color:"#000"
      }
    },
    effects:{
      pullOutSegmentOnClick:{
        effect:"linear",
        speed:400,
        size:8
      }
    }
  });
 

} 
  
setTimeout(function(){ loadChartHOme(); }, 1000);

var showChart = function () {
  var element = document.getElementById("charthome");
  element.classList.remove("hide");
};
var hideChart = function () {
  var element = document.getElementById("charthome");
  element.classList.add("hide");
}; 

setTimeout(function(){ 
  document.getElementById("btn-home").addEventListener("click", showChart);
  document.getElementById("btn-add").addEventListener("click", hideChart);
  document.getElementById("btn-search").addEventListener("click", hideChart);
}, 2000); 

function loadObject(){
  return [{"title":"Halsey","image":"https://ssli.ebayimg.com/images/g/oy4AAOSwsW9Y2tRg/s-l1600.jpg","desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","dateEvent":"Thu, Aug 30, 2018 - 7:00pm","location":"Rogers Centre, Toronto ON","price":300},{"title":"Ed Sheeran","image":"https://ssli.ebayimg.com/images/g/4l8AAOSw32lYyHi1/s-l1600.jpg","desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","dateEvent":"Sat, Aug 30, 2018 - 7:00pm","location":"Rogers Centre, Toronto ON","price":260},{"title":"5 Seconds of Summer","image":"https://ssli.ebayimg.com/images/g/Yo8AAOSwfVpYo4aY/s-l1600.jpg","desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","dateEvent":"Sat, Aug 30, 2018 - 7:00pm","location":"Rogers Centre, Toronto ON","price":320},{"title":"Pink","image":"https://ssli.ebayimg.com/images/g/F~EAAOSwNnRYh-WS/s-l1600.jpg","desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","dateEvent":"Thu, Sep 24, 2018 - 7:00pm","location":"Air Canada Centre, Toronto ON","price":310},{"title":"Camila Cabello","image":"https://ssli.ebayimg.com/images/g/gjgAAOSwi1ZZciJ2/s-l1600.jpg","desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","dateEvent":"Thu, Oct 14, 2018 - 7:00pm","location":"Air Canada Centre, Toronto ON","price":120},{"title":"Ozzy Osbourne","image":"https://ssli.ebayimg.com/images/g/mNkAAOSwvKtY~mFO/s-l1600.jpg","desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","dateEvent":"Sat, Sep 30, 2018 - 7:00pm","location":"Budweiser Stage, Toronto ON","price":250}];
}

var myUrl = window.location.href;
//Splitting it with : as the separator
var myarr = myUrl.split("!");

//Then read the values from the array where 0 is the first
console.log(myarr[0]);



  



// new chart 
  
// var data = {
//   labels: [
//     'March 2018'
//   ],
//   series: [
//     {
//       label: 'Pixel',
//       values: [4, 8, 15, 16, 23, 42]
//     },
//     {
//       label: 'Iphone',
//       values: [12, 43, 22, 11, 73, 25]
//     },
//     {
//       label: 'Sumsung',
//       values: [31, 28, 14, 8, 15, 21]
//     },]
// };

// var chartWidth       = 300,
//     barHeight        = 20,
//     groupHeight      = barHeight * data.series.length,
//     gapBetweenGroups = 10,
//     spaceForLabels   = 150,
//     spaceForLegend   = 150;

// // Zip the series data together (first values, second values, etc.)
// var zippedData = [];
// for (var i=0; i<data.labels.length; i++) {
//   for (var j=0; j<data.series.length; j++) {
//     zippedData.push(data.series[j].values[i]);
//   }
// }

// // Color scale
// var color = d3.scale.category20();
// var chartHeight = barHeight * zippedData.length + gapBetweenGroups * data.labels.length;

// var x = d3.scale.linear()
//     .domain([0, d3.max(zippedData)])
//     .range([0, chartWidth]);

// var y = d3.scale.linear()
//     .range([chartHeight + gapBetweenGroups, 0]);

// var yAxis = d3.svg.axis()
//     .scale(y)
//     .tickFormat('')
//     .tickSize(0)
//     .orient("left");

// // Specify the chart area and dimensions
// var chart = d3.select(".chart")
//     .attr("width", spaceForLabels + chartWidth + spaceForLegend)
//     .attr("height", chartHeight);

// // Create bars
// var bar = chart.selectAll("g")
//     .data(zippedData)
//     .enter().append("g")
//     .attr("transform", function(d, i) {
//       return "translate(" + spaceForLabels + "," + (i * barHeight + gapBetweenGroups * (0.5 + Math.floor(i/data.series.length))) + ")";
//     });

// // Create rectangles of the correct width
// bar.append("rect")
//     .attr("fill", function(d,i) { return color(i % data.series.length); })
//     .attr("class", "bar")
//     .attr("width", x)
//     .attr("height", barHeight - 1);

// // Add text label in bar
// bar.append("text")
//     .attr("x", function(d) { return x(d) - 3; })
//     .attr("y", barHeight / 2)
//     .attr("fill", "red")
//     .attr("dy", ".35em")
//     .text(function(d) { return d; });

// // Draw labels
// bar.append("text")
//     .attr("class", "label")
//     .attr("x", function(d) { return - 10; })
//     .attr("y", groupHeight / 2)
//     .attr("dy", ".35em")
//     .text(function(d,i) {
//       if (i % data.series.length === 0)
//         return data.labels[Math.floor(i/data.series.length)];
//       else
//         return ""});

// chart.append("g")
//       .attr("class", "y axis")
//       .attr("transform", "translate(" + spaceForLabels + ", " + -gapBetweenGroups/2 + ")")
//       .call(yAxis);

// // Draw legend
// var legendRectSize = 18,
//     legendSpacing  = 4;

// var legend = chart.selectAll('.legend')
//     .data(data.series)
//     .enter()
//     .append('g')
//     .attr('transform', function (d, i) {
//         var height = legendRectSize + legendSpacing;
//         var offset = -gapBetweenGroups/2;
//         var horz = spaceForLabels + chartWidth + 40 - legendRectSize;
//         var vert = i * height - offset;
//         return 'translate(' + horz + ',' + vert + ')';
//     });

// legend.append('rect')
//     .attr('width', legendRectSize)
//     .attr('height', legendRectSize)
//     .style('fill', function (d, i) { return color(i); })
//     .style('stroke', function (d, i) { return color(i); });

// legend.append('text')
//     .attr('class', 'legend')
//     .attr('x', legendRectSize + legendSpacing)
//     .attr('y', legendRectSize - legendSpacing)
//     .text(function (d) { return d.label; });

