
var operation; 
var result; 
var inputValue; 

const buttonSum = document.getElementById('sum'); 
const buttonDivide = document.getElementById('divide'); 
const buttonSubstraction = document.getElementById('substraction'); 
const buttonMultiply = document.getElementById('multiply'); 
const buttonEquals = document.getElementById('equals'); 
const input = document.getElementById('input'); 
const showResultField = document.getElementById('result'); 

const setOperation = (event)=> {
   inputValue= parseInt(input.value);
   input.value='';
   if(!result){
      result=inputValue;
   }else{
      calculate();
   }
   operation = event.target.id;
}


const calculate = () => {
   if (operation === 'sum') {
      result = result + inputValue;
   } else if (operation === 'divide') {
      result = result / inputValue;
   } else if (operation === 'substraction') {
      result = result - inputValue;
   } else {
      result = result * inputValue;
   }
}

const finalCalculation = () => {
   inputValue= parseInt(input.value);
   calculate(); 
  showResultField.textContent = result;  
  result=undefined;
   input.value='';
}

buttonSum.addEventListener('click', setOperation); 
buttonDivide.addEventListener('click', setOperation); 
buttonSubstraction.addEventListener('click', setOperation); 
buttonMultiply.addEventListener('click', setOperation); 
buttonEquals.addEventListener('click', finalCalculation); 





var category =  {
   standard: 100,
   juniorSuite: 120,
   suite: 150,
   }
   
   var roomOccupancy = {
      individual:0.75,
      double: 1.00, 
      triple: 1.25,
   }
   
   const getBooking = () => {
   var order = {}; 
   order.category = document.getElementById('cat').value; 
   order.occupancy = document.getElementById('occupancy').value; 
   order.spa = document.getElementById('spa').checked; 
   order.nights = document.getElementById('nights').value; 
   order.carNights = document.getElementById('carNights').value; 
   return order; 
   }
   
   const calculateTotal = () => {
   var reservation = getBooking(); 
   var total = category[reservation.category]; 
   if (reservation.spa) {
      total = total + 20; 
   } 
   total = total * roomOccupancy[reservation.occupancy] * reservation.nights; 
   if (reservation.carNights) {
      total = total + reservation.carNights * 10; 
   }
   document.getElementById('showResult').textContent = total; 
   }
   document.getElementById('calculate').addEventListener('click', calculateTotal); 
   
   
   
   