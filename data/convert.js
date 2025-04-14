const fs = require("fs");

// Load data from JSON file
const data = require("./detail.json");

// Extract and trim last 3 characters from each equipment value
const trimmedEquipment = data.map(
  (item) => item.equipment.slice(0, -3) // remove last 3 characters
);

// Remove duplicates
const uniqueEquipment = [...new Set(trimmedEquipment)];

// Join by newline
const content = uniqueEquipment.join("\n");

// Write to a text file
fs.writeFile("equipment_list.txt", content, (err) => {
  if (err) throw err;
  console.log("equipment_list.txt has been saved!");
});
