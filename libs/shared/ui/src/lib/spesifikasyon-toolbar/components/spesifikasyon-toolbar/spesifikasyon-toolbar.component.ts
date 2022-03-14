import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'euys-spesifikasyon-toolbar',
  templateUrl: './spesifikasyon-toolbar.component.html',
  styleUrls: ['./spesifikasyon-toolbar.component.scss'],
})
export class SpesifikasyonToolbarComponent {
  @Input() title!: string;
  @Input() isFormVisible!: boolean;
  @Input() hideUpdate!: boolean;
  @Input() hideDelete = true;
  @Input() hideAdd!: boolean;
  @Input() isUpdate!: string | boolean | undefined;
  @Input() updateDisabled: boolean | undefined;
  @Input() deleteDisabled: boolean | undefined;
  @Output() addClick = new EventEmitter<MouseEvent>();
  @Output() updateClick = new EventEmitter<MouseEvent>();
  @Output() deleteClick = new EventEmitter<MouseEvent>();
  @Output() goBackClick = new EventEmitter<MouseEvent>();
  @Output() reloadClick = new EventEmitter<MouseEvent>();

  noWrite$ = this.route.data.pipe(map(routeData => Boolean(routeData.noWrite)));

  constructor(private route: ActivatedRoute) {}

  get titleSuffix() {
    return this.isFormVisible ? (this.isUpdate ? 'Güncelleme' : 'Kayıt') : '';
  }
}
