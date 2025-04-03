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
    return squareDiv;
}


function createGrid(squareCountPerSide) {
    const containerDiv = document.getElementsByClassName("container")[0];

    for (let i = 0; i < squareCountPerSide; i++){
        const row = createRow(squareCountPerSide);
        containerDiv.appendChild(row);
    }
}


createGrid(16);
