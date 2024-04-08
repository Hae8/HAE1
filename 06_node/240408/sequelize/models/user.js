const Sequelize = require('sequelize');

class User extends Sequelize.Model {
    static initiate(sequelize) {
        User.init({
            // 테이블 컬럼 정의
            // 사용자 테이블 [userID, name, password, profileImg]
            userId : {
                type: Sequelize.STRING(20),
                allowNull: false,
                primaryKey: true
            },
            name : {
                type: Sequelize.STRING(10),
                allowNull: false
            },
            password : {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            profileImg : {
                type: Sequelize.STRING(200),
                allowNull: false,
                defaultValue: 'default.jpg'
            }
        },{
            // 모델 - 테이블 간의 옵션 정의
            sequelize,
            timestamps: true, // createAt, updateAt 컬럼 자동 생성
            underscored: false, // 카멜케이스 -> 스네이크케이스
            modelName: 'User', // 모델 이름
            tableName: 'Users', // 실제 DB 테이블 이름
            paranoid: true, // deleteAt 컬럼 생성 (false가 기본값)
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    };
    static associate(db) {
        db.User.hasMany(db.Post, { foreignKey: 'userId', sourceKey: 'userId' })
    };
};

module.exports = User;