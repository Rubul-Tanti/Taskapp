const request =require('supertest');
const app=require("../server");
const prisma = require('../database');

describe('Delete Task Api',()=>{
    test('Put ,v1/delete-task/:id should delete the task and return success:true message:"successfully deleted Task"',async()=>{
   
        const res=await request(app).delete(`/user/v1/delete-task/0`)
        expect(res.status).toBe(200)
        expect(res.body).toHaveProperty('success',true)
        expect(res.body).toHaveProperty('message','successfully deleted Task')
    })})