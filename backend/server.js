





const express = require('express');
const mongoose =require('mongoose');
const userRoute =require ('./routers/userRouter');
const bodyParser =require('body-parser')
const categoryRoute=require('./routers/categoryRoute')
//const uploadRoute=require("./routers/uploadRoute")
const acceptWorkRoute=require("./routers/acceptWorkRoute")
const cors = require("cors");


const mongodbUrl = 'mongodb+srv://prasanthtalapadra:Prasanth@970@cluster0.6afkd.mongodb.net/workfinder?retryWrites=true&w=majority'
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true

}).then(()=>{console.log('Db connected')})
.catch(error => console.log(error));







const app=express();
app.use(cors())
app.use(bodyParser.json());
app.use('/api/users',userRoute);
app.use('/api/category',categoryRoute);
//app.use('/api/uploads',uploadRoute)
app.use('/api/acceptwork',acceptWorkRoute);
//  app.use('/api/ongoingworks',acceptWorkRoute)


// app.get('/api/construction',(req,res) => {
//     res.send(data.constructionworks);
// })

// app.get("/api/loading",(req,res) => {
//     res.send(data.loadingworks);
// })

// app.get("/api/farm",(req,res) => {
//     res.send(data.farmworks);
// })

// app.get("/api/gardening",(req,res) => {
//     res.send(data.gardeningworks);
// })

// app.get("/api/cleaning",(req,res) => {
//     res.send(data.cleaningworks);
// })
// app.get("/api/findwork/:id",(req,res) => {
//     const categoryId = req.params.id;
//     const conPost = data.constructionworks.find(x=>x.id === categoryId);
//     if(conPost)
//     res.send(conPost);
//     else
//     res.status(404).send({msg:"Work Not Found."})
//  })


app.listen(8000,() => { console.log("Server started at http://localhost:8000")})