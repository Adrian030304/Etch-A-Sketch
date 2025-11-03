
let container = document.querySelector(".container");
let btnReqChange = document.querySelector("#btn-change");
let inputElement = document.createElement('input');
let warningMessage = document.createElement('span');
const filterLabel = document.createElement('label')
const filterElement = document.createElement('select');

inputElement.type = 'number';
filterLabel.innerText = "Canvas inner shape options:"
filterElement.id = 'filterSelect';
filterLabel.for = 'filterSelect';

warningMessage.className = 'error'
warningMessage.innerText = ""

btnReqChange.parentElement.appendChild(inputElement);

btnReqChange.parentElement.appendChild(filterLabel);

filterLabel.parentNode.insertBefore(filterElement, filterLabel.nextSibling);
filterElement.parentNode.insertBefore(warningMessage, filterElement.nextSibling);

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
    
    const squares = document.querySelectorAll('.grid-box')

    option = option.innerText.toLowerCase();

    squares.forEach(s => s.classList.add(option));

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
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        border: "4px outset #44444e"
    }
    
    Object.assign(container.style, customStyle)

    for (let i = 0; i < size * size; i++) {

        let grid = document.createElement("div");
        grid.className = "grid-box"
        container.appendChild(grid)
        grid.style.height = `${512 / size}px`;
        grid.style.width = `${512 / size}px`;
        grid.addEventListener("mouseover",function(e){
            e.target.style.backgroundColor = randomColor();
        });
    }

}


btnReqChange.addEventListener("click", function() {
    
    if (warningMessage.innerText.length !== 0) {warningMessage.innerText = '';}
    
    if (inputElement.value.trim().length === 0 || isNaN(inputElement.value.trim())) {
        console.log(inputElement.value)
        warningMessage.innerText = `Error: You inserted the wrong value. It's not valid`
        container.innerHTML = ''
        container.style = ''

    } else {
        let size = Number(inputElement.value) > 0 ? Number(inputElement.value) : Math.abs(Number(inputElement.value)) ;
        let selectedOption = filterElement.selectedOptions[0]

        if(size > 0 && size <=100){
            sketchPad(size);
            processOption(selectedOption)
        }
        inputElement.value = '';
    }

})
