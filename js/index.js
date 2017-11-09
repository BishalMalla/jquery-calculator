//tests
function replaceSymbol(stringData){
  stringData = stringData.replace(/=/g,'');
  stringData = stringData.replace(/x/g,'*');
  stringData=stringData.replace(/÷/g,'/');
  return stringData
}
function calculate(stringData){//3÷0=
  if(stringData[stringData.length-3]==="÷" && stringData[stringData.length-2] ==="0"){
    return 'it is infinite';
  }else{
    stringData = replaceSymbol(stringData);
    stringData= eval(stringData);
    return stringData
  }
}
$(document).ready(function(){
  //getting data after the click in span
  var span = $('span');
  var screen = $('#screen')[0];
  var operator = $('.operator');
  var clear = $('#clear')
  var stringData = "";
  var equals = $('#equals');
  span.on('click',function(event){
    event.preventDefault();
    var target =$(event.target);
    var data =target.context.innerHTML;
    stringData+=data;
    screen.innerHTML = stringData;
  });
  //getting result after clicking equals
  equals.on('click',function(event){//23x4=
    stringData=calculate(stringData);
    screen.innerHTML=stringData;
  });
//clearing the screen after the user clicks 'C'
  clear.on('click',function(event){
    event.preventDefault();
    screen.innerHTML = "";
    stringData="";
  });
});
