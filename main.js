
let container = document.querySelector(".container")
let grid ;
let btn = document.querySelector("button");
let btg = document.querySelector("#btnG")
NodeList.prototype.forEach = Array.prototype.forEach;

function sketchPad(nr){

for(let i = 0; i<nr;i++){
    for(let j = 0; j<nr;j++){
        grid = document.createElement("div");
        container.appendChild(grid)
    }
    
    
}

for(const child of container.children){
    child.addEventListener("mouseover", () => {child.style.backgroundColor = "orange";});
    btn.addEventListener("click",() => {child.style.backgroundColor = "";});
}

}
btg.addEventListener("mouse",function(){
    nr = prompt("Input the size of the sketch pad");
    sketchPad(nr)
})
