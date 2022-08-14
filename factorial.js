 
 function fact(i){
  if (i == 1){
    return 1;
  }
  return i*fact(i-1);
 }

 const factorial = fact(10);
 console.log(factorial);