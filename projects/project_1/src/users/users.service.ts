import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity) private repo: Repository<UserEntity>,
  ) {}

  create(email: string, password: string) {
    const user = this.repo.create({ email, password });
    return this.repo.save(user);
  }

  async findOne(id: number) {
    const user = await this.repo.findOne({ where: { id } });
    console.log(user);
    return user;
  }

  async find(email: string) {
    const user = await this.repo.find({ where: { email } });
    if (!user) {
      throw new Error('User by email not found'); // Or use a more specific error type
    }
    return user;
  }

  async update(id: number, attrs: Partial<UserEntity>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('User by email not found'); // Or use a more specific error type
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }
  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('User by email not found'); // Or use a more specific error type
    }
    return this.repo.remove(user);
  }
}
