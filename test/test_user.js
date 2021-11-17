process.env.TEST = true;
const chai = require('chai');
const chai_http = require('chai-http')
const server = require("../app")
const data = require('./data')
let should = chai.should();
chai.use(chai_http);

describe('Users + Employee', () => {
    beforeEach((done) => {
        done();
    })
    //    test update user 
    describe('/PUT update user with all roles ', () => {
        it('it should update user', (done) => {
            let updateUser = {
                "password": "abc",
                "age": "50",
                "email": "hoang123@gmail.com",
                "phone": "091234567",
                "address": "HaTay",
                "isActive": 0,
                "identityNumber": "000000000000000",
                "socialInsurance": "111111111111111",
                "updateBy": "abc",
                "isDeleted": 0,
                "Employee": {
                    "lastName": "Vũ Dũng",
                    "fullName": "Nguyễn Vũ Dũng",
                    "updateBy": "abc",
                    "isDeleteD": 0
                }
            }
            chai.request(server)
                .put('/api/v1/users/update')
                .set('x-access-token', data.HR1)
                .send(updateUser)
                .end((err, res) => {
                    res.should.have.status(200);
                });
            done();
        })
    });
    // test nhập thiếu form
    describe('/PUT update user with all roles ', () => {
        it('it should update user', (done) => {
            let updateUser = {
                "password": "abc",
                "age": "50",
                "email": "hoang123@gmail.com",
                "phone": "091234567",
                "address": "HaTay",
                "isActive": 0,
                "identityNumber": "000000000000000",
                "socialInsurance": "111111111111111",
                "updateBy": "abc",
                "isDeleted": 0,
                // "Employee": {
                //     "lastName": "Vũ Dũng",
                //     "fullName": "Nguyễn Vũ Dũng",
                //     "updateBy": "abc",
                //     "isDeleteD": 0
                // }
            }
            chai.request(server)
                .put('/api/v1/users/update')
                .set('x-access-token', data.HR1)
                .send(updateUser)
                .end((err, res) => {
                    res.should.have.status(404);
                });
            done();
        })
    });
    // test token null 
    describe('/PUT update user with all roles ', () => {
        it('it should update user', (done) => {
            let updateUser = {
                "password": "abc",
                "age": "50",
                "email": "hoang123@gmail.com",
                "phone": "091234567",
                "address": "HaTay",
                "isActive": 0,
                "identityNumber": "000000000000000",
                "socialInsurance": "111111111111111",
                "updateBy": "abc",
                "isDeleted": 0,
                "Employee": {
                    "lastName": "Vũ Dũng",
                    "fullName": "Nguyễn Vũ Dũng",
                    "updateBy": "abc",
                    "isDeleteD": 0
                }
            }
            chai.request(server)
                .put('/api/v1/users/update')
                .set('x-access-token', data.checkToken)
                .send(updateUser)
                .end((err, res) => {
                    res.should.have.status(403);
                });
            done();
        })
    });

    

})
