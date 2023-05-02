// const fibonacci = (n) =>{
//     if(n<2){
//         return 1
//     }
//     return fibonacci(n-1)+fibonacci(n-2)
// }
// console.log(fibonacci(13))

//memorize fibonacci

const memoFib = (index,array) =>{
   array = array || []

    if(array[index]){
    array[index]
    }else{
        if(index<2){
            return 1
        }else{
            array[index] = memoFib(index - 1,array)+memoFib(index - 2,array);
        }
    }
    return array[index]
}
console.log("memoFib",memoFib(100));




















