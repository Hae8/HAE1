const Post = require("../models/post");
const User = require("../models/user");
const Hashtags = require("../models/hashtag");

exports.getPosts = async (req, res, next) => {
    try{
        const posts = await Post.findAll({
            include: {
                model: User,
                attributes: ["id", "nickname"],
            },
            order : [["createAt", "DESC"]]
        });
        res.json({
            code: 200,
            payload: posts
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

exports.uploadPost = async (req, res, next) => {
    try{
        const post = await Post.create({ // 포스트 생성 sql (수정할 때는 update와 where문을 사용해서 작성할 수 있다.)
            content: req.body.content,
            img: req.body.url,
            UserId: req.body.userId
        });
        const hashtags = req.body.content.match(/#[^\s#]*/g)
        if (hashtags) {
            const result = await Promise.all(
                hashtags.map(tag=> {
                    return Hashtags.findOrCreate({ // 찾아보고 없으면 만든다.
                        where: {
                            title: tag.slice(1).toLowerCase()
                        }
                    });
                })
            );
            await post.addHashtags(result.map(r=>r[0])); // 찾은 (또는 없는)결과물을 addHashtags에 넣는다.
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
exports.afterUploadImg = (req, res) => {
    res.json({
        code: 200,
        message: `uploads/${req.file.filename}`
    })
}

exports.modifyPost = async (req, res, next) => {
    try{
        const post = await Post.update({ // 포스트 생성 sql (수정할 때는 update와 where문을 사용해서 작성할 수 있다.)
            content: req.body.content,
            img: req.body.url,
        },
        {
            where: { id : req.params.id }
        });
        const hashtags = req.body.content.match(/#[^\s#]*/g)
        if (hashtags) {
            const result = await Promise.all(
                hashtags.map(tag=> {
                    return Hashtags.findOrCreate({ // 찾아보고 없으면 만든다.
                        where: {
                            title: tag.slice(1).toLowerCase()
                        }
                    });
                })
            );
            await post.addHashtags(result.map(r=>r[0])); // 찾은 (또는 없는)결과물을 addHashtags에 넣는다.
        }
        res.json({
            code: 200,
            message: 'success'
        })
    } catch (err) {
        console.error(err);
        next(err);
    }
}

exports.deletePost = async(req, res, next) => {
    try{
        await Post.destroy({
            where: {id: req.params.id}
        });
        res.json({
            code: 200,
            message: 'success'
        });
    } catch (err) {
        console.error(err);
        next(err)
    }
}