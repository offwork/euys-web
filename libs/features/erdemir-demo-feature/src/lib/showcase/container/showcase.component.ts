import { Component } from '@angular/core';

@Component({
  selector: 'euys-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: [``],
})
export class ShowcaseComponent {
  cols: { id: string; header: string }[] = [
    { id: 'id', header: '' },
    { id: 'primary', header: 'Primary' },
    { id: 'secondary', header: 'Secondary' },
    { id: 'outlined', header: 'Outlined' },
    { id: 'text', header: 'Text' },
    { id: 'withIcon', header: 'Icon' },
    { id: 'onay', header: 'Onay' },
    { id: 'red', header: 'Red' },
    { id: 'geri', header: 'Geri' },
  ];
  data: Array<{
    id: string;
    primary: string;
    secondary: string;
    outlined: string;
    text: string;
    withIcon: string;
    onay: string;
    red: string;
    geri: string;
  }> = [
    {
      id: 'enabled',
      primary: 'Primary',
      secondary: 'Secondary',
      outlined: 'Outlined',
      text: 'Text',
      withIcon: 'Icon',
      onay: 'Onay',
      red: 'Red',
      geri: 'Geri',
    },
    {
      id: 'disabled',
      primary: 'Primary',
      secondary: 'Secondary',
      outlined: 'Outlined',
      text: 'Text',
      withIcon: 'Icon',
      onay: 'Onay',
      red: 'Red',
      geri: 'Geri',
    },
  ];
}
