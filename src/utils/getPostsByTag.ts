import getSortedPosts from "./getSortedPosts";
import { slugifyAll } from "./slugify";

const getPostsByTag = (posts: any[], tag: string) =>
  getSortedPosts(
    posts.filter((post: any) => slugifyAll(post.data?.tags ?? []).includes(tag))
  );

export default getPostsByTag;
