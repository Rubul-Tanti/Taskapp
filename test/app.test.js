const request=require('supertest');
const app =require("../server")

describe("Api health check",()=>{
    test( 'Get / should return 200 status ',async()=>{
    const res=await request(app).get('/');
    expect(res.status).toBe(200)
    })
})