const express=require("express")
const taskRouter=require("./Routes/index")
const Env=require("./config/env")()
const corsconfig = require("./config/cors")
const { globalErrorHandler } = require("../../Freelancing/Allkuran-kareem/Al-kuran-backend/middleware/Error")
const app=express()
app.use(corsconfig())
app.use(express.json())
app.use(globalErrorHandler)
app.get('/',(req,res)=>{
    res.status(200).json({message:'API is working fine',success:true})
})
app.use('/user',taskRouter)
console.log(Env.DATABASE_URL)
module.exports=app
if (Env.NODE_ENV !== "test") {
    app.listen(Env.Port||8000,()=>{console.log('server is running on port '+(Env.Port||8000))})
}