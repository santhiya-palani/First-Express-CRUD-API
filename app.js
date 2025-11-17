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
    const id = req.params.id;
        db.query ('select * from employees where id=?',[id],(err,results) =>{
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

    // 3. post endpoint - inserting a record

    app.post ('/employees', (req,res)  => {
    const id = parseInt(req.body.id, 10);
    const {name,role} = req.body;

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
    
      res.status(201).json({ Message: 'Employee added',employee: { id, name, role } });

});
    });
app.listen(3008, () => console.log("Server running at http://localhost:3008"));
