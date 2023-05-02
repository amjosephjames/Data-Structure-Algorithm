const harmless = (testnote,speechnote) =>{
    let dataset = speechnote.split("");
    let testData = testnote.toLowerCase().split("")

    let dataobj = {}

    dataset.forEach(word=>{
        if(!dataobj[word]){
            dataobj[word]++
        }
    });
    let check = true
    testset.forEach(word=>{
        if(dataobj[word]){
            dataobj[word]--
      
        }
    })
    return dataobj
};

console.log(harmless("","this is a boy and the boy love to play so give the boy a break"))









