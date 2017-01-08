//FizzBuzz code here
//Define number range of FizzBuzz
var range = 20;

//Define response phrases
var response3 = "Fizz";
var response5 = "Buzz";

//Count numbers in range
  for (n = 1; n <= range; n++) {
    
  //Check if divisible by 3
    if (n % 3 === 0) {     
    //Check if ALSO divisible by 5
      if (n % 5 === 0) {
        //If divisible by both: Print FizzBuzz
          console.log(response3+response5);
      } else {
    //If only divisible by 3: Print Fizz  
      console.log(response3);
        }
    }
    //Check if only divisible by 5
      else if (n % 5 === 0) {
        //If only divisible by 5: Print Buzz
        console.log(response5);
      }
      else {
       //If not divisible by any: Print number
        console.log(n);
      }
}



