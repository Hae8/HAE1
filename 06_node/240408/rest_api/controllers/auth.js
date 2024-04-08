const User = require('../models/user');

exports.join = async(req, res, next) => {
    const { email, nickname, password } = req.body;
    try{
        const exUser = await User.findOne({ where: { email } });
        if (exUser) {
            throw new Error('이미 가입된 이메일입니다.');
        }
        await User.create ({
            email,
            nickname,
            password
        });
        res.json({
            code: 200,
            message: 'success'
        })
    } catch (err) {
        console.error(err);
        next(err)
    }
};