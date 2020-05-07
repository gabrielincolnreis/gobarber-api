import User from '../../infra/typeorm/entities/User';
import IUsersRespository from '@modules/users/repositories/IUsersRepository';
import ICreateUsersDTO from '@modules/users/dtos/ICreateUserDTO';
import { uuid } from 'uuidv4';
class FakeUsersRepository implements IUsersRespository {
  private users: User[] = [];

  public async findById(id: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.id === id);

    return findUser;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.email === email);

    return findUser;
  }

  public async create(userData: ICreateUsersDTO): Promise<User> {
    const user = new User();
    Object.assign(user, { id: uuid() }, userData);
    // const user = this.ormRepository.create(userData);
    // await this.ormRepository.save(user);
    this.users.push(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    const findIndex = this.users.findIndex(findUser => findUser.id === user.id);

    this.users[findIndex] = user;

    return user;
  }
}

export default FakeUsersRepository;
