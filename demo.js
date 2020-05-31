function getinput(){
   return document.getElementById("input-value").innerText;

}


function printHistory(num){

  document.getElementById("input-value").innerText = num;


}

function getoutput(){
  return document.getElementById("output-value").innerText;
}

function printOutput(num){
 
  if(num == ""){
document.getElementById("output-value").innerText = num;
  }

  else{
    document.getElementById("output-value").innerText = getformattednumber(num);

  }
 

}



function getformattednumber(num){ 

   if(num=="-"){
     return "";
   }

   var n = Number(num);
   var value = n.toLocaleString("en");
   return value;

}

function reverseNumber(num){

  return Number(num.replace(/,/g,''));

}

var operator = document.getElementsByClassName("operator");

for(var i=0; i<operator.length; i++){
  operator[i].addEventListener('click',function(){
 
     if(this.id == "C"){
       printHistory("");
       printOutput("");
      }

     else if(this.id == "X"){
       var output = reverseNumber(getoutput()).toString();
       if(output) {
         output = output.substr(0,output.length-1);
         printOutput(output);
        }

      }
else 

{

  
    var outputs = getoutput();
    var inputs = getinput();

   
    if(outputs=="" && inputs!=""){
      if(isNaN(inputs[inputs.length-1])){
        inputs = inputs.substr(0,inputs.length-1);
      }


  }

  if(outputs!="" || inputs!=""){
    outputs = outputs==""?outputs:reverseNumber(outputs);
    inputs = inputs+outputs;

    if(this.id == "equal"){
      var result = eval(inputs);
      printOutput(result);
      printHistory("");
    }
    else{

      inputs = inputs + this.id;
      printHistory(inputs);
      printOutput("");
    }

  } 
}
  

  });
}


var number = document.getElementsByClassName("number");


for(var i=0; i<number.length;i++){
 
  number[i].addEventListener('click' , function(){
    var output = reverseNumber(getoutput());

    if(output!=NaN){
      output = output+this.id;
      printOutput(output);
    }
  });


}
