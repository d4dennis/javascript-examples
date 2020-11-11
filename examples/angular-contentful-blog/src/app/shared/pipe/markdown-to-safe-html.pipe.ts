import { Pipe, PipeTransform } from '@angular/core';
import * as marked from 'marked';

@Pipe({
  name: 'markdownToSafeHtml'
})
export class MarkdownToSafeHtmlPipe implements PipeTransform {

  transform(value) {
    return marked(value);
  }

}
