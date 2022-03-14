import { ContentChild, Directive, TemplateRef } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'euys-app-profile-tpl',
})
export class AppProfileDirective {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @ContentChild(TemplateRef) template!: TemplateRef<any>;
}
