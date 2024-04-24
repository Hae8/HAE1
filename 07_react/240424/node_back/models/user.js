const Sequelize = require("sequelize");
class User extends Sequelize.Model { // Sequelize.Model에서 상속받아 User라는 클래스를 만듦
    static initiate(sequelize) {
        User.init({
            email: {
                type: Sequelize.STRING(40),
                allowNull: true,
                unique: true, // 중복안되는 값
            },
            nickname: {
                type: Sequelize.STRING(15),
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            provider: {
                type: Sequelize.ENUM("local", "kakao"),
                allowNull: false,
                defaultValue: "local",
            },
            kakaoId: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            refreshToken: {
                type: Sequelize.STRING(255),
                allowNull: true,
            }
        },{
            sequelize,
            paranoid: true,
            charset: "utf8",
            collate: "utf8_general_ci",
        });
    }
    static associate(db) {
        db.User.hasMany(db.Post);
        db.User.belongsToMany(db.User, { foreignKey: 'followingId', as: 'Followers', through: 'Follow' });
        db.User.belongsToMany(db.User, { foreignKey: 'followerId', as: 'Followings', through: 'Follow' });
    }
}
module.exports = User;