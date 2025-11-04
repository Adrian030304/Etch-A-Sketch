
let container = document.querySelector(".container");
let btnReqChange = document.querySelector("#btn-change");
let inputElement = document.createElement('input');
let warningMessage = document.createElement('span');
const filterLabel = document.createElement('label')
const filterElement = document.createElement('select');
const fieldSet = document.createElement('fieldset');


const legendElement = document.createElement('legend');
legendElement.innerText = "Choose your brush size: "

function mount(first_element, second_element) {
    const div = document.createElement('div');
    div.className = 'test'
    div.innerHTML = `${first_element.outerHTML} ${second_element.outerHTML}`
    console.log(div)
    return div;
}

const createInputElement = (input_id, input_type) => {
    let r = document.createElement('input');
    r.id = input_id;
    r.type = input_type;
    return r;
}

const createLabel = (label_for, inner_text) => {
    let l = document.createElement('label');
    l.htmlFor  = label_for;
    l.innerText = inner_text;
    return l;
}

radio1 = createInputElement('radio1', 'radio')
radio2 = createInputElement('radio2', 'radio')

radio1.value = 'singular';
radio2.value = 'multi';

radio1.name = 'brushSize'
radio2.name = 'brushSize'

labelSingular = createLabel('radio1', 'Singular')
labelMulti = createLabel('radio2', 'Multi')

let small_brush = mount(radio1, labelSingular)
let bigger_brush = mount(radio2, labelMulti)

fieldSet.appendChild(legendElement);
fieldSet.appendChild(small_brush);
fieldSet.appendChild(bigger_brush)

inputElement.type = 'number';
inputElement.placeholder = ' (1 - 100) '
filterLabel.innerText = "Canvas inner shape options:"
filterElement.id = 'filterSelect';
filterLabel.for = 'filterSelect';

warningMessage.className = 'error'
warningMessage.innerText = ""

btnReqChange.parentElement.appendChild(inputElement);

btnReqChange.parentElement.appendChild(filterLabel);

filterLabel.parentNode.insertBefore(filterElement, filterLabel.nextSibling);
filterElement.parentNode.insertBefore(warningMessage, filterElement.nextSibling);
warningMessage.parentNode.insertBefore(fieldSet, warningMessage.nextSibling);




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

    // for (let i = 0; i < size * size; i++) {

    //     let grid = document.createElement("div");
    //     grid.className = "grid-box"
    //     container.appendChild(grid)
    //     grid.style.height = `${512 / size}px`;
    //     grid.style.width = `${512 / size}px`;
    //     grid.addEventListener("mouseover",function(e){
    //         e.target.style.backgroundColor = randomColor();
    //         console.log(e)
    //         console.log(e.target)
    //     });
    // }

    let j = 0;
    while (j < size * size) {
        let grid = document.createElement("div");
        grid.className = "grid-box"
        container.appendChild(grid)
        grid.style.height = `${512 / size}px`;
        grid.style.width = `${512 / size}px`;
        j++;
    }

    let grids = document.querySelectorAll('.grid-box')

    for(let i = 0; i < size * size - size; i++) {
        grids[i].addEventListener("mouseover",function(){
            
            if (i - size  >= 0) { grids[i - size].style.backgroundColor = randomColor(); }
            grids[i].style.backgroundColor = randomColor();
            grids[i+size].style.backgroundColor = randomColor();

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
