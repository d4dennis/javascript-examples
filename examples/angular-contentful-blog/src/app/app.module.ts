import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgxContentfulRichTextModule } from 'ngx-contentful-rich-text';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { RichtextToSafeHtmlPipe } from './shared/pipe/richtext-to-safe-html.pipe';
import { MarkdownToSafeHtmlPipe } from './shared/pipe/markdown-to-safe-html.pipe';

@NgModule({
  declarations: [AppComponent, BlogPostListComponent, BlogPostComponent, RichtextToSafeHtmlPipe, MarkdownToSafeHtmlPipe],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    NgxContentfulRichTextModule,
    TransferHttpCacheModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
