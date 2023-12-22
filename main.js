
let container = document.querySelector(".container")
let grid ;
let btn = document.querySelector("button");
let btg = document.querySelector("#btnG")

const randomColor = () => {
    let r = Math.floor(Math.random()* 256); // Random between 0-255
    let g = Math.floor(Math.random()* 256); // Random between 0-255
    let b = Math.floor(Math.random()* 256); // Random between 0-255
    return `rgb(${r},${g},${b})`
}



function sketchPad(size){
    container.innerHTML = "";

    for(let i = 0; i< size*size; i++){
        grid = document.createElement("div")
        container.appendChild(grid)
        grid.addEventListener("mouseover",function(e){
    
            e.target.style.backgroundColor = randomColor();
        });
    }

}



btg.addEventListener("click",function(){
    const size = prompt("Enter the number of squares per side (maximum: 100):")
    if(size > 0 && size <=100){
    sketchPad(size);
    }else{
        alert("Invalid input . Please try again ! ")
    }
})
