let dataStructure = [];
let selectedDataStructure = "stack";

function selectDataStructure() {
    selectedDataStructure = document.getElementById("dataStructureSelect").value;
    dataStructure = []; 
    displayDataStructure();
}

function push() {
    let inputValue = document.getElementById('dataInput').value;
    if (inputValue !== '') {
        if (selectedDataStructure === "stack") {
            dataStructure.push(inputValue); // Push to the end for both stack and queue
        } else if (selectedDataStructure === "queue") {
            dataStructure.push(inputValue); // Push to the end for queue
        }
        displayDataStructure();
    } else {
        alert('Please enter a value.');
    }
}

function pop() {
    if (dataStructure.length === 0) {
        alert('Data structure is empty.');
    } else {
        if (selectedDataStructure === "stack") {
            dataStructure.pop(); // Pop from the end for stack
        } else if (selectedDataStructure === "queue") {
            dataStructure.shift(); // Remove from the beginning for queue
        }
        displayDataStructure();
    }
}


function displayDataStructure() {
    let dataDisplay = document.getElementById('dataDisplay');
    dataDisplay.innerHTML = '';
    for (let i = 0; i < dataStructure.length; i++) {
        let item = document.createElement('div');
        item.textContent = dataStructure[i];
        dataDisplay.appendChild(item);
    }
}
