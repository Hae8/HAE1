const Sequelize = require("sequelize");

class Post extends Sequelize.Model {
    static initiate(sequelize) {
        Post.init({
            // id, content, img
            content: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            img: {
                type: Sequelize.STRING(255),
                allowNull: true
            }
        }, {
            sequelize,
            charset: "utf8mb4",
            collate: "utf8mb4_general_ci"
        });
    }

    static associate(db) {
        db.Post.belongsTo(db.User);
        db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
    }
};

module.exports = Post;