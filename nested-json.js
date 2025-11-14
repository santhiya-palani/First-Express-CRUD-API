const employee = {
    Id: 51,
    Name:"Santhiya",
    Qualification:{
    Undergraduation: "B.C.A",
    Postgraduation:"M.C.A"
    },
    Contact_Details:{
        Email:"abc@gmail.com",
        Mobile:"123456789"
    },
    Skills: ["Javascript","express.js","mysql","git"]
};

console.log ("Name:",employee.Name);
console.log ("Qualification:",employee.Qualification.Postgraduation);
console.log ("Contact Details:",employee.Contact_Details.Mobile);