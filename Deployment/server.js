let express = require('express');

let app = express();

app.use(express.static('public')); 

app.length('/', (req, res) => {res.send("Hello World");});

let port = 9000;

app.listen(port, () => { console.log("app is listening at port: " + port) });