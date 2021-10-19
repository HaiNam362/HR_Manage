const FormDetail = require('../models/formDetail.models')
const Form = require('../models/form.models')
const sequelizeDB = require('../config/database')
const userModels = require('../models/user.models');
const nodemailer = require("nodemailer");


exports.sendEmail = (req, res) => {
    console.log('có ra không');
    var transporter = nodemailer.createTransport({ // config mail server
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'namnh1@vmodev.com', //Tài khoản gmail vừa tạo
            pass: 'besxvcjrqeuynxmo' //Mật khẩu tài khoản gmail vừa tạo
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    var mainOptions = {
        from: 'NQH-Test nodemailer',
        to: req.body.mail,
        subject: 'Test Nodemailer',
        text: 'xin chào bạn',
        html: "<h1>Hello Dude abc </h1>"
    }
    transporter.sendMail(mainOptions, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log('Message sent: ' + info.response);
            res.send({
                message: 'email successfully', data: req.locals.data
            })
        }
    });
}
exports.createForm = async (req, res, next) => {
    const UserId = req.body.userId;
    const receiver = req.body.receiver;
    const type = req.body.type;
    const status = req.body.status;
    const dueDate = req.body.dueDate;
    const isDelete = req.body.isDeleted;
    const createBY = req.body.createBy;
    const updateBY = req.body.updateBy;
    const complete = req.body.complete;
    const reject = req.body.reject;
    const content = req.body.FormDetail.content;
    const managerComment = req.body.FormDetail.managerComment;
    const isDeleted = req.body.FormDetail.isDeleted;
    const createBy = req.body.createBy;
    const updateBy = req.body.updateBy;
    const t = await sequelizeDB.transaction();
    const userId = await userModels.findOne({
        where: { id: UserId }
    })
    if (!userId) {
        return res.end('not found');
    }
    try {
        const form = await Form.create({
            UserId: UserId,
            receiver: receiver,
            type: type,
            status: status,
            dueDate: dueDate,
            isDeleted: isDelete,
            complete: complete,
            reject: reject,
            createBy: createBY,
            updateBy: updateBY,
        }, { transaction: t });
        await FormDetail.create({
            FormId: form.id,
            content: content,
            managerComment: managerComment,
            isDeleted: isDeleted,
            createBy: createBy,
            updateBy: updateBy,
        }, { transaction: t });
        await t.commit();
        res.status(200).send('create form success');
        console.log("abc");
        next();
    } catch (error) {
        await t.rollback();
    }
}
exports.updateForm = async (req, res, next) => {
    const FormId = req.params.id;
    const receiver = req.body.receiver;
    const type = req.body.type;
    const status = req.body.status;
    const dueDate = req.body.dueDate;
    const isDelete = req.body.isDeleted;
    const updateBY = req.body.updateBy;
    const content = req.body.FormDetail.content;
    const managerComment = req.body.FormDetail.managerComment;
    const isDeleted = req.body.FormDetail.isDeleted;
    const updateBy = req.body.updateBy;
    const t = await sequelizeDB.transaction();
    try {
        const form = await Form.update({
            receiver: receiver,
            type: type,
            status: status,
            dueDate: dueDate,
            isDeleted: isDelete,
            updateBy: updateBY,
        }, { where: { id: FormId }, transaction: t });
        await FormDetail.update({
            formID: form.id,
            content: content,
            managerComment: managerComment,
            isDeleted: isDeleted,
            updateBy: updateBy,
        }, { where: { FormId: FormId }, transaction: t });
        await t.commit();
        res.status(200).send('update form success');
        console.log("abc");
    } catch (error) {
        await t.rollback();
    }
}

// get user + form + formDetail
exports.getUserForm = async (req, res, next) => {
    try {
        let form = await Form.findAll({
            where: { UserId: req.user },
            include: FormDetail
        });
        res.status(200).json({
            status: " success",
            data: form
        })
    } catch (err) {
        console.log(err);
    }
};
// manager
exports.getStatusForm = async (req, res, next) => {
    try {
        let form = await Form.findAll({
            where: { status: 'submitted' },
            include: FormDetail
        })
        res.status(200).json({
            status: 'success',
            data: form
        })
    } catch (err) {
        console.log(err);
    }
};
exports.PutStatusForm = async (req, res, next) => {
    try {
        const id = req.params.id;
        const complete = req.body.complete;
        const reject = req.body.reject;
        const managerComment = req.body.FormDetail.managerComment;
        const t = await sequelizeDB.transaction();
        const form = await Form.update({
            complete: complete,
            reject: reject,
            updateAt: Date.now(),
        }, { where: { id: id }, transaction: t });
        let formData = await Form.findOne({ where: { id: id }, transaction: t })
        await FormDetail.update({
            FormId: form.id,
            managerComment: managerComment,
            updateAt: Date.now(),
        }, { where: { FormId: formData.id }, transaction: t })
        await t.commit();
        res.status(200).send('manage update success');
    } catch (err) {
        console.log(err);
    }
}
// hr
exports.HRGetStatus = async (req, res, next) => {
    try {
        let form = await Form.findAll({
            where: { complete: 1, status: 'submitted' },
            include: FormDetail
        });
        res.status(200).json({
            status: 'success',
            data: form
        })
    } catch (err) {
        console.log(err);
    }
}
exports.HRPutStatusForm = async (req, res, next) => {
    try {
        const id = req.params.id;
        const managerComment = req.body.FormDetail.managerComment;
        const t = await sequelizeDB.transaction();
        const form = await Form.update({
            status: req.body.status,
            updateAt: Date.now()
        }, { where: { id: id }, transaction: t });
        let formData = await Form.findOne({ where: { id: id }, transaction: t })
        await FormDetail.update({
            FormId: form.id,
            managerComment: managerComment,
            updateAt: Date.now()
        }, { where: { FormId: formData.id }, transaction: t });
        await t.commit();
        res.status(200).send('update status success');
    } catch (err) {
        console.log(err);
    }
}
exports.checkDueDate = async (req, res, next) => {
    try {
        let data = [];
        let form = await Form.findAll({
            where: { status: 'close', complete: 1 },
            include: FormDetail
        });
        for (let a of form) {
            if (Date.parse(a.dueDate) - Date.now() > 0) {
                data.push(a);
            }
        };
        res.status(200).json({
            status: 'success',
            result: data.length,
            data: data
        });
    } catch (err) {
        console.log(err);
    }
}
// get form thử việc 
exports.getFormTrail_work = async (req, res, next) => {
    try {
        let form = await Form.findAll({
            where: { type: 0, status: 'close' }
        });
        let data = [];
        for (const a of form) {
            if ((Date.parse(a.dueDate) - Date.now()) > 0) {
                data.push(a);
            }
        };
        res.status(200).json({
            status: 'success',
            result: form.length,
            data: form,
        })
    } catch (err) {
        console.log(err);
    }
}
// get form danh gia
exports.getForm_APPRAISE = async (req, res, next) => {
    try {
        let form = await Form.findAll({
            where: { type: 1, status: 'close' }
        });
        let data = [];
        for (const a of form) {
            if ((Date.parse(a.dueDate) - Date.now()) > 0) {
                data.push(a);
            }
        };
        res.status(200).json({
            status: 'success',
            result: form.length,
            data: form,
        })
    } catch (err) {
        console.log(err);
    }
}

