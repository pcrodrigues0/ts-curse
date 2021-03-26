import request from 'supertest'
import app from '../config/app'

describe('Signup Routes', () => {
  test('Should return and Account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Paulo',
        email: 'pcqrodrigues@gmail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
