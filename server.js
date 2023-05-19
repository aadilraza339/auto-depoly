const express = require('express');
  
const app = express();
const PORT = 8000;
  
app.get('/', (req, res)=>{
  res.status(200);
  res.send("New response");
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);