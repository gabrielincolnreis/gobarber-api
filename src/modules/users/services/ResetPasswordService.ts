import User from '../infra/typeorm/entities/User';
import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import IUserTokensRepository from '../repositories/IUserTokensRepository';

interface IRequest {
  password: string;
  token: string;
}
@injectable()
class ResetPasswordService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('UserTokensRepository')
    private userTokenRepository: IUserTokensRepository,
  ) {}

  public async execute({ token, password }: IRequest): Promise<void> {
    const userToken = await this.userTokenRepository.findByToken(token);

    if (!userToken) {
      throw new AppError('User token does not exists');
    }
    const user = await this.usersRepository.findById(userToken.user_id);

    if (!user) {
      throw new AppError('User token does not exists');
    }

    user.password = password;

    await this.usersRepository.save(user);
  }
}

export default ResetPasswordService;
