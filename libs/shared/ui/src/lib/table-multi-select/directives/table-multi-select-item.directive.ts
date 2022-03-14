import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[euysTableMultiSelectItem]',
})
export class TableMultiSelectItemDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
