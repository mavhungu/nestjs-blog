import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from './admin.service';
import { CreateUserDto } from './dto';
import { Response } from 'express';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private jwtService: JwtService,
  ) {}

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.adminService.register(createUserDto);
  }

  @Post('login')
  async login(
    @Body() createUserDto: CreateUserDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const user = await this.adminService.login(createUserDto);
    const access_token = await this.signToken(user.id, user.email);
    response.cookie('jwt', access_token, { httpOnly: true });
    return user;
  }

  @Get()
  getUser() {
    return this.adminService.getUser();
  }

  @Get('all')
  getAll() {
    return this.adminService.getAll();
  }

  async signToken(userId: string, email: string) {
    const payload = {
      sub: userId,
      email,
    };
    return await this.jwtService.signAsync(payload, {
      secret: process.env.SECRET,
      expiresIn: '5m'
    });
  }
}
