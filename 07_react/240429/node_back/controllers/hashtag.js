const { Hashtag } = require('../models');

exports.getHashtags = async (req, res, next) => {
    try{
        let hashtags = []        
        hashtags = await Hashtag.findAll({
            order: [
                ["createdAt", "DESC"]
            ],
            limit: 10
        });
        res.json ({
            code: 200,
            payload: hashtags
        })
    } catch (err) {
        console.error(err);
        next(err);
    }
}