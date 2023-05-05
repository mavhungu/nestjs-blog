export interface blogPost {
  id: string;
  title: string;
  postBody: string;
  createdAt: Date;
  image: string;
  tagId: string;
  categoryId: string;
  published:boolean;
}