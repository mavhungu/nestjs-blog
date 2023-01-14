import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CreatePostDto, CreateTagDto, UpdatePostDto, CreateCategoryDto } from '../dto';
import { PostService } from './post.service';

@Controller('admin/data')
export class PostController {
  constructor(private readonly postService: PostService) {}

  /**
   * 
   * @param createPostDto
   * ? POSTS
   * 
   * @returns 
   */
  @Get('post/all')
  async getAllPost() {
    return await this.postService.getAllPost();
  }

  @Post('post/add')
  async addPost(@Body() createPostDto: CreatePostDto) {
    return this.postService.addPost(createPostDto);
  }

  @Get('post/:id')
  async editPost(@Param(':id', ParseIntPipe) id: number) {
    return this.postService.editPost(id);
  }

  @Patch('post/:id')
  async updatePosts(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.postService.updatePosts(id, updatePostDto);
  }

  @Delete('post/:id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.postService.remove();
  }

  /**
   * ? SETTING CATEGORY
   */
  /* Tags */

  @Post('category/add')
  async addCategory(@Body() createCategory: CreateCategoryDto){
    return this.postService.addCategory(createCategory);
  }
  
  @Post('tag')
  async addTag(@Body() createTagDto: CreateTagDto) {
    return await this.postService.addTag(createTagDto);
  }

  @Get('tag/:id')
  async getTag(@Param('id') id: string) {
    return await this.postService.getTag(id);
  }

}
