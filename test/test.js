process.env.TEST = true;
const chai = require('chai');
const chai_http = require('chai-http')
const server = require("../app")
let should = chai.should();
chai.use(chai_http);
const data = require('./data')



describe('Form', () => {
    beforeEach((done) => {
        done();
    });
    // test create quyền admin
    describe('/POST form', () => {
        it('it should create form', (done) => {
            let form = {
                "userId":"8035c3a0-314e-11ec-b7aa-effba71fc9d2",
                "receiver":"Form Thu Viec",
                "type":0,
                "status":"new",
                "dueDate":"2021-10-25",
                "isDeleted":0,
                "createBY":"admin",
                "updateBY":"admin",
                "complete":1,
                "reject":0,
                "FormDetail":{
                    "content":"form Thử Việc 10/12",
                    "managerComment":"",
                    "isDeleted":0,
                    "createBY":"admin",
                    "updateBY":"admin"
                }
            }
            chai.request(server)
                .post('/api/v1/form/create')
                .send(form)
                .set('x-access-token', data.admin)
                .end((err, res) => {
                    res.should.have.status(200);
                    
                });
            done();
        });
    });
    // nhập token rỗng
    describe('/POST form', () => {
        it('it should create form', (done) => {
            let form = {
                "userId": "6bf2a520-2b68-11ec-a821-a12307901d2c",
                "receiver": "bmw",
                "type": 0,
                "status": "new",
                "dueDate": "2021-10-25",
                "isDeleted": 0,
                "createBY": "admin",
                "updateBY": "admin",
                "complete": 1,
                "reject": 0,
                "FormDetail": {
                    "content": "form Thử Việc 10/12",
                    "managerComment": "",
                    "isDeleted": 0,
                    "createBY": "admin",
                    "updateBY": "admin"
                }
            }
            chai.request(server)
                .post('/api/v1/form/create')
                .send(form)
                .set('x-access-token', data.checkToken) 
                .end((err, res) => {
                    res.should.have.status(403);
                });
            done();
        });
    });

    // nhập thiếu formdetail
    describe('/POST form enter the missing form', () => {
        it('it should create form', (done) => {
            let form = {
                "userId": "6bf2a520-2b68-11ec-a821-a12307901d2c",
                "receiver": "bmw",
                "type": 0,
                "status": "new",
                "dueDate": "2021-10-25",
                "isDeleted": 0,
                "createBY": "admin",
                "updateBY": "admin",
                "complete": 1,
                "reject": 0,
            }
            chai.request(server)
                .post('/api/v1/form/create')
                .send(form)
                .set('x-access-token', data.admin)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.message.should.equal('rollback form');
                });
            done();
        });
    });
    // // nhập tất kiểu string
    describe('/POST enter form string ', () => {
        it('it should create form', (done) => {
            let form = {
                "userId": "6bf2a520-2b68-11ec-a821-a12307901d2c",
                "receiver": "bmw",
                "type": "0",
                "status": "new",
                "dueDate": "2021-10-25",
                "isDeleted": "0",
                "createBY": "admin",
                "updateBY": "admin",
                "complete": "1",
                "reject": "0",
                "FormDetail": {
                    "content": "form Thử Việc 10/12",
                    "managerComment": "",
                    "isDeleted": "0",
                    "createBY": "admin",
                    "updateBY": "admin"
                }
            }
            chai.request(server)
                .post('/api/v1/form/create')
                .send(form)
                .set('x-access-token', data.employee)
                .end((err, res) => {
                    res.should.have.status(404);
                });
            done();
        });
    });
    // test create form quyền director 
    //  test create form quyền HR

    // test update quyền admin
    describe('/PUT form', () => {
        it('it should update form', (done) => {
            let form = {
                "receiver": "bmw",
                "type": 0,
                "status": "new",
                "dueDate": "2021-10-25",
                "isDeleted": 0,
                "createBY": "admin",
                "updateBY": "admin",
                "complete": 1,
                "reject": 0,
                "FormDetail": {
                    "content": "form Thử Việc 10/12",
                    "managerComment": "",
                    "isDeleted": 0,
                    "createBY": "admin",
                    "updateBY": "admin"
                }
            }
            chai.request(server)
                .put('/api/v1/form/update/b65ca200-2b68-11ec-a821-a12307901d2c')
                .set('x-access-token', data.admin)
                .send(form)
                .end((err, res) => {
                    res.should.have.status(200);
                });
            done();
        })
    });

    //test update quyền admin sai token 
    describe('/PUT form quyền admin sai token', () => {
        it('it should update form', (done) => {
            let form = {
                "receiver": "bmw",
                "type": 0,
                "status": "new",
                "dueDate": "2021-10-25",
                "isDeleted": 0,
                "createBY": "admin",
                "updateBY": "admin",
                "complete": 1,
                "reject": 0,
                "FormDetail": {
                    "content": "form Thử Việc 10/12",
                    "managerComment": "",
                    "isDeleted": 0,
                    "createBY": "admin",
                    "updateBY": "admin"
                }
            }
            chai.request(server)
                .put('/api/v1/form/update/b65ca200-2b68-11ec-a821-a12307901d2c')
                .set('x-access-token', data.HR)
                .send(form)
                .end((err, res) => {
                    res.should.have.status(404);
                });
            done();
        })
    });
    //test update quyền admin nhập thiếu form
    describe('/PUT form quyền admin nhập thiếu form', () => {
        it('it should update form', (done) => {
            let form = {
                "receiver": "bmw",
                "type": 0,
                "status": "new",
                "dueDate": "2021-10-25",
                "isDeleted": 0,
                "createBY": "admin",
                "updateBY": "admin",
                "complete": 1,
                "reject": 0,
                // "FormDetail": {
                //     "content": "form Thử Việc 10/12",
                //     "managerComment": "",
                //     "isDeleted": 0,
                //     "createBY": "admin",
                //     "updateBY": "admin"
                // }
            }
            chai.request(server)
                .put('/api/v1/form/update/b65ca200-2b68-11ec-a821-a12307901d2c')
                .set('x-access-token', data.admin)
                .send(form)
                .end((err, res) => {
                    res.should.have.status(404);
                });
            done();
        })
    });


    // test update form quyền employee

    // test manage 
    describe('/GET form manage', () => {
        it('it should Get All form manage', (done) => {
            chai.request(server)
                .get('/api/v1/form/manager')
                .set('x-access-token', data.manager)
                .end((err, res) => {
                    res.should.have.status(200);
                });
            done();

        })
    })
    // test manage sai token employee
    describe('/GET form manage wrong token', () => {
        it('it should Get All form manage', (done) => {
            chai.request(server)
                .get('/api/v1/form/manager')
                .set('x-access-token', data.employee)
                .end((err, res) => {
                    res.should.have.status(404);
                
                });
            done();

        })
    })
    
    // test manager PATCH
    describe('/PATCH form manager', () => {
        it('it should put form manager', (done) => {
            let manager = {
                "complete": 1,
                "reject": 0,
                "FormDetail": {
                    "managerComment": "đã xong chưa"
                }
            }
            chai.request(server)
                .patch('/api/v1/form/manager/b65ca200-2b68-11ec-a821-a12307901d2c')
                .set('x-access-token', data.manager)
                .send(manager)
                .end((err, res) => {
                    res.should.have.status(200);
                });
            done();
        })
    })
    // test manage patch form wrong token
    describe('/PATCH form manager wrong token', () => {
        it('it should put form manager', (done) => {
            let manager = {
                "complete": 1,
                "reject": 0,
                "FormDetail": {
                    "managerComment": "đã xong chưa"
                }
            }
            chai.request(server)
                .patch('/api/v1/form/manager/b65ca200-2b68-11ec-a821-a12307901d2c')
                .set('x-access-token', data.employee)
                .send(manager)
                .end((err, res) => {
                    res.should.have.status(404);
                });
            done();
        })
    })
    // test manage patch form missing data
    describe('/PATCH form manager missing data', () => {
        it('it should put form manager', (done) => {
            let manager = {
                "complete": 1,
                "reject": 0,
            }
            chai.request(server)
                .patch('/api/v1/form/manager/b65ca200-2b68-11ec-a821-a12307901d2c')
                .set('x-access-token', data.employee)
                .send(manager)
                .end((err, res) => {
                    res.should.have.status(404);
                });
            done();
        })
    })
    // test manage patch form no token
    describe('/PATCH form manager A token is required for authentication', () => {
        it('it should put form manager', (done) => {
            let manager = {
                "complete": 1,
                "reject": 0,
                "FormDetail": {
                    "managerComment": "đã xong chưa"
                }
            }
            chai.request(server)
                .patch('/api/v1/form/manager/b65ca200-2b68-11ec-a821-a12307901d2c')
                .set('x-access-token', data.checkToken)
                .send(manager)
                .end((err, res) => {
                    res.should.have.status(403);
                });
            done();
        })
    })

    // // test HR get form
    describe('/GET form HR', () => {
        it('it should get all form HR', (done) => {
            chai.request(server)
                .get('/api/v1/form/HR')
                .set('x-access-token', data.HR)
                .end((err, res) => {
                    res.should.have.status(200);
                });
            done();
        })
    })
    // test HR get form sai token
    describe('/GET form HR', () => {
        it('it should get all form HR', (done) => {
            chai.request(server)
                .get('/api/v1/form/HR')
                .set('x-access-token', data.employee)
                .end((err, res) => {
                    res.should.have.status(404);
                });
            done();
        })
    })
    // test HR get form no token
    describe('/GET form HR', () => {
        it('it should get all form HR', (done) => {
            chai.request(server)
                .get('/api/v1/form/HR')
                .set('x-access-token', data.checkToken)
                .end((err, res) => {
                    res.should.have.status(403);
                });
            done();
        })
    })
    // // test HR PATCH Form
    describe('/PATCH form HR', () => {
        it('should PUT form HR', (done) => {
            let HR = {
                "status": "close",
                "FormDetail": {
                    "managerComment": "done"
                }
            }
            chai.request(server)
                .patch('/api/v1/form/HR/b65ca200-2b68-11ec-a821-a12307901d2c')
                .set('x-access-token', data.HR)
                .send(HR)
                .end((err, res) => {
                    res.should.have.status(200);
                })
            done();
        })
    })
    // test HR PATCH form sai token 
    describe('/PATCH form HR sai token', () => {
        it('should PUT form HR', (done) => {
            let HR = {
                "status": "close",
                "FormDetail": {
                    "managerComment": "done"
                }
            }
            chai.request(server)
                .patch('/api/v1/form/HR/b65ca200-2b68-11ec-a821-a12307901d2c')
                .set('x-access-token', data.employee)
                .send(HR)
                .end((err, res) => {
                    res.should.have.status(404);
                })
            done();
        })
    })
    // test HR PATCH form không có token
    describe('/PATCH form HR  không có token', () => {
        it('should PUT form HR', (done) => {
            let HR = {
                "status": "close",
                "FormDetail": {
                    "managerComment": "done"
                }
            }
            chai.request(server)
                .patch('/api/v1/form/HR/b65ca200-2b68-11ec-a821-a12307901d2c')
                .set('x-access-token', data.checkToken)
                .send(HR)
                .end((err, res) => {
                    res.should.have.status(403);
                })
            done();
        })
    })
    // test HR PATCH form  missing data Cần check lại đoạn này
    describe('/PATCH form HR missing data', () => {
        it('should PUT form HR', (done) => {
            let HR = {
                 "status": "close",
                // "FormDetail": {
                //     "managerComment": "done"
                // }
            }
            chai.request(server)
                .patch('/api/v1/form/HR/b65ca200-2b68-11ec-a821-a12307901d2c')
                .send(HR)
                .set('x-access-token', data.employee)
                .end((err, res) => {
                    res.should.have.status(404);
                })
            done();
        })
    })

    // // test View form TV
    describe('/GET view form TV', () => {
        it('it should get all form TV', (done) => {
            chai.request(server)
                .get('/api/v1/form/trailWork')
                .set('x-access-token', data.admin)
                .end((err, res) => {
                    res.should.have.status(200);
                })
            done();
        })
    })
    // test view form TV sai token
    describe('/GET view form TV', () => {
        it('it should get all form TV', (done) => {
            chai.request(server)
                .get('/api/v1/form/trailWork')
                .set('x-access-token', data.employee)
                .end((err, res) => {
                    res.should.have.status(404);
                })
            done();
        })
    })
    // test view form ko nhập tokens
    describe('/GET view form TV', () => {
        it('it should get all form TV', (done) => {
            chai.request(server)
                .get('/api/v1/form/trailWork')
                .set('x-access-token', data.checkToken)
                .end((err, res) => {
                    res.should.have.status(403);
                })
            done();
        })
    })
    // // test View form DG 
    describe('/GET view form DG', () => {
        it('it should get all form DG', (done) => {
            chai.request(server)
                .get('/api/v1/form/appraise')
                .set('x-access-token', data.admin)
                .end((err, res) => {
                    res.should.have.status(200);
                })
            done();
        })
    })
    // test nhập sai token 
    describe('/GET view form DG', () => {
        it('it should get all form DG', (done) => {
            chai.request(server)
                .get('/api/v1/form/appraise')
                .set('x-access-token', data.employee)
                .end((err, res) => {
                    res.should.have.status(404);
                })
            done();
        })
    })
    //  test nhập token trống  
    describe('/GET view form DG', () => {
        it('it should get all form DG', (done) => {
            chai.request(server)
                .get('/api/v1/form/appraise')
                .set('x-access-token', data.checkToken)
                .end((err, res) => {
                    res.should.have.status(403);
                })
            done();
        })
    })

    // // test get user quyền admin
    describe('/GET form user admin rights', () => {
        it('it should GET all form user', (done) => {
            chai.request(server)
                .get('/api/v1/form/user')
                .set('x-access-token', data.admin)
                .end((err, res) => {
                    res.should.have.status(200);
                })
            done();
        })
    })
    // test get user quyền admin sai token
    describe('/GET form user admin rights wrong token', () => {
        it('it should GET all form user', (done) => {
            chai.request(server)
                .get('/api/v1/form/user')
                .set('x-access-token', data.HR)
                .end((err, res) => {
                    res.should.have.status(404);
                })
            done();
        })
    })
    // test get user quyền admin token rỗng
    describe('/GET form user admin rights empty token', () => {
        it('it should GET all form user', (done) => {
            chai.request(server)
                .get('/api/v1/form/user')
                .set('x-access-token', data.checkToken)
                .end((err, res) => {
                    res.should.have.status(403);
                })
            done();
        })
    })
    // test get user quyền employee 
    describe('/GET form user employee rights', () => {
        it('it should GET all form user', (done) => {
            chai.request(server)
                .get('/api/v1/form/user')
                .set('x-access-token', data.employee)
                .end((err, res) => {
                    res.should.have.status(200);
                })
            done();
        })
    })
    // test get user quyền employee sai token 
    describe('/GET form user employee rights wrong token', () => {
        it('it should GET all form user', (done) => {
            chai.request(server)
                .get('/api/v1/form/user')
                .set('x-access-token', data.HR)
                .end((err, res) => {
                    res.should.have.status(404);
                })
            done();
        })
    })
    // test get user quyền employee token rỗng
    describe('/GET form user employee rights empty token', () => {
        it('it should GET all form user', (done) => {
            chai.request(server)
                .get('/api/v1/form/user')
                .set('x-access-token', data.checkToken)
                .end((err, res) => {
                    res.should.have.status(403);
                })
            done();
        })
    })


    // // test hr checkDueDate quyền HR
    describe('/GET HR checkDueDate', () => {
        it('it should hr checkDueDate', (done) => {
            chai.request(server)
                .get('/api/v1/form/checkDueDate')
                .set('x-access-token', data.HR)
                .end((err, res) => {
                    res.should.have.status(200);
                })
            done();
        })
    })
    // test hr checkDueDate quyền HR sai token
    describe('/GET HR checkDueDate wrong token', () => {
        it('it should hr checkDueDate', (done) => {
            chai.request(server)
                .get('/api/v1/form/checkDueDate')
                .set('x-access-token', data.employee)
                .end((err, res) => {
                    res.should.have.status(404);
                })
            done();
        })
    })
    // test hr checkDueDate quyền HR token rỗng
    describe('/GET HR checkDueDate wrong token', () => {
        it('it should hr checkDueDate', (done) => {
            chai.request(server)
                .get('/api/v1/form/checkDueDate')
                .set('x-access-token', data.checkToken)
                .end((err, res) => {
                    res.should.have.status(403);
                })
            done();
        })
    })

})

