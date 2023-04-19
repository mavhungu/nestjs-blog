import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreatePostDto,
  CreateTagDto,
  UpdatePostDto,
  UpdateTagDto,
  CreateCategoryDto,
  UpdateCategoryDto,
} from '../dto';
const slugify = require('slugify');

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaService) {}

  /**
   * ! Category
   * ? Creating category
   */
  async addCategory(category: CreateCategoryDto) {
    return await this.prismaService.category.create({
      data: {
        name: category.name,
      },
    });
  }

  async getAllCategory() {
    return await this.prismaService.category.findMany({});
  }

  async getCategoryById(id: string) {
    return await this.prismaService.category.findFirst({
      where: {
        id,
      },
    });
  }

  async updateCategory(id: string, updateCategory: UpdateCategoryDto) {
    return await this.prismaService.category.update({
      where: {
        id,
      },
      data: {
        name: updateCategory.name,
      },
    });
  }

  async deleteCategory(id: string) {
    const category = await this.prismaService.category.findUnique({
      where: { id }
    })
    if(!category) {
      throw new BadRequestException('Invalid category');
    }
    return await this.prismaService.category.delete({
      where: {
        id,
      },
    });
  }

  /**
   *  ?end of Category
   * */

  /**
   * ? Post
   * @param dto
   * @returns
   */
  async addPost(dto: CreatePostDto) {

    return await this.prismaService.post.create({
      data: {
        title: dto.title,
        summary: dto.summary,
        postBody: dto.postBody,
        slug: slugify(dto.summary),
        image: dto.image,
        authorId: dto.authorId,
        tagId: dto.tagId,
        categoryId: dto.categoryId,
        published: dto.published,
      },
    });
  }

  /**
   * ? Retrive all post
   * @param id
   * TODO get all post
   * @returns
   */

  async getAllPost() {
    return await this.prismaService.post.findMany({});
  }

  async editPost(id: string) {
    return await this.prismaService.post.findUnique({
      where: { id },
    });
  }

  /*updatePosts(id: string, updatePostDto: UpdatePostDto) {
    return this.prismaService.post.findUnique({
      where: { id },
    });
  }*/


  async updatePosts(id: string, updatePostDto: UpdatePostDto) {
    return await this.prismaService.post.update({
      where: {id},
      data: {
        ...updatePostDto
      }
    })
  }

  async removePost(id: string) {
    const post = await this.prismaService.post.findUnique({
      where: {id},
    });

    if(!post) {
      throw new BadRequestException('Invalid post');
    }

    return await this.prismaService.post.delete({
      where: {
        id
      },
    });
  }

  /* Tags */

  async addTag(createTagDto: CreateTagDto) {
    return await this.prismaService.tag.create({
      data: {
        name: createTagDto.name,
      },
    });
  }

  async getAllTag() {
    return await this.prismaService.tag.findMany({});
  }

  async getTag(id: string) {
    return await this.prismaService.tag.findUnique({
      where: { id },
    });
  }

  async updateTag(id: string, dto: UpdateTagDto) {
    return await this.prismaService.tag.update({
      where: { id },
      data: {
        name: dto.name,
      },
    });
  }

  async removeTag(id: string) {
  const tag = await this.prismaService.tag.findUnique({
    where: { id }
  });
   if(!tag) {
      throw new BadRequestException('Invalid tag');
   }
    return await this.prismaService.tag.delete({
      where: { id },
    });
  }
}
