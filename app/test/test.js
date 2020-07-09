
const chai = require('chai');
const chaiHttp = require('chai-http')
const app = require("../index");
const { expect } = require('chai');
const router = require("../routes/user");
const User = require("../model/User");



chai.use(chaiHttp);

beforeEach( async () => {
   await  User.deleteOne({email:'fakeuser@sample.com'})
})



describe('/ POST User ', function() {
it('test to create user should pass', (done) => {
    chai.request(app)
        .post('/user/signup')
        .send({username:'fakeuser', email:'fakeuser@sample.com', password:'1234SAMIR'})
        .end((err,res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            done()
        }) 

  })

})



    