import { NotFoundException, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prismaService: PrismaService) {}

  async getAllPosts() {
    return await this.prismaService.post.findMany({
      where: {
        published: {
          equals: true,
        },
      },
    });
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

  async searchPost(id: string) {
    const data = await this.prismaService.post.findMany({
      where: {
        OR: [
          {
            postBody: {
              contains: id,
              mode: 'insensitive',
            },
          },
          {
            summary: {
              contains: id,
              mode: 'insensitive',
            },
          },
        ],
        AND: {
          published: true,
        },
      },
    });
    if (!data) {
      throw new NotFoundException('Requested data not found');
    }
    return data;
  }

  async getAuthorById(id: string) {
    const author = await this.prismaService.user.findUnique({
      where: { id },
    });
    if (!author) {
      throw new NotFoundException('Requested user not found');
    }
    return author;
  }

  async getTagById(id: string) {
    const tagName = await this.prismaService.tag.findUnique({
      where: { id },
    });
    if (!tagName) {
      throw new NotFoundException("Requested tag doesn't exits");
    }
    return tagName;
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
