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
// Iterate through each character in the CSV string

for (let i = 0; i < csvString.length; i++) {
  // Check if we hit a comma (end of cell)
  if (csvString[i] === ',') {
    if (currentRow === 0) {
      columns++;
    }

    currentCell++;
    continue;
  }
  // Check if we hit a newline (end of row)
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

// Part 3: Transforming data into objects

// Get the header row and convert to lowercase keys
let headers = table[0].map(header => header.toLowerCase());

// Iterate through the remaining rows and create objects
for (let i = 1; i < table.length; i++) {
  let obj = {};
  for (let j = 0; j < headers.length; j++) {
    obj[headers[j]] = table[i][j]; // Assign header as key, cell value as value
  }
  objectsArray.push(obj); // Add the object to the array
}

console.log(objectsArray);