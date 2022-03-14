import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlighter',
})
export class HighlighterPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, ...args: string[]): SafeHtml {
    if (!args || (args && args[0] === '')) {
      return value;
    }

    const re = new RegExp(args[0], 'gi');
    const match = value.match(re);

    if (!match) {
      return value;
    }
    const result = value.replace(re, '<mark>' + match[0] + '</mark>');
    return this.sanitizer.bypassSecurityTrustHtml(result);
  }
}
