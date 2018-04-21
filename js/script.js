setTimeout(function(){ 
  var myUrl = window.location.href;
  //Splitting it with : as the separator
  var myarr = myUrl.split("!");
  
  //Then read the values from the array where 0 is the first
  console.log('first page router: '+myarr[1]);

  var showChart = function () {
    var element = document.getElementById("charthome");
    element.classList.remove("hide");
    // setTimeout(function(){ onSearch();; }, 1000);
  };
  var hideChart = function () {
    var element = document.getElementById("charthome");
    element.classList.add("hide");
    // setTimeout(function(){ onSearch();; }, 1000);
  }; 
  
  if((myarr[1]=='/search') || (myarr[1]=='/new-product')){
    hideChart();
  }
  
  document.getElementById("btn-home").addEventListener("click", showChart);
  document.getElementById("btn-add").addEventListener("click", hideChart);
  document.getElementById("btn-search").addEventListener("click", hideChart);

}, 1000); 

//equalizer
function equalizeIt(mainEl){
  let elMaxHeight = 0;
  const className = mainEl;
  const elTobeEqualized = document.getElementsByClassName(className);
  let iterAct;
  for (iterAct = 0; iterAct < elTobeEqualized.length; iterAct++) {
    if (elTobeEqualized[iterAct].offsetHeight > elMaxHeight) { 
      elMaxHeight = elTobeEqualized[iterAct].offsetHeight;  
    } 
  }
  for (let iAct= 0; iAct < elTobeEqualized.length ; iAct++) { 
     elTobeEqualized[iAct].style.height = elMaxHeight+"px";
  }
}

const divName = 'product';
setTimeout(function(){ equalizeIt(divName); }, 1000);

//extend function for keep responsive
function cleanHeight(mainEl){
  const className = mainEl;
  const elTobeEqualized = document.getElementsByClassName(className);
  for (let iAct= 0; iAct < elTobeEqualized.length ; iAct++) { 
     elTobeEqualized[iAct].style.height = "auto";
  }
}

//when chage the size of screen
document.body.onresize = function(){
  cleanHeight(divName);
  equalizeIt(divName);
}