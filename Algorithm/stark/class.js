class Stark{
constructor(){
    this.storage = {}
    this.count = 0
}

 push(value){
this.storage[this.count] = value
 }
 open(){
     return this.storage
 }
//  size(){
//      return this.count()
//  }
};


const newStack = new Stack();
newStack.push(20)
newStark(40)

console.log(newStack.show());
console.log(newStack.size)