import { Asset, Entry } from 'contentful';

/**
 * This model represents our Blog Post content type in Contentful and
 * the expected response type from their API. Each property
 * in this model corresponds to a "name" of a field in our Blog Post
 * content type.
 */
export interface BlogPost {
  title: string;
  slug: string;
  heroImage: Asset;
  description: string;
  body: string;
  content: string;
  author: Entry<any>;
  publishDate: string;
  tags: Array<string>;
}
