import { IsNotEmpty, IsString } from "class-validator"

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsNotEmpty()
  image: string

  @IsNotEmpty()
  @IsString()
  postBody: string
}