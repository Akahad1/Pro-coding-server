const express =require('express')
const app =express()

 const Port =process.env.prot || 5000

app.get('/', (req, res) => {
    res.send('hello world')
  })

app.listen(Port,()=>{
    console.log("server is running")
})