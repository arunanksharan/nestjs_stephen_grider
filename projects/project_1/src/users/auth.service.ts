import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt); // This is a function that takes a callback and turns it into a promise

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(email: string, password: string) {
    // Check if email is in user
    const users = await this.usersService.find(email);
    console.log(users);
    if (users.length > 0) {
      throw new BadRequestException('Email in use');
    }
    // Hash the password of the user
    // - Generate a salt (random string)
    const salt = randomBytes(8).toString('hex');
    // - Hash the salt and the password together
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    // - Join the hashed password and the salt together
    const result = salt + '.' + hash.toString('hex');

    // Create a new user and save it
    const user = await this.usersService.create(email, result);

    // Return the user created
    return user;
  }

  async signin(email: string, password: string) {
    const [user] = await this.usersService.find(email);
    if (!user) {
      throw new NotFoundException('Email not found! Please Sign Up!');
    }
    const [salt, storedHash] = user.password.split('.');
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('Invalid password!');
    }
    return user;
  }
}
