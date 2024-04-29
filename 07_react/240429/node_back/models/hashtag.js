const Sequelize = require('sequelize');
class Hashtag extends Sequelize.Model { // Sequelize.Model에서 상속받아 Hashtag라는 클래스를 만듦
    static initiate(sequelize) {
        Hashtag.init({
            title: {
                type: Sequelize.STRING(15),
                allowNull: false,
                unique: true,
            },
        }, {
            sequelize,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }
    static associate(db) {
        db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' }); // Post와는 다대다 관계
    }
}
module.exports = Hashtag;