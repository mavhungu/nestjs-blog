import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from '../dto';

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaService) {}

  addPost(dto: CreatePostDto) {
    return this.prismaService.post.create({
      data: {
        ...dto,
      },
    });
  }

  editPost() {
    return this.prismaService.post.findUnique({
      where: {},
    });
  }
  updatePost() {
    return this.prismaService.post.findUnique({
      where: { },
    });
  }
  deletePost() {
    return this.prismaService.post.delete({
      where: {},
    });
  }
}
