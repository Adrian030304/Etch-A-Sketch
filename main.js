
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
    /*
    for(let i = 0; i<size;i++){
        grid = document.createElement("div")
        container.appendChild(grid)
        for(let j = 0; j<size;j++){
            grid = document.createElement("div")
            container.appendChild(grid)
        }
    }
   */
}

btg.addEventListener("click",function(){
    const size = prompt("Enter the number of squares per side (maximum: 100):")
    if(size > 0 && size <=100){
    sketchPad(size);
    }else{
        alert("Invalid input . Please try again ! ")
    }
})
