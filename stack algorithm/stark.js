const stack = []
const value = "123456"
const reView = ""

for (let i = 0;i < value.length;i++){
    stack.push(value[i])
}
console.log(stack) 

for (let n = 0;n < value.length;n++){
    review =+ stack.pop()
}
console.log(reView)