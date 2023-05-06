import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('blog-post')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllPosts() {
    return this.appService.getAllPosts();
  }

  @Get('/:id')
  getPostById(@Param('id') id: string) {
    return this.appService.getPostById(id);
  }

  /**
   * Tags
   */
  @Get('/tag/:id')
  getTagById(@Param('id') id: string) {
    return this.appService.getTagById(id);
  }

  /**
   * Category
   */
  @Get('category/:id')
  getCategoryById(@Param('id') id: string) {
    return this.appService.getCategoryById(id);
  }
}
