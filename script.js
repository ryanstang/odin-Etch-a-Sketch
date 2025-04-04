function createRow(squareCount) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";

    const squareSize = calculateSquareSize(squareCount);

    for (let i=0; i < squareCount; i++) {
        const square = createSquare(squareSize);
        rowDiv.appendChild(square);
    }
    return rowDiv;
}

function calculateSquareSize(squareCount){
    const containerDiv = document.getElementsByClassName("container")[0];
    const containerWidth = containerDiv.clientWidth;
    const containerHeight = containerDiv.clientHeight;

    return ((Math.min(containerWidth, containerHeight) / squareCount) / 2);
    
}

function createSquare(squareSize) {
    const borderSize = 3;

    const squareDiv = document.createElement("div");
    squareDiv.className = "square";
    squareDiv.style.border = `${borderSize}px solid black`
    squareDiv.style.padding = `${squareSize-borderSize}px`;

    squareDiv.addEventListener('mouseenter', ()  => colorChangeWhenHovered(squareDiv));
    squareDiv.addEventListener('mouseleave', ()  => colorChangeWhenunHovered(squareDiv));


    return squareDiv;
}

function colorChangeWhenHovered (squareDiv) {
    squareDiv.style.transition = '';
    squareDiv.style.backgroundColor = 'lightpink';
}

function colorChangeWhenunHovered (squareDiv) {
    squareDiv.style.transition = 'background-color 5s ease-in-out';
    squareDiv.style.backgroundColor = 'white';
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
