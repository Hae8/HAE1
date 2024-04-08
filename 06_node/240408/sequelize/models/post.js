const Sequelize = require('sequelize');

class Post extends Sequelize.Model {
    static initiate(sequelize){
        Post.init({
            // 테이블 컬럼 정의
            // 게시물 테이블 [id, content]
            content : {
                type: Sequelize.TEXT,
                allowNull: false,
            }
        },{
            // 모델 - 테이블 간의 옵션 정의
            sequelize,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    };
    static associate(db) {
        db.Post.belongsTo(db.User, { foreignKey: 'userId', targetKey: 'userId' })
    };
};

module.exports = Post;