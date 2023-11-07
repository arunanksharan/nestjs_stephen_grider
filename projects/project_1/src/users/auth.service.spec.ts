import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { UserEntity } from './users.entity';

it('can create an instance of auth service', async () => {
  // Create a dummy copy of usersService
  const dummyUsersService: Partial<UsersService> = {
    find: () => Promise.resolve([]),
    create: (email: string, password: string) =>
      Promise.resolve({ id: 1, email, password } as UserEntity),
  };
  const module = await Test.createTestingModule({
    providers: [
      AuthService,
      {
        provide: UsersService,
        useValue: dummyUsersService,
      },
    ],
  }).compile();
  const service = module.get(AuthService);
  expect(service).toBeDefined();
});
