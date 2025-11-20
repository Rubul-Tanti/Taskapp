const env=require("dotenv")
env.config()
const Env=()=>{
return {
  Port: process.env.PORT,
  NODE_ENV:process.env.NODE_ENV||'development',
  DATABASE_URL:process.env.DATABASE_URL
}
}
module.exports =Env