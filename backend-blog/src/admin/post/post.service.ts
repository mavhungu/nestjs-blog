import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto, CreateTagDto, UpdatePostDto } from '../dto';

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaService) {}
  /*
   * Category
   */
  addPost(dto: CreatePostDto) {
    return this.prismaService.post.create({
      data: {
        ...dto,
      },
    });
  }

  editPost(id: number) {
    return this.prismaService.post.findUnique({
      where: {},
    });
  }

  updatePosts(id: number, updatePostDto: UpdatePostDto) {
    return this.prismaService.post.findUnique({
      where: {},
    });
  }

  remove() {
    return this.prismaService.post.delete({
      where: {},
    });
  }

  /* Tags */

  addTag(createTagDto: CreateTagDto) {
    return this.prismaService.tag.create({
      data: {
        ...createTagDto,
      },
    });
  }

  getTag(id: string) {
    return this.prismaService.tag.findUnique({
      where: { id },
    });
  }

  removeTag() {
    return this.prismaService.tag.delete({
      where: {},
    });
  }
}
