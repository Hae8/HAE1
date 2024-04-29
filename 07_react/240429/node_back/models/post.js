const Sequelize = require('sequelize');

class Post extends Sequelize.Model { // Sequelize.Model에서 상속받아 Post라는 클래스를 만듦
    static initiate(sequelize) {
        Post.init({
            content: {
                type: Sequelize.STRING(200),
                allowNull: false,
            },
            img: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
        }, {
            sequelize,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }
    static associate(db) {
        db.Post.belongsTo(db.User); // User와는 일대다 관계
        db.Post.belongsToMany(db.Hashtag, {through: 'PostHashtag'}); // Hashtag와는 다대다 관계
    }
}
module.exports = Post;