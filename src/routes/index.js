import express from 'express'
import welcomeRoutes from "./api/welcomeRoutes.js"
import articleRoutes from "./api/articleRoutes.js"
import queriesRoutes from "./api/queriesRoutes.js"
import userRoutes from "./api/userRoutes.js"

const routes = express.Router()

routes.use('/', welcomeRoutes)
routes.use('/aritcles', articleRoutes)
routes.use('/queries', queriesRoutes)
// localhost:3000/api/v1/users/
routes.use('/users', userRoutes)

export default routes