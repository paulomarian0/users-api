import { Router } from "express";
import UserController from "./controllers/UserController";

const routes = Router()

routes.get('/users', UserController.listUser)
routes.get('/users/:id', UserController.getUser)
routes.post('/create', UserController.createUser)
routes.put('/update/:id', UserController.updateUser)
routes.delete('/delete/:id', UserController.deleteUser)
export default routes