import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'euys-styled-panel',
  templateUrl: './styled-panel.component.html',
  styleUrls: ['./styled-panel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StyledPanelComponent {
  @Input() items: MenuItem[];
  @Input() toggleable = false;

  constructor(private messageService: MessageService) {}
}
