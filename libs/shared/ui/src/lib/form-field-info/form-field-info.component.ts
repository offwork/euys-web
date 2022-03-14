import { Component, Input } from '@angular/core';

@Component({
  selector: 'euys-form-field-info',
  templateUrl: './form-field-info.component.html',
  styleUrls: ['./form-field-info.component.scss'],
})
export class FormFieldInfoComponent {
  @Input() inputHelperControl: any;
  @Input() helperText: string;
}
