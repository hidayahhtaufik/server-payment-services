const server = require('../app')
const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

describe('User API Tests: create, list, delete', () => {
  it('POST /org/xendit/comments Create comment, will returns: 200 - success message', async () => {
    const inputUserData = {
      comment: 'Hi how are you?',
      user: 1,
    }

    const res = await chai.request(server).post(`/org/xendit/comments`).send(inputUserData)

    chai.expect(res.status).to.equal(200)
    chai.expect(res.body.message).equal(`Comment to xendit was created.`)
  })

  it('POST /org/xendem/comments Create comment with not existing organization id, will returns: 400 - Organization not found', async () => {
    const inputUserData = {
      comment: 'Hi how are you?',
      user: 2,
    }

    const res = await chai.request(server).post(`/org/xendem/comments`).send(inputUserData)

    chai.expect(res.status).to.equal(400)
    chai.expect(res.body.message).equal(`Organization with name xendem not found!`)
  })

  it('GET /org/xendit/comments List comment, will returns: 200 - Array of comments', async () => {
    const res = await chai.request(server).get(`/org/xendit/comments`).send()

    chai.expect(res.status).to.equal(200)
    chai.expect(res.body).length.greaterThan(0)
  })

  it('DELETE /org/xendit/comments  comment with not existing organization id, will returns: 200 - Succes message', async () => {
    const res = await chai.request(server).delete(`/org/xendit/comments`).send()

    chai.expect(res.status).to.equal(200)
    chai.expect(res.body.message).equal(`All comments to xendit was deleted.`)
  })

  it('GET /org/xendit/members List comment, will returns: 200 - Array of comments', async () => {
    const res = await chai.request(server).get(`/org/xendit/members`).send()

    chai.expect(res.status).to.equal(200)
    chai.expect(res.body).length.greaterThan(0)
  })

})