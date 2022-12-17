import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDto } from '../dto';
import { PostService } from './post.service';

@Controller('admin/data')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('add')
  addPost(@Body() createPostDto: CreatePostDto) {
    return this.postService.addPost(createPostDto);
  }
  @Get()
  editPost() {
    return this.postService.editPost();
  }
  @Get()
  updatePost() {
    return this.postService.updatePost();
  }
  @Get()
  deletePost() {
    return this.postService.deletePost();
  }
}
