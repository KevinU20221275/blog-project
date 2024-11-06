import sequelize from "../database/connection.js";
import userModel from "./UserModel.js";
import postModel from "./PostModel.js";


const likeModel = sequelize.define('likes')

likeModel.belongsTo(userModel, {foreignKey: 'user_id'})
likeModel.belongsTo(postModel, {foreignKey: 'post_id'})

export default likeModel;
