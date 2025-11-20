const cors=require("cors")
const corsconfig=()=>{

   return cors({
        origin:(orgin,callback)=>{
            const allowedOrigins=['http://localhost:3000','']
            if(allowedOrigins.indexOf(orgin)!==-1||!orgin){
                callback(null,true)
            }else{new Eroor('Not Allowed By CORS')
                
            }
        },
        allowedHeaders:['Content-Type','Authorization'],
        methods:['GET','POST','PUT','DELETE'],
    credentials:true,   
})
}
module.exports=corsconfig