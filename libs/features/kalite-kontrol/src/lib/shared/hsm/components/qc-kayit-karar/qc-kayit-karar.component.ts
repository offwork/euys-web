import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { PrimeTemplate } from 'primeng/api';

@Component({
  selector: 'euys-qc-kayit-karar',
  templateUrl: './qc-kayit-karar.component.html',
})
export class QcKayitKararComponent implements AfterContentInit {
  @ContentChildren(PrimeTemplate)
  templates: QueryList<PrimeTemplate>;

  topTemplate: TemplateRef<PrimeTemplate>;
  centerLeftTemplate: TemplateRef<PrimeTemplate>;
  centerRightTemplate: TemplateRef<PrimeTemplate>;
  bottomLeftTemplate: TemplateRef<PrimeTemplate>;
  bottomRightTemplate: TemplateRef<PrimeTemplate>;

  ngAfterContentInit(): void {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'top':
          this.topTemplate = item.template;
          break;
        case 'centerLeft':
          this.centerLeftTemplate = item.template;
          break;
        case 'centerRight':
          this.centerRightTemplate = item.template;
          break;
        case 'bottomLeft':
          this.bottomLeftTemplate = item.template;
          break;
        case 'bottomRight':
          this.bottomRightTemplate = item.template;
          break;
        default:
          break;
      }
    });
  }
}
