process.env.TEST = true;
const chai = require('chai');
const chai_http = require('chai-http')
const server = require("../app")
let should = chai.should();
chai.use(chai_http);

describe('Users', () => {
    beforeEach((done) => {
        done();
    })

    // test register
    describe('/POST register', () => {
        it('it should register the user', (done) => {
            let register = {
                "username": "HR",
                "password": "HR",
                "age": 21,
                "email": "DuyenNguyen@gmail.com",
                "phone": "098765432",
                "adress": "HungYen",
                "isActive": 0,
                "RoleID": 3,
                "identityNumber": "99999999999",
                "socialInsurance": "88888888888",
                "avatar": "",
                "isDeleted": 0,
                "createBy": "HR",
                "updateBy": "HR",
                "Employee": {
                    "lastName": "Thi Duyen",
                    "fullName": "Nguyen Thi Duyen",
                    "isDeleted": 0
                },
                "userRoleModels": {
                    "isDeleteD": 0
                }
            }
            chai.request(server)
                .post('/api/v1/auth/register')
                .send(register)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.message.should.equal('successfully registered');
                });
            done();
        })
    });
    // nhập thiếu form
    describe('/POST register', () => {
        it('it should register the user', (done) => {
            let register = {
                "username": "HR",
                "password": "HR",
                "age": 21,
                "email": "DuyenNguyen@gmail.com",
                "phone": "098765432",
                "adress": "HungYen",
                "isActive": 0,
                "RoleID": 3,
                "identityNumber": "99999999999",
                "socialInsurance": "88888888888",
                "avatar": "",
                "isDeleted": 0,
                "createBy": "HR",
                "updateBy": "HR",
                // "Employee": {
                //     "lastName": "Thi Duyen",
                //     "fullName": "Nguyen Thi Duyen",
                //     "isDeleted": 0
                // },
                // "userRoleModels": {
                //     "isDeleteD": 0
                // }
            }
            chai.request(server)
                .post('/api/v1/auth/register')
                .send(register)
                .end((err, res) => {
                    res.should.have.status(404);
                    
                });
            done();
        })
    });

  
    //test login pass
    describe('/POST login pass', () => {
        it('it should login the user', (done) => {
            let login = {
                "username": "Employee",
                "password": "Employee"
            }
            chai.request(server)
                .post('/api/v1/auth/login')
                .send(login)
                .end((err, res) => {
                    res.should.have.status(200);
                });
            done();
        })
    });
    
    describe('/POST login error password', () => {
        it('it should login the user', (done) => {
            let register = {
                "username": "Employee",
                "password": "9999"
            }
            chai.request(server)
                .post('/api/v1/auth/login')
                .send(register)
                .end((err, res) => {
                    res.should.have.status(400);
                  
                });
            done();
        })
    });

    describe('/POST login pass data null', () => {
        it('it should login the user', (done) => {
            let register = {
                "username": "",
                "password": ""
            }
            chai.request(server)
                .post('/api/v1/auth/login')
                .send(register)
                .end((err, res) => {
                    res.should.have.status(400);
                });
            done();
        })
    });
   
})