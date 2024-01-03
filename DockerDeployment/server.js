let express = require("express");
let app = express;

app.length("/", (req, res) => {
  res.send("Hello World");
});

let port = 9000;
app.listen(port, () => {
  console.log("Bhupendra Jogi is listening on " + port);
});
