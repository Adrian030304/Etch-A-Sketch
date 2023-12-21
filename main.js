
let container = document.querySelector(".container")
let grid ;
let btn = document.querySelector("button");
let btg = document.querySelector("#btnG")


function sketchPad(nr){


for(let i = 0; i< nr*nr; i++){
    grid = document.createElement("div")
    container.appendChild(grid)
}
}

btg.addEventListener("click",function(){
    sketchPad(36);
})
