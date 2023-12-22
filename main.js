
let container = document.querySelector(".container")
let grid ;
let btn = document.querySelector("button");
let btg = document.querySelector("#btnG")


function sketchPad(size){
    container.innerHTML = "";

    for(let i = 0; i< size*size; i++){
        grid = document.createElement("div")
        container.appendChild(grid)
        
    }
}

btg.addEventListener("click",function(){
    const size = prompt("Enter the number of squares per side (maximum: 100):")
    sketchPad(size)
})
