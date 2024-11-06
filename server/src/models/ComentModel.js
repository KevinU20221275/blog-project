import sequelize from "../database/connection.js";
import { DataTypes } from "sequelize";
import postModel from "./PostModel.js";
import userModel from "./UserModel.js";

const comentModel = sequelize.define('coments', {
    content : {
        type : DataTypes.STRING,
        allowNull: false
    },
    date : {
        type : DataTypes.DATE,
        allowNull: false
    }
})

comentModel.belongsTo(postModel, {foreignKey: 'post_id'})
comentModel.belongsTo(userModel, {foreignKey: 'user_id'})

export default comentModel;