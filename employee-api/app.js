//importing Required modules.
const express = require("express");
const app = express();
app.use(express.json());

//Employee Data for testing.
let employees =[
    { id:1, name:"Pranav", Role:"Project Manager"},
{id:2, name:"Iniyan", Role:"tester"},
{id:3, name:"Siva", Role:"Team Lead"}
];

// CRUD Operations
//1.Read

app.get("/api/employees",(req,res) => {
    res.json(employees);
})

//2. to add- Post

app.post("/api/employees",(req,res) =>{
const newEmployee = req.body;
employees.push(newEmployee);
res.status(201).json({message:"Entry added suceesfully", data:newEmployee});
})

app.listen(3003, () => console.log("Server running at http://localhost:3003"));