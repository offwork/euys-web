import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'euys-column-action-button',
  templateUrl: './column-action-button.component.html',
  styleUrls: ['./column-action-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ColumnActionButtonComponent implements OnInit {
  @Input() isReady: boolean;
  @Input() icon = 'pi pi-table';
  @Input() xlIcon = false;
  @Input() success = false;
  @Input() danger = false;
  @Input() disabled = false;
  @Input() dataMismatch = false;
  @Input() badgeIcon = false;
  @Output() columnActionEmitter = new EventEmitter<MouseEvent>(null);

  @HostBinding('class.xl-icon') get isXlIcon() {
    return this.xlIcon;
  }

  @HostBinding('class.success') get isSuccess() {
    return this.success;
  }

  @HostBinding('class.danger') get isDanger() {
    return this.danger;
  }

  @HostBinding('class.disabled') get isDisabled() {
    return this.disabled;
  }

  @HostBinding('class.data-mismatch') get isDataMismatch() {
    return this.dataMismatch;
  }

  @HostBinding('class.badge-icon') get isBadgeIcon() {
    return this.badgeIcon;
  }

  expandColumnData($mouseEvent: MouseEvent) {
    this.columnActionEmitter.emit($mouseEvent);
  }

  ngOnInit() {
    if (this.badgeIcon) this.disabled = true;
  }
}
