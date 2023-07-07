const {fetchTasks}=require('../db')
const db=fetchTasks()
module.exports.getTasks=(req,res)=>{
    if(req.query.status=='pending') 
    {
        let result=db.filter(task=>task.status==='pending')
        return res.send(result)
    }
    if(req.query.status=='completed') 
    {
        let result=db.filter(task=>task.status==='completed')
        return res.send(result)
    }
    
res.send(db)
}