let formReq = {
    PostForm: {
        example: {
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
    }
    , PutForm: {
        example: {
            "receiver": "abc123",
            "type": 0,
            "status": "submitted",
            "dueDate": "2021-10-26",
            "isDeleted": 0,
            "updateBY": "hr",
            "FormDetail": {
                "content": "abc",
                "managerComment": "",
                "isDeleted": 0,
                "updateBY": "hr"
            }
        }
    }, PatchHRForm: {
        example: {
            "status": "close",
            "FormDetail": {
                "managerComment": "done"
            }
        }
    }, PATCHManagerForm: {
        example: {
            "complete": 1,
            "reject": 0,
            "FormDetail": {
                "managerComment": "đã xong chưa"
            }
        }
    }, submitForm: {
        example: {
            "status": "submitted",
            "FormDetail": {
                "content": "form thư viec da nhan"
            }
        }
    }
};
module.exports = { formReq };