import { Request, Response } from 'express'
import User from '../schemas/User'


class UserController {

  public async listUser(req: Request, res: Response): Promise<Response> {

    try {
      const user = await User.find()
      return res.status(200).json(user)

    } catch (err) {
      return res.status(500).json({ message: "Error" })
    }
  }

  public async getUser(req: Request, res: Response): Promise<Response> {

    try {
      const user = await User.findById(req.params.id)
      return res.status(200).json(user)

    } catch (err) {
      return res.status(500).json({ message: "Error" })
    }
  }

  public async createUser(req: Request, res: Response): Promise<Response> {

    try {
      const user = await User.create(req.body)
      return res.status(200).json(user)

    } catch (err) {
      return res.status(500).json({ message: "Error" })
    }
  }

  public async updateUser(req: Request, res: Response): Promise<Response> {

    try {
      const user = await User.findByIdAndUpdate((req.params.id), req.body)
      return res.status(200).json(user)

    } catch (err) {
      return res.status(500).json({ message: "Error" })
    }
  }

  public async deleteUser(req: Request, res: Response): Promise<Response> {

    try {
      const user = await User.findByIdAndDelete(req.params.id)
      return res.status(200).json(user)

    } catch (err) {
      return res.status(500).json({ message: "Error" })
    }
  }



}

export default new UserController()