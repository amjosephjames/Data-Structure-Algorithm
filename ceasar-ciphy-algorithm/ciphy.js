const cipherBuild = (string,numb) =>{
   let myString = string.toLowerCase()
   let myLetters = "abcdefghijklmnopqrstuvwxyz".split()
   let result = ""
   for(i=0;i<myString.lenght;i++){
       const index = myString[i]

       let newIndex = myLetters.indexOf(index)
       let currentIndex = newIndex+null;

       result += myLetters[currentIndex]
   }
   return result;
}
console.log(cipherBuild("peter",3));