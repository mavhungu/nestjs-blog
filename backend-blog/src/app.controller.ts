import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('all')
  getUser() {
    return this.appService.getUser();
  }
  @Post('ronewa')
  postUser() {
    return this.appService.postUser();
  }
}
