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
        // to: 'longnt1@vmodev.com',
        subject: 'Test Nodemailer',
        text: 'xin chào bạn',
        // text : json.stringify(req.params.password),
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