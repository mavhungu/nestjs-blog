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
import { CreatePostDto, CreateTagDto, UpdatePostDto } from '../dto';
import { PostService } from './post.service';

@Controller('admin/data')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('add')
  async addPost(@Body() createPostDto: CreatePostDto) {
    return this.postService.addPost(createPostDto);
  }

  @Get(':id')
  async editPost(@Param(':id', ParseIntPipe) id: number) {
    return this.postService.editPost(id);
  }

  @Patch(':id')
  async updatePosts(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.postService.updatePosts(id, updatePostDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.postService.remove();
  }

  /* Tags */

  @Post('tag')
  async addTag(@Body() createTagDto: CreateTagDto) {
    return await this.postService.addTag(createTagDto);
  }

  @Get('tag/:id')
  async getTag(@Param('id') id: string) {
    return await this.postService.getTag(id);
  }
}
