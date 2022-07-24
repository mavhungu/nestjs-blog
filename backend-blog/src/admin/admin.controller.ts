import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService){}

  @Get()
  getUser(){
    return this.adminService.getUser();
  }
  @Get('all')
  getAll(){
    return this.adminService.getAll();
  }
}
