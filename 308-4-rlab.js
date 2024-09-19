const csvString =
  'ID,Name,Occupation,Age,IsCool\n42,Bruce,Knight,41,true\n57,Bob,Fry Cook,19,true\n63,Blaine,Quiz Master,58,false\n98,Bill,Doctor's Assistant,26,true';

let cells = [];
let currentCell = 0;

let columns = 0;
let currentRow = 0;

let table = [];

//Example helper function
function resetVars() {
  cells = [];
  currentCell = 0;
}

for (let i = 0; i < csvString.length; i++) {
  //checking for a new cell
  if (csvString[i] === ',') {
    if (currentRow === 0) {
      columns++;
    }

    currentCell++;
    continue;
  }
  // checking for a new row
  if (csvString[i] === '\n') {
    resetVars();
    currentRow++;
    continue;
  }

  // Part 1
  if (cells[currentCell]) {
    cells[currentCell] += csvString[i];
  } else {
    cells[currentCell] = csvString[i];
  }

  //Part 2
  if (table[currentRow] === undefined) {
    table[currentRow] = [];
  }

  if (table[currentRow][currentCell]) {
    table[currentRow][currentCell] += csvString[i];
  } else {
    table[currentRow][currentCell] = csvString[i];
  }

}

console.log(table);