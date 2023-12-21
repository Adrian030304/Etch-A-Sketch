
let container = document.querySelector(".container")
let grid ;
let btn = document.querySelector("button");
let btg = document.querySelector("#btnG")

/*
function sketchPad(nr){
*/

for(let i = 0; i< 36*36; i++){
    grid = document.createElement("div")
    container.appendChild(grid)
}


/*
btg.addEventListener("mouse",function(){
    
    sketchPad(5);
})
*/