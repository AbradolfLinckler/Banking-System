const express=require('express');
const app=express();
const mysql=require('mysql');
const bodyParser=require('body-parser');
const cors=require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.listen(8000,()=>{
  console.log("Server running!");
});

const db=mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'cruddb'
});

app.post('/api/insert', (req,res)=>{
  const sqlInsert="INSERT INTO branch VALUES (?,?,?);";
  // console.log(req.body.bname);
  db.query(sqlInsert,[
    req.body.bcode,
    req.body.bname,
    req.body.badd
  ],(err,result)=>{
    if(!err) res.send(result);
    else throw err;
  });
});

app.post('/api/gg',(req,res)=>{
  console.log(req.body.gg);
});

app.get('/',(req,res)=>{
  res.send("this works");
});