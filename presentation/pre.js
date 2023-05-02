//a sort algorithm is a type of algorithm that arranges element in alist in an order,either by ascending or descending
//a bubble sort algorithm is an algorithm that repeatedly steps element in a list com[ares the two element amd swaps them if they are in the wrong position

let myArray = [1,3.2,4,5,6,7]

let nyArray2 = [
    {name:"joseph",age:23},
    {name:"josiah",age:25},
    {name:"joshua",age:29},
    {name:"jerry",age:26},
]
myArray.sort((a,b)=>{
    return a-b
})
let a = myArray
let n = a.length

for(i=0;i<n-1;i++){
    for(j=0;j<n-1;j++){
        if(a[j]<a[j+1]){
            let swap = a[j]
            a[j] = a[j+1]
            a[j] = swap
        }
    }
    
}
console.log("this is sorted"+a)


