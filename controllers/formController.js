const FormDetail = require('../models/formDetail.models')
const Form = require('../models/form.models')
const sequelizeDB = require('../config/database')
const userModels = require('../models/user.models');

exports.createForm = async (req, res, next) => {
    const UserId = req.body.userId;
    const receiver = req.body.receiver;
    const type = req.body.type;
    const status = req.body.status;
    const dueDate = req.body.dueDate;
    const isDelete = req.body.isDeleted;
    const createBY = req.body.createBy;
    const updateBY = req.body.updateBy;
    const content = req.body.FormDetail.content;
    const managerComment = req.body.FormDetail.managerComment;
    const isDeleted = req.body.FormDetail.isDeleted;
    const createBy = req.body.createBy;
    const updateBy = req.body.updateBy;
    const t = await sequelizeDB.transaction();
    const userId = await userModels.findOne({
        where: {id: UserId}
    })
    if(!userId) {
       return res.end('not found');
    }
    try {
        const form = await Form.create({
            UserId: UserId.id,
            receiver: receiver,
            type: type,
            status: status,
            dueDate: dueDate,
            isDeleted: isDelete,
            createBy: createBY,
            updateBy: updateBY,
        }, { transaction: t });
        await FormDetail.create({
            formID: form.id,
            content: content,
            managerComment: managerComment,
            isDeleted: isDeleted,
            createBy: createBy,
            updateBy: updateBy,
        }, { transaction: t });
        await t.commit();
        res.status(200).send('create form success');
        console.log("abc");
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
    const createBY = req.body.createBy;
    const updateBY = req.body.updateBy;
    const content = req.body.FormDetail.content;
    const managerComment = req.body.FormDetail.managerComment;
    const isDeleted = req.body.FormDetail.isDeleted;
    const createBy = req.body.createBy;
    const updateBy = req.body.updateBy;
    const t = await sequelizeDB.transaction();
    try {
        const form = await Form.update({
            receiver: receiver,
            type: type,
            status: status,
            dueDate: dueDate,
            isDeleted: isDelete,
            createBy: createBY,
            updateBy: updateBY,
        }, { where: { id: FormId }, transaction: t });
        await FormDetail.update({
            formID: form.id,
            content: content,
            managerComment: managerComment,
            isDeleted: isDeleted,
            createBy: createBy,
            updateBy: updateBy,
        }, { where: { FormId: FormId }, transaction: t });
        await t.commit();
        res.status(200).send('update form success');
        console.log("abc");

    } catch (error) {
        await t.rollback();
    }
}

// exports.getStatusForm = (req, res, next) => {
//     try {
//         let  form = await Form.findAll({
//             where:{status: 'submitted'},
//             include: FormDetail
//         });
//         res.status(200).json({
//             status: 'success',
//             data: form
//         })
//     }catch (error) {
//         res.json({ status: 'error',error});
//     }
// }
// exports.PutStatusForm = (req,res,next) => {
//     const FormId = req.params.id;
//     const 
// }
// approve 
exports.approveForm = (req, res, next) => {

}
// close
exports.closeForm = (req, res, next) => {

}