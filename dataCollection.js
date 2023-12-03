// Refine csv code from loops assignment
let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
// csv = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

let row = csv.split("\n")

for(let i = 0; i < row.length; i++){
    row[i] = row[i].split(",")
}

console.log(row)

// Turn array into objects
const header = row[0]
objArray = []
for(let i = 1; i < row.length; i++){
    let obj = {}
    for(let headerElement = 0; headerElement < row[0].length; headerElement++){
        obj[header[headerElement].toLowerCase()] = row[i][headerElement]
    }
    objArray.push(obj)
}
console.log(objArray)

// Remove the last element from the sorted array
objArray.pop()
console.log(objArray)

// Insert the following object at index 1:
objArray.splice(1,0, {id: "48", name: "Barry", occupation: "Runner", age: "25"})
console.log(objArray)

// Add the following object to the end of the array:
objArray.push({id: "7", name: "Bilbo", occupation: "None", age: "111"})
console.log(objArray)

console.log(Number(objArray[0].age))

// Use the values of each object in the array to calculate the average age of the group
let ageSum = 0

for(let j = 0; j < objArray.length; j++){
    ageSum = Number(objArray[j].age) + ageSum
}

let averageAge = ageSum / objArray.length
console.log(averageAge)