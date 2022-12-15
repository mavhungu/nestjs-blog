import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from '../dto';

@Injectable()
export class PostService {
  constructor( private prismaService: PrismaService) {}

  addPost(dto: CreatePostDto) {
    console.log(dto);
    return this.prismaService.post.create({
      data: {
        ...dto,
      }
    })
  }
  /*data:{
    title: createPostDto.title,
    published: createPostDto.published,
    postBody: createPostDto.postBody,
    catagory: createPostDto.category,
  }
  */
  editPost(){
    return this.prismaService.post.findUnique({
      where:{}
    })
  }
  updatePost(){
    return this.prismaService.post.findUnique({
      where:{}
    })
  }
  deletePost(){
    return this.prismaService.post.delete({
      where:{}
    })
  }
}
