import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {

  constructor(private prismaService: PrismaService) {}

  async getAllPosts() {
    return await this.prismaService.post.findMany();
  }

  async getPostById(id: string) {
    const post =  await this.prismaService.post.findUnique({
      where: { id },
    });
    if(!post) {
      throw new ForbiddenException('Incorrect Credentials');
    }
    return post;
  }

}
