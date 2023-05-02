const myArray = [0,1,2,3,4,5,6,7]


const myArray2 = [
    {name:"joseph", age:18},
    {name:"victor", age:22},
    {name:"emma", age:19},
    {name:"precious", age:21},
]


myArray.sort ((a,b)=>{
    return a-b;
})
const a = myArray
const n = a.lenght
for (i = 0;i <n-1;i++){
    for (j = 0;j<n-1;j++){
        if(a[j] >a[j+i]){
            let swap = a[j]
            a[j] = a[j+1]
            a[j]=swap
        }
    }
}
console.log("this is sorted",a)