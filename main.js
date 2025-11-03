
let container = document.querySelector(".container");
let grid ;
let btnReqChange = document.querySelector("#btn-change");
const inputElement = document.createElement('input');
inputElement.type = 'number';

const filterElement = document.createElement('select');


btnReqChange.parentElement.appendChild(inputElement);
btnReqChange.parentElement.appendChild(filterElement)

const options = ['None', 'Square', 'Round']

options.forEach(option => {
    const o = document.createElement('option')
    o.innerText = option
    filterElement.appendChild(o)
})







const randomColor = () => {
    let r = Math.floor(Math.random()* 256); // Random between 0-255
    let g = Math.floor(Math.random()* 256); // Random between 0-255
    let b = Math.floor(Math.random()* 256); // Random between 0-255
    return `rgb(${r},${g},${b})`
}



function sketchPad(size){
    container.innerHTML = "";
    const customStyle = {
        gridTemplateColumns: `repeat(${size}, auto)`,
        border: "4px outset #44444e"
    }
    // container.style.gridTemplateColumns = customStyle.gridTemplateColumns
    // container.style.border = customStyle.border
    // container.style = {...customStyle}
    Object.assign(container.style, customStyle)

    for(let i = 0; i< size*size; i++){
        grid = document.createElement("div")
        container.appendChild(grid)
        grid.addEventListener("mouseover",function(e){
    
            e.target.style.backgroundColor = randomColor();
        });
    }

}



btnReqChange.addEventListener("click",function(){
    // const size = prompt("Enter the number of squares per side (maximum: 100):")
    console.log(inputElement.value)
    if (inputElement.value.trim().length === 0 || isNaN(inputElement.value)) {
        alert("Invalid input . Please try again ! ")
        return;
    }
    let size = Number(inputElement.value) > 0 ? Number(inputElement.value) : Math.abs(Number(inputElement.value)) ;
    console.log(size)
    if(size > 0 && size <=100){sketchPad(size);}
    inputElement.value = ''
})
