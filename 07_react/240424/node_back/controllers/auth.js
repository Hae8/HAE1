const bcrypt = require('bcrypt')
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

exports.createToken = async (req, res, next) => {
    try {
        // passport.authenticate('local') 미들웨어 실행
        passport.authenticate('local', { session : false }, (err, user, info)=>{
            if (err) {
                console.error(err);
                return next(err);
            } else if (!user) {
                throw new Error(info.message);
            }
            // 정상 로그인
            return req.login(user, (err) => {
                const accessToken = jwt.sign(
                    { id: user.id, nickname: user.nickname},
                    process.env.JWT_SECRET,
                    { expiresIn : '1h', issuer: "mini_project", subject: "accessToken"}
                );

                if (err) {
                    console.error(err);
                    return next(err);
                };

                res.json({
                    code: 200,
                    message: '토큰이 발급되었습니다.',
                    accessToken
                })
            })
        })(req, res, next);
    } catch (err) {
        console.error(err);
        next(err)
    }
}


exports.join = async(req, res, next) => {
    console.log(req.body);
    const { email, nickname, password } = req.body;
    try{
        const exUser = await User.findOne({ where: { email }});
        if (exUser) {
            throw new Error ("이미 가입된 이메일입니다.")
        }
        const hash = await bcrypt.hash(password, 10)
        await User.create({
            email,
            nickname,
            password: hash
        });
        res.json ({
            code: 200,
            message: '회원가입이 완료되었습니다.'
        })
    } catch(err) {
        console.error(err)
        return next(err)
    }
}