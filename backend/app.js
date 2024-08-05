const express = require('express');
const bodyParser = require('body-parser');
const { DBconnect } = require('./database/DBCon.js');

const app = express();

const PORT = 3002;

app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get ('/', (req,res)=>{
    console.log ("app is in working condotion")
    res.send("app is in working condotion")
})

DBconnect();

app.listen(PORT, () => {
    console.log(`Server listening at port http://localhost:${PORT}`);
});

