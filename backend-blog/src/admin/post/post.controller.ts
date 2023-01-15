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
import { CreatePostDto, CreateTagDto, UpdatePostDto, CreateCategoryDto, UpdateTagDto } from '../dto';
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
  async editPost(@Param(':id', ParseIntPipe) id: string) {
    return this.postService.editPost(id);
  }

  @Patch('post/:id')
  async updatePosts(
    @Param('id', ParseIntPipe) id: string,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.postService.updatePosts(id, updatePostDto);
  }

  @Delete('post/:id')
  async remove(@Param('id') id: string) {
    return this.postService.remove(id);
  }

  /**
   * ? SETTING CATEGORY
   */
  
  @Post('category/add')
  async addCategory(@Body() createCategory: CreateCategoryDto){
    return this.postService.addCategory(createCategory);
  }
  
  /**
   * ? Tags
   * 
   */
  
  @Post('tag/add')
  async addTag(@Body() createTagDto: CreateTagDto) {
    return await this.postService.addTag(createTagDto);
  }
  
  @Get('tag')
  async getTags(){
    return this.postService.getAllTag();
  }
  
  @Get('tag/:id')
  async getTag(@Param('id') id: string) {
    return await this.postService.getTag(id);
  }

  @Patch('tag/:id')
  async updateTag(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateTag: UpdateTagDto,
  ) {
    return this.postService.updateTag(id,this.updateTag)
  }

  @Delete('tag/:id')
  async removeTag(@Param('id') id: string){
    this.postService.removeTag(id);
  }

}
