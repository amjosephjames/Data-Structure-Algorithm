let name = prompt("what is your name")
console.log(`oh what is your name${name}`)

let luckNumb = math.floor(math.random() *10)
while(true){
    let quessNumb = parseInt(prompt("what is your name"));

    if(luckyNumb === quessNumb){
        console.log("congrats.....you quess right!");
        break;
    }
    else if(luckyNumb > quessNumb){
        console.log("oops...you are wrong")
    }
}