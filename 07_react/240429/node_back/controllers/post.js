const { Post, Hashtag, User } = require('../models');
const op = require('sequelize').Op

exports.getPosts = async (req, res, next) => {
    // query string은 req.query에 있다.
    try{
        let posts = []        
        if (req.query.hashtag) { // 해시태그 검색 게시물 조회라면,
            const hashtag = await Hashtag.findOne({ where: { title: req.query.hashtag } })
            if (hashtag) {
                posts = await hashtag.getPosts({
                    include: [{
                        model: User,
                        attributes: ["id", "nickname"]
                    }]
                });
            }
        } else { // 특정 작성자의 게시물 조회거나 전체 게시물 조회라면,
            posts = await Post.findAll({
                where: { userId: req.query.userid || {[op.ne] : null} },
                include:{
                    model: User,
                    attributes: ["id", "nickname"]
                },
                order: [
                    ["createdAt", "DESC"]
                ]
            });
        }
        res.json ({
            code: 200,
            payload: posts
        })
    } catch (err) {
        console.error(err);
        next(err);
    }
}

exports.uploadPost = async (req, res, next) => {
    try {
        const post = await Post.create({
            content: req.body.content,
            img: req.body.img,
            UserId: req.user.id,
        })
        const hashtags = req.body.content.match(/#[^\s#]*/g);
        if (hashtags) {
            const result = await Promise.all(
                hashtags.map((tag) => {
                    return Hashtag.findOrCreate({
                        where : { title: tag.slice(1).toLowerCase() }
                    });
                })
            );
            await post.addHashtags(result.map((r) => r[0]));
        }

        res.json({
            code: 200,
            payload: post
        })
    } catch (err) {
        console.error(err);
        next(err);
    }
}

exports.uploadImg = (req, res) => {
    res.json({
        code: 200,
        img: `/uploads/${req.file.filename}`
    })
}

exports.modifyPost = async (req, res, next) => {
    try {
        await Post.update({
            content: req.body.content,
            img: req.body.img
        }, {
            where: { id: req.params.id }
        });
        const post = await Post.findOne({
            where: { id: req.params.id },
            include: {
                model: User,
                attributes: ["id", "nickname"]
            }
        });
        const hashtags = req.body.content.match(/#[^\s#]*/g);
        if (hashtags) {
            const result = await Promise.all(
                hashtags.map((tag) => {
                    return Hashtag.findOrCreate({
                        where : { title: tag.slice(1).toLowerCase() }
                    });
                })
            );
            await post.addHashtags(result.map((r) => r[0]));
        }
        res.json({
            code: 200,
            payload: post
        })
    } catch (err) {
        console.error(err);
        next(err);
    }
}

exports.deletePost = async (req, res, next) => {
    try {
        await Post.destroy({
            where: { id: req.params.id }
        })
        res.json({
            code: 200,
            message: "게시글이 삭제되었습니다."
        })
    } catch (err) {
        console.error(err);
        next(err);
    }
}
