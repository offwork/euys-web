import { ContentChild, Directive, TemplateRef } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'euys-app-header-tpl',
})
export class AppHeaderDirective {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @ContentChild(TemplateRef) template!: TemplateRef<any>;
}
