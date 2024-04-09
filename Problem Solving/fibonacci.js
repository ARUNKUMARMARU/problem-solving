// Explain the Fibonacci series and write a function to generate the first n numbers in the Fibonacci sequence.


// Explanation

// The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1. 

fibonacci=(n)=>{
    let fibo = [0,1];  
    

    for(var i=2;i<n; i++){
        fibo[i] = fibo[i-2] + fibo[i-1];
       
    }
    console.log(fibo)
}


//fibonacci(5);