export default interface PostSummary {
	id: string;
  title: string;
  summary: string;
  createdAt: Date;
  image: string;
  slug: string;
}

export default interface Post {
  id: string;
  title: string;
  postBody: string;
  createdAt: Date;
  image: string;
  tagId: string;
  categoryId: string;
  published:boolean;
}