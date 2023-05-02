
// let value = ["1,2,3,4,5,6,7,8,9"]

// for(let i=0;i>=0;i--){
//     console.log(value)
// }
// const count  = (n) =>{
//     for(i=n;i>=0;i--){
//         console.
//     }
// }

const recall = (n)=>{
    if(n===0){
        return;
    }
    console.log(n)
    return recall(n-1)
}
console.log("this is recall", recall(100))