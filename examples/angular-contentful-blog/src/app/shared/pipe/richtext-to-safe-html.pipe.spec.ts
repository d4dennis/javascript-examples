import { RichtextToSafeHtmlPipe } from './richtext-to-safe-html.pipe';

describe('RichtextToSafeHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new RichtextToSafeHtmlPipe();
    expect(pipe).toBeTruthy();
  });
});
