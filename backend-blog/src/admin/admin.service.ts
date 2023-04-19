import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto';


@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async register(createUserDto: CreateUserDto) {
    const users = await this.prisma.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });
    if (users) {
      throw new ForbiddenException('User already taken');
    }
    const pass = await bcrypt.hash(createUserDto.password, 12);
    await this.prisma.user.create({
      data: {
        email: createUserDto.email,
        password: pass,
      },
    });
    return 'Data saved';
  }

  async login(createUserDto: CreateUserDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });
    if (!user) {
      throw new ForbiddenException('Credentials incorrect');
    }
    const pass = await bcrypt.compareSync(
      createUserDto.password,
      user.password,
    );
    if (!pass) {
      throw new ForbiddenException('Incorrect Credentials');
    }
    const { password, ...result } = user;
    return result;
  }

  async getAll() {
    return this.prisma.user.findMany({});
  }

  getUser() {
    return 'Mavhungu Ronewa';
  }
}
