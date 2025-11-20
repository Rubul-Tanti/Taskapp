const request = require('supertest');
const app = require('../server');

describe('Update Task Api', () => {
  test('Put ,user/v1/update-task/:id should update the task and return the updated task', async () => {

    const res = await request(app)
      .put('/user/v1/update-task/2') 
      .send({
        title: 'updated title',
        description: 'updated description',
        status: 'progress',
      });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body.data).toHaveProperty('title');
    expect(res.body.data.title).toBe('updated title');
    expect(res.body.data.description).toBe('updated description');
    expect(res.body.data.status).toBe('progress');
    expect(res.body).toHaveProperty('message', 'Successfully updated Task'); // Match your controller
  });
});
