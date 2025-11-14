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

app.listen(3005, () => console.log("Server running at http://localhost:3005"));