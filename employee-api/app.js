//importing Required modules.

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db =require ('./db');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(bodyParser.json());

//basic Route

app.get("/",(req,res) => {
    res.send ("Welcome to CRUD API");
});

// CRUD Operations 
//1- get endpoint- Read Operation- To get all Employees

 app.get('/employees',(req,res) => {
    db.query ('select * from employees',(err,results) =>{
        if(err){
            console.error ('Couldnt retrieve emp data',err);
            return res.status(500).json({error:'Database error'})
        }
        res.json(results);
    });

});
    // 2-get endpoint- To retrieve a single employee

    app.get ('/employees/:id', (req,res)  => {
    const idparam = req.params.id;
    const id = Number(idparam);

  if (!Number.isInteger(id)) {
  return res.status(400).json({ error:'Invalid ID: must be an integer'});
}
          db.query ('select * from employees where id = ?',[id],(err,results) =>{
        if (err){
            console.error ('Couldnt retrieve emp data with given id',err);
            return res.status(500).json({error:'Database error'});
        }
      if (results.length === 0) {
      return res.status(404).json({ error: 'Employee not found' });
   }
        res.json(results[0]);
    });
    });


    //3. To insert bulk data.

    app.post ('/employees/bulk', (req,res)  => {

    const employees = req.body;

    if(!Array.isArray(employees) || employees.length === 0 ) {
    return res.status(400).json({ error: 'Request body cannot be empty'});
    }
const values = [];

 for (let i = 0; i < employees.length; i++) {
  const emp = employees[i];
  const id = emp.id;
  const name = emp.name;
  const role = emp.role;
    
if (!Number.isInteger(id)) {
    return res.status(400).json({ error: 'Employee ID must be an integer' });
}
 if (!id || !name || !role) {
    return res.status(400).json({ error: 'Missing required fields' });
 }
  if (typeof name !== 'string' || typeof role !== 'string') {
    return res.status(400).json({ error: 'Name and role must be strings' });
  }
  values.push([id, name, role]);
 }
const sql = 'INSERT INTO employees (id, name, role) VALUES ?';

  db.query(sql,[values], (err,results) => {
    if (err) {
      console.error('Error inserting employees:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Employees added successfully', insertedCount: results.affectedRows

     });
  });
});

    // 4. post endpoint - To insert single line of record
    app.post ('/employees', (req,res)  => {
    const {id,name,role} = req.body;

if (!Number.isInteger(id)) {
    return res.status(400).json({ error: 'Employee ID must be an integer' });
}
      if (!id || !name || !role) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  if (typeof name !== 'string' || typeof role !== 'string') {
    return res.status(400).json({ error: 'Name and role must be strings' });
  }
    const sql = 'insert into employees (id,name,role) values (?,?,?)' ;
        db.query (sql,[id,name,role],(err,results) =>{
        if (err){
            console.error ('Error in inserting Employee:',err);
            return res.status(500).json({error:'Database error'});
        }
    
      res.status(201).json({ Message:'Employee added', employee: { id, name, role } });

});
    });


//5. Delete endpoint

      app.delete ('/employees/:id', (req,res)  => {
  const idParam = req.params.id;
  const id = Number(idParam);

if (!Number.isInteger(id)) {
    return res.status(400).json({ error: 'Employee ID must be an integer' });
}
    const sql = 'delete from employees where id = ?' ;
        db.query (sql,[id],(err,results) =>{
        if (err){
            console.error ('Error in deleting Employee:',err);
            return res.status(500).json({error:'Database error'});
        }
     if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Employee not found' });
    }
      res.status (201).json({ Message: `Employee deleted with the ID ${id} succesfully`});

});
    });

//6. Deleting Multiple rows.


app.delete ('/employees/bulk', (req,res)  => {

    const ids = req.body; //multiple id's so differnciating here with the name.

    if(!Array.isArray(ids) || ids.length === 0 ) {
    return res.status(400).json({ error: 'Request body cannot be empty'});
    }

 for (let i = 0; i < ids.length; i++) {
const id = ids[i]; // for each index of an array.
if (!Number.isInteger(id)) {
    return res.status(400).json({ error: 'Invalid index.Id must be an integer' });
}
 }
const sql = 'delete from employees where id IN (?)';

  db.query(sql,[ids], (err,results) => {
    if (err) {
      console.error('Error deleting employees:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json({ message: 'Employees deleted successfully', deletedCount: results.affectedRows
     });
  });
});
app.listen(3008, () => console.log("Server running at http://localhost:3008"));
