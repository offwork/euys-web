import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

export enum KindsOfButton {
  'Primary' = 'p-button-primary',
  'Secondary' = 'p-button-secondary',
  'Success' = 'p-button-success',
  'Info' = 'p-button-info',
  'Warning' = 'p-button-warning',
  'Help' = 'p-button-help',
  'Danger' = 'p-button-danger',
}

@Component({
  selector: 'euys-button',
  templateUrl: './button.component.html',
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  /**
   * Input `label` of ***ButtonComponent*** \
   * `<button>` da görüntülenecek ismi temsil eder
   *
   * @type {string}
   * @memberof ButtonComponent
   */
  @Input() label = 'Click';
  /**
   * Input `disabled` of ***ButtonComponent*** \
   * `<button>` nun kullanımını engeller
   *
   * @type {boolean}
   * @memberof ButtonComponent
   */
  @Input() disabled = false;
  /**
   * Input `rounded`  of ***ButtonComponent*** \
   * `<button>` nun kenarlarına oval bir görünüm verir
   *
   * @type {boolean}
   * @memberof ButtonComponent
   */
  @Input() rounded = false;
  @Input() outlined = false;
  @Input() type = 'Primary';
  @Input() link: string;
  @Input() icon: string;
  @Input() iconPos: string;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  buttonType = KindsOfButton[this.type];

  ngOnInit() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.buttonType = KindsOfButton[this.type];
  }
}
