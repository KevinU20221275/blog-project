import express from 'express'

// importamos los modelos
import userModel from './models/UserModel.js'
import postModel from './models/PostModel.js'
import comentModel from './models/ComentModel.js'
import likeModel from './models/LikeModel.js'

// importamos sequelize
import sequelize from './database/connection.js'

sequelize.sync({force: false})
    .then(() => {
        console.log("Modelos sincronizados con la base de datos")
    }).catch((error) => {
        console.log("Error de sincronizacion ", error)
    })

const app = express()

export default app