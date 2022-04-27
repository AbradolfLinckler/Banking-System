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

app.get('/api/blist',(req,res)=>{
  db.query("SELECT * FROM branch;",
    (err,result)=>{
      if(!err) {
        res.send(result);
        // console.log(result[result.length-1].branch_code);
      }
      else throw err;
    }
  );
});

app.post('/api/register',(req,res)=>{
  console.log(req.body.gender);
  db.query("INSERT INTO customer VALUES (DEFAULT,?,?,?,?,?,?,?,?,?,?)",[
    req.body.fullName,
    req.body.gender,
    req.body.acc_type,
    req.body.mobile,
    0,
    req.body.dob,
    req.body.pin,
    req.body.bcode,
    req.body.address,
    req.body.username
  ],(err,result)=>{
    if(!err) res.send(result);
    else res.send(err);
  });
});

app.get('/',(req,res)=>{
  res.send("this works");
});