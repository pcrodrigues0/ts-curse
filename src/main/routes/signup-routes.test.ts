import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'

describe('Signup Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL as string)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountsCollection = MongoHelper.getCollection('accounts')
    await accountsCollection.deleteMany({})
  })

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
