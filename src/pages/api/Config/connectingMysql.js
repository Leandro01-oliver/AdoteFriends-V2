const mySql = require('mysql2');

const db = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'L1A2D3O20#',
    database: 'cadastro'
})

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('Connected to database');
})

module.exports = db;
