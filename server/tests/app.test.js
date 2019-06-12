const supertest = require('supertest')
const tape = require('tape')
const sinon = require('sinon')

const app = require('../src/app')

tape('app route :: /all', async (t) => {
    await supertest(app)
        .get('/all')
        .expect('Content-Type', /json/)
        .expect(200)
})

