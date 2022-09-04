import { Body, Controller, Post } from '@nestjs/common';
import { CreatePostDto } from '../dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(
    private readonly postService: PostService
  ){}

  @Post()
  addPost(@Body() createPostDto:CreatePostDto){
    return this.postService.addPost(createPostDto)
  }
}
