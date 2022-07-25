import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateUserDto } from './dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService){}

  @Post('register')
  register(@Body() createUserDto: CreateUserDto){
    return this.adminService.register(createUserDto);
  }

  @Post('login')
  login(@Body() createUserDto: CreateUserDto){
    return this.adminService.login(createUserDto);
  }

  @Get()
  getUser(){
    return this.adminService.getUser();
  }

  @Get('all')
  getAll(){
    return this.adminService.getAll();
  }
}
