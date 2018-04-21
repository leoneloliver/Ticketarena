
var myUrl = window.location.href;
//Splitting it with : as the separator
var myarr = myUrl.split("!");

//Then read the values from the array where 0 is the first
console.log('first page router: '+myarr[1]);

if((myarr[1]=='/search') || (myarr[1]=='/new-product')){
  hideChart();
}



