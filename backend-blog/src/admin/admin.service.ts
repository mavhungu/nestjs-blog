import { BadRequestException, Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService){}

  async register(createUserDto: CreateUserDto){
    const users = await this.prisma.user.findUnique({
      where:{
        email: createUserDto.email
      }
    });
    if(users){
      throw new BadRequestException("User already taken")
    }
    const pass = await bcrypt.hash(createUserDto.password,12);
    await this.prisma.user.create({
      data:{
        email: createUserDto.email,
        password: pass
      }
    });

    return 'Data saved';
  }

  async login(createUserDto){
    return 'login data';
  }

  getUser(){
    return 'Mavhungu Ronewa';
  }
  getAll(){
    return this.prisma.user.findMany({});
  }
}
