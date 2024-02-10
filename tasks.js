// Task 1
var age=18;
function checkVotingEligibility(age) {
if (age>=18 ) {console.log("You are eligible for voting,");
  
}
else{console.log("You are not eligible for voting.");

}
}

// Task 2
var i=1;
function printNumbersWithWhile(i) {
  
  while (i<6) { console.log(i);
  i++; 
  } 

}

// Task 3
function printEvenNumbersWithFor(i) {
for (var i=2 ; i<11 ; i+2)
console.log(i);
}




// Task 4
var f=4;
function getDayOfWeek() {
  
  switch (f) {
    case 1:console.log('sunday');
      
      break;
      case 2:console.log('monday');

      break;
      case 3:console.log('tuesday');
      break;
      case 4:console.log('wednsday');
      break;
      case 5:console.log('thersday');
      break;
      case 6:console.log('friday');
      break;
      case 7:console.log('satrday');
      break;
  
    default: console.log('Error');
      break;
  }

}

// Task 5
function sum() {
var num1='fatma';
var num2='amna';
var sum=num1+num2;
}

// Task 6
//Uncomment and solve
// const fruits = ;
function fruits(){
  var array=['apple','banana','kiwi','orange']
  console.log(array);
}
module.exports = {
  checkVotingEligibility,
  printNumbersWithWhile,
  printEvenNumbersWithFor,
  getDayOfWeek,
  sum,
  fruits,
};
