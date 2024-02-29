import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import path from 'path';

interface IRequest {
  user_id: string;
  avatarFilename: string;
}

class UpdateUserAvatarService {
  public async execute({ user_id, avatarFilename }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await  usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found. ');
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join
    }
  }
}

export default UpdateUserAvatarService;
