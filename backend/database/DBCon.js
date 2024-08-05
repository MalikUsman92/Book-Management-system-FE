const sql = require('mysql');
const env = require('dotenv');

env.config();

const con = sql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

const PORT = process.env.PORT || 3000;

const DBconnect = async()=>{
    try{
        await con.connect(()=>{
            console.log('Database Connected Successfully')
        })
    }
    catch(e){
        console.log('Unable to connect to Database due to :' + e.massage );
    }

};

module.exports = { DBconnect, con };

//to add in main app file
//const { DBconnect } = require('./DBCon.js'); 
// DBconnect();