function createRow(squareCount) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";

    for (let i=0; i < squareCount; i++) {
        const square = createSquare();
        rowDiv.appendChild(square);
    }
    return rowDiv;
}

function createSquare() {
    const squareDiv = document.createElement("div");
    squareDiv.className = "square";

    squareDiv.addEventListener('mouseenter', ()  => colorChangeWhenHovered(squareDiv));

    return squareDiv;
}

function colorChangeWhenHovered (squareDiv) {
    squareDiv.classList.add('hovered');
}


function createGrid(squareCountPerSide) {
    const containerDiv = document.getElementsByClassName("container")[0];

    for (let i = 0; i < squareCountPerSide; i++){
        const row = createRow(squareCountPerSide);
        containerDiv.appendChild(row);
    }
}

function eraseGrid(){
    const containerDiv = document.getElementsByClassName("container")[0];
    containerDiv.innerHTML = "";
}

function getPlayerCountInput() {
    let playerCountInput;
    while (true) {
        playerCountInput = prompt('Enter number of squares per side count (100 maximum)');
        playerCountInput = Number(playerCountInput);
        if (!isNaN(playerCountInput) && playerCountInput !== null && playerCountInput !== "" && playerCountInput > 0 && playerCountInput <= 100) {
          break;  // Exit the loop if the input is valid
        } else {
          alert("Invalid input. Please enter a valid number under 100.");
        }
      }
    
    eraseGrid();
    createGrid(playerCountInput);
}



// intiate default grid
createGrid(16);
