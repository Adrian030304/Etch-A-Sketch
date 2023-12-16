let container = document.querySelector(".container")
let grid ;
for(const child of container.children){
    child.addEventListener("mouseover", () => {child.style.backgroundColor = "orange";});

}
for(let i = 0; i<16;i++){
    for(let j = 0; j<16;j++){
        grid = document.createElement("div");
        container.appendChild(grid)
    }
    
    
}


