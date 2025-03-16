const express = require("express");
const app  = express();
const PORT = 8080;
const cors = require('cors');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
const dbConnection = require("./Database/dbConnection");
const userRouter =  require("./Routes/userRoutes");
const groupRouter =  require("./Routes/groupRoutes");
const eventRouter =  require("./Routes/eventRoutes");


dbConnection();

app.use("/user",userRouter);
app.use("/group",groupRouter);
app.use("/event",eventRouter);




app.listen(PORT,()=>{
    console.log((`listening on Port:${PORT}`));
    
})