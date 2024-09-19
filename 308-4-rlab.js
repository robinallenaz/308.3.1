const csvString = 'ID,Name,Occupation,Age,IsCool\n42,Bruce,Knight,41,true\n57,Bob,Fry Cook,19,true\n63,Blaine,Quiz Master,58,false\n98,Bill,Doctor\'s Assistant,26,true';

// Split the CSV string by new lines to get rows
let rows = csvString.split('\n');

// Split the first row to get headers and convert them to lowercase
let headers = rows[0].split(',').map(header => header.toLowerCase());

// Initialize an array to hold the objects
let objectsArray = [];

// Loop through the rest of the rows (starting at index 1) to create objects
for (let i = 1; i < rows.length; i++) {
  let data = rows[i].split(','); // Split each row by commas
  let obj = {};
  
  // Loop through each header and assign the corresponding row data
  for (let j = 0; j < headers.length; j++) {
    obj[headers[j]] = data[j]; // Key is the header, value is the row data
  }
  
  objectsArray.push(obj); // Add the object to the array
}

// Output the array of objects
console.log(objectsArray);
