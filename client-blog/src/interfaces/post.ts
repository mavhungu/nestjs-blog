export interface PostSummary {
	id: string;
  title: string;
  summary: string;
  createdAt: Date;
  image: string;
  slug: string;
}

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
