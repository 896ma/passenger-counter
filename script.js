


let saveEl=document.getElementById("save-el")

let countEl =document.getElementById("count-el")//pass in arguments
//console.log(countEl)

//function to increment count and display message
let count=0

function increment() {
    count+=1
    countEl.textContent=count
    

}
//Create a function, save(), which logs out the count when it's called
function save(){
    let countStr = count + " - "
     saveEl.textContent += countStr
     countEl.textContent=0
     count=0
     
}
 save()
 
// Create a function that increments the lapsCompleted variable with one
// Run it three times
/*var i
for (i=0;i<=3;i++){
    function laps(){
    i++;
    console.log(i)
   }
}

laps()*/
//Debugging online
// Google:
// innerText alternative mdn