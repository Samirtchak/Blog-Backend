
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
//test 2: missing username work as well with missing email and missing password
it('username is missing', (done) => {
        
    chai.request(app)
    .post('/user/signup')
    .send({username:'', email:'fakeuser@sample.com', password:'1234SAMIR'})
    .end((err,res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(400);
        expect(res).to.be.json;
        done()

        }) 

  })

  //test 3: password is less than 6 character
  it('password less than 6 character', (done) => {
        
    chai.request(app)
    .post('/user/signup')
    .send({username:'fakeuser', email:'fakeuser@sample.com', password:'sam'})
    .end((err,res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(400);
        expect(res).to.be.json;
        done()

        }) 

  })

// test 4: try to create an existing user
it('create an existing user', (done) => {
        
    chai.request(app)
    .post('/user/signup')
    .send({username:'testuser', email:'testuser@example.com', password:'testpassword'})
    .end((err,res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(400);
        expect(res).to.be.json;
        done()

        }) 

  })

  // test 4: provide an invalid mail
it('invalid mail test', (done) => {
        
    chai.request(app)
    .post('/user/signup')
    .send({username:'testuser', email:'anemail', password:'testpassword'})
    .end((err,res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(400);
        expect(res).to.be.json;
        done()

        }) 

  })


})


// test for the Login part

describe('POST /login', () => {

    it('enter an inexisting email', (done) => {
        chai.request(app)
            .post('/user/login')
            .send({email:'billy@example.com', password:'wingrove'})
            .end((err,res) => {
                expect(err).to.be.null
                expect(res).to.have.status(400);
                expect(res).to.be.json;
                done();
            })

    })

    it('enter an good username but invalid password', (done) => {
        chai.request(app)
            .post('/user/login')
            .send({email:'testuser@example.com', password:'wingrove'})
            .end((err,res) => {
                expect(err).to.be.null
                expect(res).to.have.status(400);
                expect(res).to.be.json;
                done();
            })

    })




})


    