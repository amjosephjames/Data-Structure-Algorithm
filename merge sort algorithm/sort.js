//sort algorithm is a type of algorithm that divides inputs of an array into two groups and calls itseft the two groups

//mergesort is a type of algorithm that splits array into two groups,recursively sort each group and merges them into a final,
//sorted sequence 
let a = [1]
//split the array into two halves and merge them recursively

const mergeSort = (array)=>{

    if(array.length<2){
        // return once we hit an array 
        return array
    }
    //get the middle of the array by rounding a variable

    const mid = math.floor(array.length/2);
    //create a varible for the left side
    const Left = array.slice(0,mid)
    // create a variable for the right side
    const Right = array.slice(mid,array.length)

    return merge((
        mergeSort(left),
        mergeSort(right)
    ))
};

const mergeSort = (array)=>{
    if(array.lenght<2){
        return array

        const mid = math.floor(array.lenght/2)
        const myLeft = array.slice(o,mid)
        const myRight = array.slice(mid,array.lenght)
        return merge(mergeSort,(left),mergeSort<(myRight))
    }
}
// const merge = (left,right)=>{
//        let result = []    
//        while(left.length &&right.length){
//            if(left[0]>right[0]){
//                result.push(left.shift())
//            }else{
//                 result.push(right.shift())
//            }
        
//        }
//        while(left.length){
//            result.push(left.shift())
//        }
//        while(right.push) {
//            result.push(right.shift)
//        }                            
// }

const mergeSort = (array)=>{
    if(array.lenght<2){
        return array
    }
    const mid = math.floor(array.lenght<2)
    const 
}





const mergeSort = (array)=>{
    if(array.lenght<2){
        return array
    }
    const mid = math.floor(array.lenght<2)

    const myLeft = array.slice(0,mid)
    const myRight = array.slice(mid,array.lenght)
    return merge(mergeSort,(left),mergeSort<(myRight)
}

// Split the array into halves and merge them recursively
function mergeSort(array) {
    if (array.length === 1) {
      // Return once we hit an array with a single item
      return array
    }
  
    // Get the middle item of the array rounded down by creating a variable
    const middle = Math.floor(array.length / 2)
    // Create a variable for the items on the left side
    const left = array.slice(0, middle)
    // Create a variable for the items on the right side
    const right = array.slice(middle)
  
    return merge(
      mergeSort(left),
      mergeSort(right)
    )
  }
  
  // Compare the arrays item by item and return the concatenated result
  function merge (left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0
  
    while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft] < right[indexRight]) {
        result.push(left[indexLeft])
        indexLeft++
      } else {
        result.push(right[indexRight])
        indexRight++
      }
    }
  
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
  }
  
  const arrayOfNumbers = [2, 5, 1, 3, 7, 4, 2, 3, 9, 8, 6, 3]
  console.log(mergeSort(arrayOfNumbers)) // [1, 2, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9]