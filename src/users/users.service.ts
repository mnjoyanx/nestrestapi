import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';
import { RolesService } from '../roles/roles.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private rolesService: RolesService,
  ) {}

  async getAll(): Promise<User[]> {
    return await this.userRepository.findAll({ include: { all: true } });
  }

  async getOne(id: string): Promise<User> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async create(createDto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.create(createDto);
    const role = await this.rolesService.getRoleByValue('admin');
    await user.$set('roles', [role.id]);
    return user;
  }
}
