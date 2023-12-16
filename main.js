
let container = document.querySelector(".container")
let grid ;
let btn = document.querySelector("button");
NodeList.prototype.forEach = Array.prototype.forEach;


for(let i = 0; i<16;i++){
    for(let j = 0; j<16;j++){
        grid = document.createElement("div");
        container.appendChild(grid)
    }
    
    
}

for(const child of container.children){
    child.addEventListener("mouseover", () => {child.style.backgroundColor = "orange";});
    btn.addEventListener("click",() => {child.style.backgroundColor = "";});
}

