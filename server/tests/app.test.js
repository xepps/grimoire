const supertest = require('supertest')
const tape = require('tape')
const sinon = require('sinon')
var proxyquire = require('proxyquire').noCallThru();

const newApp = () => {
    return proxyquire('../src/app', {
        'elasticsearch': {
            'Client': function () {
                return {
                    'indices': {
                        'create': sinon.stub().resolves({}),
                        'exists': sinon.stub().resolves({}),
                        'delete': sinon.stub().resolves({}),
                        'putMapping': sinon.stub().resolves({}),
                    },
                    'search': sinon.stub().resolves({})
                }
            },
            '@global': true
        }
    })
}

tape('app route :: /search', async (t) => {
    const app = newApp()
    await supertest(app)
        .get('/all')
        .expect('Content-Type', /json/)
        .expect(200)

    app.close()
    t.end()
})

tape('app route :: /all', async (t) => {
    const app = newApp()
    await supertest(app)
        .get('/all')
        .expect('Content-Type', /json/)
        .expect(200)

    app.close()
    t.end()
})

