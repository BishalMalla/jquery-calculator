var span = $('span');
var screen = $('#screen')[0];
var operator = $('.operator');
var clear = $('#clear')
var stringData = "";
var equals = $('#equals');
$(document).ready(function(){
  //getting data after the click in span
  span.on('click',function(event){
    event.preventDefault();
    var target =$(event.target);
    var data =target.context.innerHTML;
    stringData+=data;
    screen.innerHTML = stringData;
  });
  //getting result after clicking equals
  equals.on('click',function(event){//23x4=
    stringData = stringData.substring(0,stringData.length-1);
    for(let i=0;i<stringData.length;i++){
      if(stringData[i]==='x'){
        stringData = stringData.replace(/x/g,'*');
      }
      if(stringData[i]==='÷'){
        stringData=stringData.replace(/÷/g,'/');
    }
  }
    var result= eval(stringData);
    stringData=result;
    screen.innerHTML=result;
  });
//clearing the screen after the user clicks 'C'
  clear.on('click',function(event){
    event.preventDefault();
    screen.innerHTML = "";
    stringData="";
  });
});
