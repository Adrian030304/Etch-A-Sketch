
let container = document.querySelector(".container");
let btnReqChange = document.querySelector("#btn-change");
const inputElement = document.createElement('input');

inputElement.type = 'number';

const filterLabel = document.createElement('label')
const filterElement = document.createElement('select');

filterLabel.innerText = "Canvas options:"
filterElement.id = 'filterSelect';
filterLabel.for = 'filterSelect';


btnReqChange.parentElement.appendChild(inputElement);

btnReqChange.parentElement.appendChild(filterLabel)

filterLabel.parentNode.insertBefore(filterElement, filterLabel.nextSibling)


const options = ['Square', 'Blank', 'Round']

options.forEach(option => {
    const o = document.createElement('option')
    o.className = 'optionChoice'
    o.innerText = option
    o.addEventListener("click", event => {event.selected = true;})
    filterElement.appendChild(o)
    }
);



function processOption(option) {

    const cStyles = {}
    const squares = document.querySelectorAll('.grid-box');

    for (grid of squares) {
        if (option.innerText.toLowerCase() === "square") {

            cStyles.borderStyle = 'solid';
            cStyles.borderWidth = '1px';
            
            Object.assign(grid.style, cStyles)

        } else if (option.innerText.toLowerCase() === "blank") {
            
            Object.assign(grid.style, {borderStyle: 'none'})
        } else {

            cStyles.borderStyle = 'solid';
            cStyles.borderWidth = '1px';
            cStyles.borderRadius = '50px'
            Object.assign(grid.style, cStyles)
        }
    }
}





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
    
    Object.assign(container.style, customStyle)

    for (let i = 0; i< size * size; i++) {

        let grid = document.createElement("div");
        grid.className = "grid-box"
        container.appendChild(grid)
        grid.addEventListener("mouseover",function(e){
            e.target.style.backgroundColor = randomColor();
        });
    }

}



btnReqChange.addEventListener("click", function() {
    
    console.log(inputElement.value)
    if (inputElement.value.trim().length === 0 || isNaN(inputElement.value)) {
        alert("Invalid input . Please try again ! ")
        return;
    }
    let size = Number(inputElement.value) > 0 ? Number(inputElement.value) : Math.abs(Number(inputElement.value)) ;
    let selectedOption = filterElement.selectedOptions[0]
    console.log(selectedOption)
    console.log(size)
    if(size > 0 && size <=100){
        sketchPad(size);
        processOption(selectedOption)
    }
    inputElement.value = ''
})
