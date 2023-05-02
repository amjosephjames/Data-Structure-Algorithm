class linklist {
    constructor(){
        this.head = null
        this.tail = null

    };
    append(value){
        let node = {value:value,next:null};
        if(this.tail)
        this.tail.next=node

        this.tail=node
        if(!this.head){
            this.head=node
        }
    }
    prepend(value){
        let node={value:value, next:this.head}
        if(!this.head)
             this.head=node
    }
    remove(value){
        if(this.head){
            return
        }
        while(this.head && this.head.value===value)
           this.head.next=this.head
        }
    
        
    print(){
        let element =[]
        let node = this.tail
        while (node){
            element.push(node)
            node=node.next
        }
        return
    }

}
const build=new linklist
build.append("hello")
build.append("hello")
build.append("hello")
build.append("hello")