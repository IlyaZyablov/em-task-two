import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { InsertResult, Repository } from 'typeorm';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async createUsers(usersArray: CreateUserDto[]): Promise<InsertResult> {
    return await this.usersRepository
      .createQueryBuilder()
      .insert()
      .into(Users)
      .values(usersArray)
      .execute();
  }

  async updateProblems(): Promise<string> {
    const problemsCount = await this.usersRepository
      .createQueryBuilder('user')
      .where('user.haveProblems = true')
      .getCount();

    await this.usersRepository.query(
      'ALTER TABLE users DROP COLUMN "haveProblems"',
    );

    await this.usersRepository.query(
      'ALTER TABLE users ADD COLUMN "haveProblems" BOOLEAN DEFAULT false',
    );

    return `Количество обновлённых строк: ${problemsCount}`;
  }
}
