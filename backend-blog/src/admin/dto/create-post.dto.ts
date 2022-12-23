import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsBoolean()
  published: boolean;
  @IsString()
  @IsNotEmpty()
  slug?: string;
  @IsString()
  category?: string;
  @IsString()
  @IsNotEmpty()
  image?: string;
  @IsNotEmpty()
  @IsString()
  postBody: string;
}
