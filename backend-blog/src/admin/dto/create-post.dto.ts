import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsBoolean()
  published: boolean;
  @IsString()
  @IsNotEmpty()
  slug: string;
  @IsString()
  @IsNotEmpty()
  image: string;
  @IsString()
  @IsNotEmpty()
  summary: string
  @IsNotEmpty()
  @IsString()
  postBody: string;
  @IsString()
  categoryId: string;
  @IsString()
  tagId: string;
  @IsString()
  authorId: string;
}
