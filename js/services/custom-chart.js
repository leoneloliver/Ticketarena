function loadChartHOme(){

  var newChart;
  if(localStorage.chartItem){
    newChart = JSON.parse(window.localStorage.getItem('chartItem'));
  }else{
    var json = JSON.parse(window.localStorage.getItem('concerts'));
    str = JSON.stringify(json);
    str = str.replace(/\"title\":/g, "\"label\":");
    str = str.replace(/\"qtd\":/g, "\"value\":");
    json = JSON.parse(str);
    window.localStorage.setItem('chartItem', JSON.stringify(json));
    newChart = JSON.parse(window.localStorage.getItem('chartItem'));
  }

  document.getElementById("pieChart").innerHTML = "";


  var pie = new d3pie("pieChart",{
    header:{
      title:{
        text:"Tickets Availability",
        color:"#ef3d43",
        fontSize:22,
        font:"verdana"
      }
    },
    size:{
      canvasHeight:500,
      canvasWidth: 680
    },
    data:{
      content: newChart
    },
    labels:{
      outer:{
        pieDistance:35
      },
      mainLabel:{
        font:"verdana",
        color:"#fff",
        fontSize: 15
      },
      percentage:{
        color:"#fff",
        font:"verdana",
        decimalPlaces: 0,
        fontSize: 15
      },
      lines:{
        enabled:!0,
        color:"#efefef"
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

function loadObject(){
  return [{"title":"Halsey","image":"https://ssli.ebayimg.com/images/g/oy4AAOSwsW9Y2tRg/s-l1600.jpg","desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","dateEvent":"Thu, Aug 30, 2018 - 7:00pm","location":"Rogers Centre, Toronto ON","price":300,"qtd":100},{"title":"Ed Sheeran","image":"https://ssli.ebayimg.com/images/g/4l8AAOSw32lYyHi1/s-l1600.jpg","desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","dateEvent":"Sat, Aug 30, 2018 - 7:00pm","location":"Rogers Centre, Toronto ON","price":260,"qtd":110},{"title":"5 Seconds of Summer","image":"https://ssli.ebayimg.com/images/g/Yo8AAOSwfVpYo4aY/s-l1600.jpg","desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","dateEvent":"Sat, Aug 30, 2018 - 7:00pm","location":"Rogers Centre, Toronto ON","price":320,"qtd":130},{"title":"Pink","image":"https://ssli.ebayimg.com/images/g/F~EAAOSwNnRYh-WS/s-l1600.jpg","desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","dateEvent":"Thu, Sep 24, 2018 - 7:00pm","location":"Air Canada Centre, Toronto ON","price":310,"qtd":90},{"title":"Camila Cabello","image":"https://ssli.ebayimg.com/images/g/gjgAAOSwi1ZZciJ2/s-l1600.jpg","desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","dateEvent":"Thu, Oct 14, 2018 - 7:00pm","location":"Air Canada Centre, Toronto ON","price":120,"qtd":80},{"title":"Ozzy Osbourne","image":"https://ssli.ebayimg.com/images/g/mNkAAOSwvKtY~mFO/s-l1600.jpg","desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","dateEvent":"Sat, Sep 30, 2018 - 7:00pm","location":"Budweiser Stage, Toronto ON","price":250,"qtd":300}];
}


