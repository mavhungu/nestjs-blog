export interface FormValues {
  title: string;
  image: string;
  summary: string;
  postBody: string;
  slug: string;
  categoryId: string;
  tagId: string;
  published: boolean | string | undefined;
  authorId: string;
}