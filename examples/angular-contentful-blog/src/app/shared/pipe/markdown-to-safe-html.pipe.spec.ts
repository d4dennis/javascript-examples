import { MarkdownToSafeHtmlPipe } from './markdown-to-safe-html.pipe';

describe('MarkdownToSafeHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new MarkdownToSafeHtmlPipe();
    expect(pipe).toBeTruthy();
  });
});
