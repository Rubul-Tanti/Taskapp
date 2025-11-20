const env=require("dotenv")
env.config()
const Env=()=>{
return {
      dbUser: process.env.DB_USER,
  dbHost: process.env.DB_HOST,
  dbDatabase: process.env.DB_DATABASE,
  dbPassword: process.env.DB_PASSWORD,
  dbPort: process.env.DB_PORT,
  Port: process.env.PORT,
  NODE_ENV:process.env.NODE_ENV||'development',
  DATABASE_URL:process.env.DATABASE_URL
}
}
module.exports =Env