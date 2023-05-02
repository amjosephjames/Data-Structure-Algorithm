console.log("hello from hash..!")

function hashTable(size){
    this.bucket = Array(size)
    this.bucketLenght = this.bucket.length;
}

function hashNode(key,value,next){
    this.key = key
    this.value = value
    this.next = next
}

hashTable.propotype.hashing = function(key){
    let position = null;
    for(i=0;i<key.length;i++){
        position +=key.charCodeAt(i)
    }
    let output = position % this.bucketLength;
    return output


}
const myHashTable = new hashTable(30)

console.log(myHashTable.hashing("peter"));






//charCodeAt

// let a = "p"
// let al = "p"
// console.log(a.charCodeAt())

