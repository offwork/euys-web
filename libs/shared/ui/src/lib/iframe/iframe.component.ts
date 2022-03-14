import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'euys-iframe-ui',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss'],
})
export class IFrameComponent {
  constructor(private domSanitizer: DomSanitizer) {}

  @Input() url: string;

  sanitizer(): SafeUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
