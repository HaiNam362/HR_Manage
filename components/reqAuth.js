let AuthReq = {
    PostRegister: {
        example: {
            "username": "director2",
            "password": "director2",
            "age": 21,
            "email": "HuyHoang@gmail.com",
            "phone": "098765432",
            "adress": "HaiDuong",
            "isActive": 0,
            "RoleID": 2,
            "identityNumber": "1111111111",
            "socialInsurance": "222222222",
            "avatar":"",
            "isDeleted": 0,
            "createBy": "director",
            "updateBy": "director",
            "Employee": {
                "lastName": "Huy Hoang",
                "fullName": "Nguyen Huy Hoang",
                "isDeleted": 0
            },
            "userRoleModels": {
                "isDeleteD": 0
            }
        }
    },
    PostLogin: {
        example: {
            "username": "Employee",
            "password": "Employee"
        }
    }
}
module.exports = {AuthReq};