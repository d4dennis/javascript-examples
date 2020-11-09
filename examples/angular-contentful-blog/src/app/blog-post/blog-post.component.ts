import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Entry } from 'contentful';

import { BlogPost } from '../contentful/blog-post';
import { ContentfulApiService } from '../contentful/contentful-api.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent implements OnInit {
  blogPost: Entry<BlogPost>;

  constructor(
    private route: ActivatedRoute,
    private meta: Meta,
    private title: Title,
    private contentfulApiService: ContentfulApiService
  ) {}

  ngOnInit(): void {
    const slug: string = this.route.snapshot.paramMap.get('slug');

    this.contentfulApiService.getBlogPost(slug).then((blogPost) => {
      this.blogPost = blogPost;

      // Set the document title
      this.title.setTitle(blogPost.fields.title);

      // Add meta tags for SEO
      this.meta.addTags([
        {
          name: 'description',
          content: blogPost.fields.description,
        },
        {
          name: 'keywords',
          content: blogPost.fields.tags.join(','),
        },
        {
          name: 'og:image',
          content: blogPost.fields.heroImage.fields.file.url,
        },
      ]);
    });
  }
}
