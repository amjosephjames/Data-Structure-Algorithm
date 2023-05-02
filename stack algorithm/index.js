// let stackMethod = (n)=>{
//     const stark = []
//     let review=""
// }
// for (let i=0;i< value.length;i++){
//     stark.push(value[i])
// }
// console.log(stark)
// for (let n = 0;n < value.length;n++){
//     review =+ stack.pop()
// }
// console.log(reView)tack

class Stack{
    constructor(){
        this.storage={}
        this.count = 0
    }
    add(value){
        this.storage[this.count]=value
        this.count++
    }
    print(){
        return this.storage[this.count-1]
    }
    array(){
        let data = this.storage
        let loggie = []

        for(const k in data){
            loggie.push(data[k])
        }
    }
    size(){
        return this.count
    }
    peek(){
        return this.storage[this.count-1]

    }
    remove(){
        if(this.count ===0){
            return null
        }
        this.count--

        return this.storage[this.count]
    }
}

const stack = new Stack()

stack.add("joseph")
stack.add("james")
stack.add("lucia")
stack.add("dickson")
stack.add("victor")
stack.remove()

console.log(stack.print())
console.log(stack.size())
console.log(stack.peek())

// queee algorithm



let name = []
let newName = "joseph"
let checkName = ""

for (let i = 0; i<newName.length;i++){
    name.push(newName[i])
}

console.log(name)
console.log(checkName)

for (let i=0;i<newName.length;i++){
    checkName += name.shift()
}


console.log(name)
console.log(checkName)

class queue{
    constructor(){
        this.storage = {}
        this.count = 0
    }
    push(value){
        
    }
}



