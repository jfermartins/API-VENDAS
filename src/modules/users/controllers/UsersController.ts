import { Request, Response } from 'express';
import ListUserService from '../services/ListUserService';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUser = new ListUserService();

    const users = listUser.execute();

    return response.json(users);
  }
}
