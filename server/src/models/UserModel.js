import sequelize from "../database/connection.js";
import { DataTypes } from "sequelize";

const userModel = sequelize.define('users', {
    username : {
        type: DataTypes.STRING,
        allowNull: false
    },
    password : {
        type: DataTypes.STRING,
        allowNull: false
    },
    email : {
        type : DataTypes.STRING
    }
})

export default userModel;