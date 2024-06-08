import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './users.dto';

@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/createusers')
  createUsers(): boolean {
    try {
      const usersArray: CreateUserDto[] = [];
      for (let i = 0; i < 1000; i++) {
        const userData: CreateUserDto = {
          firstName: '123',
          lastName: '456',
          age: 20,
          gender: 0,
          haveProblems: Math.floor(Math.random() * 2) === 0,
        };

        usersArray.push(userData);
      }

      this.usersService.createUsers(usersArray);

      return true;
    } catch (error) {
      console.error(error);

      return false;
    }
  }

  @Get('/updproblems')
  updateProblems(): Promise<string> {
    return this.usersService.updateProblems();
  }
}
