const request=require('supertest');
const app=require('../server')

describe('Create Task Api',()=>{
    test('post user/v1/create-task should create a new task',async()=>{
        const res=await request(app).post('/user/v1/create-task').send({
            title:'test Title',
            description:'test description'
        })
        expect(res.status).toBe(201)
        expect(res.body).toHaveProperty('data')
        expect(res.body.data).toHaveProperty('id')
        expect(res.body.data.title).toBe('test Title')
        expect(res.body.data.description).toBe('test description')
        expect(res.body.data.status).toBe('todo')
    })
})