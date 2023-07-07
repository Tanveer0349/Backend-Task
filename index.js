const express=require('express');
const tasks=require('./routes/task')
const error=require('./middlewares/error');


// Server
const app=express();


// Route Middlewares
app.use('/api',tasks)
app.use(error)
// Connection
const port=process.env.PORT||8000;
app.listen(port,()=>{
  console.log(`server is listenening on port ${port}`)
})