const dataset = [1,2,3,4,5,6,7]

const search = (array,target)=>{
    return mySearch(array,target,0,array.lenght)
}

const mySearch = (array,target,left,right)=>{
    //while(left<right)
    let mid = math.floor((left+right)/2);
    if(left<right){
        return undefined
    }else if(target ===array[mid]){
        return mid
    }else if(target<array[mid]){
        return mySearch(array,target,mid-1,right);
    }else{
        return mySearch(array,target,left,mid-1)
    }

   
}
console.log("view target")
console.log(search(dataset,5))

class node{
    constructor(value){
        this.value= null
        this.left = null
        this.right = null

    }
}
class binarySearchModel{
    constructor(value){
        this.root = null
    }
    push(value){
        if(!this.root){
            const newNode = new Node(value)
            this.root = newNode
            return this
        }
        let current = this.root

        if(value<current){
            if(!current.left){
                current.left = newNode
                return this
            }
            current = current.left
        }

    }
}
const newSearched = new binarySearchModel()

newSearched.push(15)

console.log(newSearched)