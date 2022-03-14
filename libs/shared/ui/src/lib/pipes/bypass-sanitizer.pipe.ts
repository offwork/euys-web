import { Pipe, PipeTransform } from '@angular/core';
import {
  DomSanitizer,
  SafeHtml,
  SafeResourceUrl,
  SafeScript,
  SafeStyle,
  SafeUrl,
} from '@angular/platform-browser';

export enum BYPASS_SECURITY {
  HTML = 'html',
  RESOURCE_URL = 'resourceUrl',
  SCRIPT = 'script',
  STYLE = 'style',
  URL = 'url',
}

@Pipe({ name: 'bypassSanitizer' })
export class BypassSanitizerPipe implements PipeTransform {
  constructor(protected domSanitizer: DomSanitizer) {}

  transform(
    value: string,
    type: string
  ): SafeHtml | SafeResourceUrl | SafeScript | SafeStyle | SafeUrl {
    switch (type) {
      case 'html':
        return this.domSanitizer.bypassSecurityTrustHtml(value);
      case 'resourceUrl':
        return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
      case 'script':
        return this.domSanitizer.bypassSecurityTrustScript(value);
      case 'style':
        return this.domSanitizer.bypassSecurityTrustStyle(value);
      case 'url':
        return this.domSanitizer.bypassSecurityTrustUrl(value);
      default:
        throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
}
