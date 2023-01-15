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

  getAllCategory(){
    return this.prismaService.category.findMany({});
  }

  getCategoryById(id: string) {
    return this.prismaService.category.findFirst({
      where: {
        id
      }
    })
  }

  updateCategory(id: string){
    return this.prismaService.category.update({
      where :{
        id
      },
      data : {
        
      }
    })
  }

  deleteCategory(id: string){
    return this.prismaService.category.delete({
      where :{
        id
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
    return this.prismaService.post.findMany({});
  }

  editPost(id: string) {
    return this.prismaService.post.findUnique({
      where: { id },
    });
  }

  updatePosts(id: string, updatePostDto: UpdatePostDto) {
    return this.prismaService.post.findUnique({
      where: { id },
      
    });
  }

  remove(id: string) {
    return this.prismaService.post.delete({
      where: { id },
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

  getAllTag(){
    return this.prismaService.tag.findMany({});
  }

  getTag(id: string) {
    return this.prismaService.tag.findUnique({
      where: { id },
    });
  }

  updateTag(id: string, dto: CreateTagDto){
    return this.prismaService.tag.update({
      where: { id },
      data: {
        name: dto.name
      }
    })
  }

  removeTag(id: string) {
    return this.prismaService.tag.delete({
      where: { id },
    });
  }

}
