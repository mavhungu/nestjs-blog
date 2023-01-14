import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto, CreateTagDto, UpdatePostDto, CreateCategoryDto } from '../dto';

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaService) {}

  /**
   * ! Category
   * ? Creating category
   */
  addCategory(category: CreateCategoryDto){
    return this.prismaService.category.create({
      data: {
        name: category.name
      }
    })
  }
  
  /**
   *  ?end of Category 
   * */

  /**
   * ? Post
   * @param dto 
   * @returns 
   */
  addPost(dto: CreatePostDto) {
    return this.prismaService.post.create({
      data: {
        title: dto.title,
        postBody: dto.postBody,
        slug: dto.postBody,
        image: dto.image,
        authorId: dto.authorId,
        tagId: dto.tagId,
        categoryId: dto.categoryId,
        published: dto.published
      }
    })
  }

  /**
   * ? Retrive all post
   * @param id 
   * TODO get all post
   * @returns 
   */

  getAllPost(){
    return this.prismaService.post.findMany();
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
        name: createTagDto.name
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
