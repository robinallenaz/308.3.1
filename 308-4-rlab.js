const csvString =
  "ID,Name,Occupation,Age,IsCool\n42,Bruce,Knight,41,true\n57,Bob,Fry Cook,19,true\n63,Blaine,Quiz Master,58,false\n98,Bill,Doctor's Assistant,26,true";

// Split the CSV string by new lines to get rows
let rows = csvString.split("\n");

// Split the first row to get headers and convert them to lowercase
let headers = rows[0].split(",").map((header) => header.toLowerCase());

// Initialize an array
let objectsArray = [];

// Loop through the rest of the rows to create objects
for (let i = 1; i < rows.length; i++) {
  let data = rows[i].split(","); // Split each row by commas
  let obj = {};

  // Loop through each header and assign the corresponding data
  for (let j = 0; j < headers.length; j++) {
    obj[headers[j]] = data[j]; // Key is the header, value is the row data
  }

  objectsArray.push(obj); // Add the object to the array
}

// Part 3: converting objectsArray back into CSV by converting into objects, then strings again

function convertToCSV(objectsArray) {
  // Join the headers into a CSV string
  let csvOutput = headers.join(",") + "\n";
  // Loop through the objects and get the values
  for (let obj of objectsArray) {
    // Extract values in the same order as headers
    let row = headers.map((header) => obj[header]);
    // Join the values and add the row to the CSV string
    csvOutput += row.join(",") + "\n";
  }
  return csvOutput.trim(); // Trim the extra new line at the end
}
// Call the function to convert back to CSV and log the result
let newCSVString = convertToCSV(objectsArray);
console.log(newCSVString);
