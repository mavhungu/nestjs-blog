import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from '../dto';

@Injectable()
export class PostService {
  constructor( private prismaService: PrismaService) {}

  addPost(createPostDto: CreatePostDto) {
    return this.prismaService.post.create({
      data:{
        title: createPostDto.title,
        image: createPostDto.image,
        postBody: createPostDto.postBody
      }
    })
  }
}
