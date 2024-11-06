import sequelize from "../database/connection.js";
import { DataTypes } from "sequelize";
import userModel from "./UserModel.js";


const postModel = sequelize.define('posts',{
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date :{
        type: DataTypes.DATE,
        allowNull: false
    }
})

postModel.belongsTo(userModel, {foreignKey: 'user_id'})

export default postModel;