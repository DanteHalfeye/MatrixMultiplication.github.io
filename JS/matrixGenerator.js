function generateRandomMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(Math.floor(Math.random() * 25) - 12);  // Random values between -12 and 12
        }
        matrix.push(row);
    }
    return matrix;
}

function displayMatrix(matrix, matrixName) {
    let html = `<div class="matrix"><h3>${matrixName}</h3><table>`;
    matrix.forEach(row => {
        html += '<tr>';
        row.forEach(value => {
            html += `<td>${value}</td>`;
        });
        html += '</tr>';
    });
    html += '</table></div>';
    return html;
}

function generateProblems() {
    const problemArea = document.getElementById('problem-area');
    problemArea.innerHTML = ''; // Clear previous problems
    const amount = document.getElementById('amount').value;

    for (let d = 0; d < amount; d++) {
        // Random dimensions
        const n = Math.floor(Math.random() * 5) + 2; // Rows for matrix 1
        const m = Math.floor(Math.random() * 5) + 2; // Cols for matrix 1 and rows for matrix 2
        const k = Math.floor(Math.random() * 5) + 2; // Cols for matrix 2

        const matrixOne = generateRandomMatrix(n, m);
        const matrixTwo = generateRandomMatrix(m, k);

        // Random row/column for multiplication task
        const rowNumber = Math.min(n, k);
        const randomRow = Math.floor(Math.random() * rowNumber) + 1;
        const randomCol = Math.floor(Math.random() * rowNumber) + 1;

        // Display task
        let taskHTML = `<h2>Exercise ${d + 1}</h2>`;
        taskHTML += `<p>Find row ${randomRow} and column ${randomCol}.</p>`;

        // Display matrices
        taskHTML += '<div class="matrix-container">';
        taskHTML += displayMatrix(matrixOne, 'A');
        taskHTML += displayMatrix(matrixTwo, 'B');
        taskHTML += '</div>';

        // Append to the problem area
        problemArea.innerHTML += taskHTML;
    }
}
