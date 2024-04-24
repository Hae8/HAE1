const { User } = require('../models');

exports.modifyUser = async (req, res, next) => {
    try {
        await User.update({
            nickname: req.body.nickname
        },{
            where: { id : req.user.id}
        });

        res.json({
            code: 200,
            message: '사용자 정보 수정 완료'
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

exports.deleteUser = async (req, res, next) => {
    try {
        await User.destroy({
            where: { id : req.user.id}
        });

        res.json({
            code: 200,
            message: '사용자 삭제 완료'
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}