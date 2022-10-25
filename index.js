const express =require('express')
const app =express()
const cors =require("cors")
app.use(cors())

 const Port =process.env.PORT || 5000
 const allCourses=require("./data/data.json")

app.get('/', (req, res) => {
    res.send('hello world')
  })

  app.get("/courses",(req,res)=>{
    res.send(allCourses)
  })
  app.get("/courses/:id",(req,res)=>{
    const id =req.params.id
    const singleCourse= allCourses.find(c=>c.id === id)
    res.send(singleCourse)
  })


app.listen(Port,()=>{
    console.log("server is running")
})