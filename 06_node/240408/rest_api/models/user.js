const Sequelize = require("sequelize");

class User extends Sequelize.Model {
    static initiate(sequelize) {
        User.init({
            // [id, 이메일, 닉네임, 비밀번호(암호화), provider(local, kakao), kakaoId, refreshToken]
            email: {
                type: Sequelize.STRING(50),
                allowNull: true,
                unique: true,
            },
            nickname: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            provider: {
                type: Sequelize.ENUM("local", "kakao"),
                allowNull: false,
                defaultValue: "local"
            },
            kakaoId: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            refreshToken: {
                type: Sequelize.STRING(255),
                allowNull: true,
            }
        }, {
            sequelize,
            paranoid: true,
            charset: "utf8mb4",
            collate: "utf8mb4_general_ci"
        })
    }

    static associate(db) {
        db.User.hasMany(db.Post);
        db.User.belongsToMany(db.User, { foreignKey: "followingId", as: "Followers", through: 'Follow' });
        db.User.belongsToMany(db.User, { foreignKey: "followerId", as: "Followings", through: 'Follow' });
    }
}

module.exports = User;