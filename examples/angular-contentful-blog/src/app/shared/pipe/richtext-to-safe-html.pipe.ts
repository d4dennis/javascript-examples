import { Pipe, PipeTransform } from '@angular/core';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

@Pipe({
  name: 'richtextToSafeHtml'
})
export class RichtextToSafeHtmlPipe implements PipeTransform {

  transform(value) {

    /*
    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ENTRY]: (node) => `<custom-component>${customComponentRenderer(node)}</custom-component>`
      }
    };
    */

    return documentToHtmlString(value);
  }

}
