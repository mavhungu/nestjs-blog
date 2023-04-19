import { NotFoundException, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {

  constructor(private prismaService: PrismaService) {}

  async getAllPosts() {
    return await this.prismaService.post.findMany();
  }

  async getPostById(id: string) {
    const post =  await this.prismaService.post.findUnique({
      where: { slug: id },
    });
    if(!post) {
      throw new NotFoundException('Requested post doesn\'t exits');
    }
    return post;
  }

}
