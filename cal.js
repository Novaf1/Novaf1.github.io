//Función que realiza la suma
function calculo() {
  var currency = document.calculadora.currency.value;
  var monthtlySaving = document.calculadora.txtCantidad.value;
  var timeInMonths = document.calculadora.txtPlazo.value;
  var frequency = document.calculadora.frequency.value;
  var rate = 0;
  var earnedInterest = 0;
  var plan = "";
  
  if (!currency) {
   currency = "";
  }
  if (!monthtlySaving) {
   monthtlySaving = "";
  }
  if (!timeInMonths) {
   timeInMonths = "";
  }
  if (!frequency) {
   frequency = "";
  }

  if(currency.trim() == "" || monthtlySaving.trim() == "" || timeInMonths.trim() == "" || frequency.trim() == "") {
    return false;
  }

  document.getElementById("spanValidation").style.display = "none";
  document.getElementById("spanResult").style.display = "none";
  
  //COR
  //MINIMO 150 PLAZO 3 MESES
  //DOR 10 
 
 var currencySymbol = currency=="cor" ? "C$" : "$";
 if(currency=="cor"){
   if (monthtlySaving < 150) {
     //alert("El monto debe ser Mayor o igual a 150 cordobas");
     document.getElementById('validationMessage').innerHTML = "El monto debe ser Mayor o igual a 150 cordobas";
     document.getElementById("spanValidation").style.display = "inline";
     document.getElementById("spanResult").style.display = "none";
     return false;
   }
   if (timeInMonths < 3) {
     //alert("El plazo debe ser Mayor o igual a 3 Meses");
     document.getElementById('validationMessage').innerHTML = "El plazo debe ser Mayor o igual a 3 Meses";
     document.getElementById("spanValidation").style.display = "inline";
     document.getElementById("spanResult").style.display = "none";
     return false;
   }

   if(timeInMonths>96){
    document.getElementById('validationMessage').innerHTML = "El plazo debe no puede ser mayor que 96 Meses";
    document.getElementById("spanValidation").style.display = "inline";
    document.getElementById("spanResult").style.display = "none";
    return false;
   }

   //Plan 1 al 6
   if(monthtlySaving >= 150 && monthtlySaving <= 5000){
     //Plan 1
     if(timeInMonths >= 3 && timeInMonths <= 5){
       rate = 0.01;
       plan = 1;
     }
     //Plan 2
     if(timeInMonths >= 6 && timeInMonths <= 11){
       rate = 0.011;
       plan = 2;
     }
     //Plan 3
     if(timeInMonths >= 12 && timeInMonths <= 23){
       rate = 0.0135;
       plan = 3;
     }
     //Plan 4
     if(timeInMonths >= 24 && timeInMonths <= 35){
       rate = 0.0160;
       plan = 4;
     }
     //Plan 5
     if(timeInMonths >= 36 && timeInMonths <= 47){
       rate = 0.0185;
       plan = 5;
     }
     //Plan 5
     if(timeInMonths >= 48 && timeInMonths <= 96){
       rate = 0.0210;
       plan = 6;
     }
   }
   //Plan 7 al 12
   if(monthtlySaving > 5000 && monthtlySaving <= 15000){
     //Plan 7
     if(timeInMonths >= 3 && timeInMonths <= 5){
       rate = 0.01;
       plan = 7;
     }
     //Plan 8
     if(timeInMonths >= 6 && timeInMonths <= 11){
       rate = 0.0135;
       plan = 8;
     }
     //Plan 9
     if(timeInMonths >= 12 && timeInMonths <= 23){
       rate = 0.0185;
       plan = 9;
     }
     //Plan 10
     if(timeInMonths >= 24 && timeInMonths <= 35){
       rate = 0.0235;
       plan = 10;
     }
     //Plan 11
     if(timeInMonths >= 36 && timeInMonths <= 47){
       rate = 0.0260;
       plan = 11;
     }
     //Plan 12
     if(timeInMonths >= 48 && timeInMonths <= 96){
       rate = 0.0285;
       plan = 12;
     }
   } else
   //Plan 13 al 18
   if(monthtlySaving > 15000){
     //Plan 13
     if(timeInMonths >= 3 && timeInMonths <= 5){
       rate = 0.0165;
       plan = 13;
     }
     //Plan 14
     if(timeInMonths >= 6 && timeInMonths <= 11){
       rate = 0.0215;
       plan = 14;
     }
     //Plan 15
     if(timeInMonths >= 12 && timeInMonths <= 23){
       rate = 0.0240;
       plan = 15;
     }
     //Plan 16
     if(timeInMonths >= 24 && timeInMonths <= 35){
       rate = 0.0290;
       plan = 16;
     }
     //Plan 17
     if(timeInMonths >= 36 && timeInMonths <= 47){
       rate = 0.0315;
       plan = 17;
     }
     //Plan 18
     if(timeInMonths >= 48 && timeInMonths <= 96){
       rate = 0.0340;
       plan = 18;
     }
   }
 }
 if(currency=="usd"){
   if (monthtlySaving < 10) {
     //alert("El monto debe ser Mayor o igual a 10 dolares");
     document.getElementById('validationMessage').innerHTML = "El monto debe ser Mayor o igual a 10 dolares";
     document.getElementById("spanValidation").style.display = "inline";
     document.getElementById("spanResult").style.display = "none";
     return false;
   }
   if (timeInMonths < 3) {
     //alert("El plazo debe ser Mayor o igual a 3 Meses");
     document.getElementById('validationMessage').innerHTML = "El monto debe ser Mayor o igual a 10 dolares";
     document.getElementById("spanValidation").style.display = "inline";
     document.getElementById("spanResult").style.display = "none";
     return false;
   }
   if(timeInMonths>96){
    document.getElementById('validationMessage').innerHTML = "El plazo debe no puede ser mayor que 96 Meses";
    document.getElementById("spanValidation").style.display = "inline";
    document.getElementById("spanResult").style.display = "none";
    return false;
   }
   //Plan 1 al 6
   if(monthtlySaving >= 10 && monthtlySaving <= 200){
     //Plan 1
     if(timeInMonths >= 3 && timeInMonths <= 5){
       rate = 0.0075;
       plan = 1;
     }
     //Plan 2
     if(timeInMonths >= 6 && timeInMonths <= 11){
       rate = 0.0085;
       plan = 2;
     }
     //Plan 3
     if(timeInMonths >= 12 && timeInMonths <= 23){
       rate = 0.0100;
       plan = 3;
     }
     //Plan 4
     if(timeInMonths >= 24 && timeInMonths <= 35){
       rate = 0.0135;
       plan = 4;
     }
     //Plan 5
     if(timeInMonths >= 36 && timeInMonths <= 47){
       rate = 0.0160;
       plan = 5;
     }
     //Plan 6
     if(timeInMonths >= 48 && timeInMonths <= 96){
       rate = 0.0185;
       plan = 6;
     }
   }
   //Plan 7 al 12
   if(monthtlySaving > 200 && monthtlySaving <= 500){
     //Plan 7
     if(timeInMonths >= 3 && timeInMonths <= 5){
       rate = 0.0075;
       plan = 7;
     }
     //Plan 8
     if(timeInMonths >= 6 && timeInMonths <= 11){
       rate = 0.0110;
       plan = 8;
     }
     //Plan 9
     if(timeInMonths >= 12 && timeInMonths <= 23){
       rate = 0.0160;
       plan = 9;
     }
     //Plan 10
     if(timeInMonths >= 24 && timeInMonths <= 35){
       rate = 0.0210;
       plan = 10;
     }
     //Plan 11
     if(timeInMonths >= 36 && timeInMonths <= 47){
       rate = 0.0235;
       plan = 11;
     }
     //Plan 12
     if(timeInMonths >= 48 && timeInMonths <= 96){
       rate = 0.0260;
       plan = 12;
     }
   } else 
   //Plan 13 al 18
   if(monthtlySaving > 500){
     //Plan 13
     if(timeInMonths >= 3 && timeInMonths <= 5){
       rate = 0.0150;
       plan = 13;
     }
     //Plan 14
     if(timeInMonths >= 6 && timeInMonths <= 11){
       rate = 0.0190;
       plan = 14;
     }
     //Plan 15
     if(timeInMonths >= 12 && timeInMonths <= 23){
       rate = 0.0215;
       plan = 15;
     }
     //Plan 16
     if(timeInMonths >= 24 && timeInMonths <= 35){
       rate = 0.0265;
       plan = 16;
     }
     //Plan 17
     if(timeInMonths >= 36 && timeInMonths <= 47){
       rate = 0.0290;
       plan = 17;
     }
     //Plan 18
     if(timeInMonths >= 48 && timeInMonths <= 96){
       rate = 0.0315;
       plan = 18;
     }
   }
 }
 if(frequency=="2"){
   timeInMonths = timeInMonths*2;
 } 
 else
   {
     timeInMonths = timeInMonths*1;
   }
 try{
   
    //Calculamos la frecuencia
      monthtlySaving = (isNaN(parseInt(monthtlySaving)))? 0 : parseInt(monthtlySaving);
    timeInMonths = (isNaN(parseInt(timeInMonths)))? 0 : parseInt(timeInMonths);
   var capital = monthtlySaving*timeInMonths;
   var result = 0;
   //Calculamos Intereses
   earnedInterest =capital*rate*timeInMonths;
   result = parseFloat(capital + earnedInterest).toFixed(2) ;
   document.getElementById('AhorroFinal').innerHTML=formatCurrency(result.toString(),currencySymbol);
   document.getElementById('IdPlan').innerHTML= "PLAN " + plan.toString();
   document.getElementById("spanValidation").style.display = "none";
   document.getElementById("spanResult").style.display = "inline";
  }
  //Si se produce un error no hacemos nada
  catch(e) {}
}

function formatCurrency(number, currency) {
 var input_val = number;
 
 if (input_val === "") { return; }

 var original_len = input_val.length;

 if (input_val.indexOf(".") >= 0) {
   var decimal_pos = input_val.indexOf(".");
   var left_side = input_val.substring(0, decimal_pos);
   var right_side = input_val.substring(decimal_pos);

   left_side = formatNumber(left_side);
   right_side = formatNumber(right_side);
   right_side += "00";
   right_side = right_side.substring(0, 2);
   input_val = currency + left_side + "." + right_side;
 } else {
   input_val = formatNumber(input_val);
   input_val = currency + input_val;
   input_val += ".00";
 }
 return input_val;
}
function formatNumber(number) {
  return number.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
 }