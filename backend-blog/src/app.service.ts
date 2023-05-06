import { NotFoundException, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prismaService: PrismaService) {}

  async getAllPosts() {
    return await this.prismaService.post.findMany();
  }

  async getPostById(id: string) {
    const post = await this.prismaService.post.findUnique({
      where: { slug: id },
    });
    if (!post) {
      throw new NotFoundException("Requested post doesn't exits");
    }
    return post;
  }

  async getTagById(id: string) {
    const tag = await this.prismaService.tag.findUnique({
      where: { id },
    });
    if (!tag) {
      throw new NotFoundException("Requested tag doesn't exits");
    }
    return tag;
  }

  async getCategoryById(id: string) {
    const categoryName = await this.prismaService.category.findUnique({
      where: { id },
    });
    if (!categoryName) {
      throw new NotFoundException("Requested category doesn't exits");
    }
    return categoryName;
  }
}
