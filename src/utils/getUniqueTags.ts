import { slugifyStr } from "./slugify";
import postFilter from "./postFilter";

interface Tag {
  tag: string;
  tagName: string;
}

// Accept posts from any collection (blog, project, ...)
const getUniqueTags = (posts: any[]) => {
  const tags: Tag[] = posts
    .filter(postFilter)
    .flatMap((post: any) => post.data?.tags ?? [])
    .map(tag => ({ tag: slugifyStr(tag), tagName: tag }))
    .filter(
      (value, index, self) =>
        self.findIndex(tag => tag.tag === value.tag) === index
    )
    .sort((tagA, tagB) => tagA.tag.localeCompare(tagB.tag));
  return tags;
};

export default getUniqueTags;
