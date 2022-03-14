import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'euys-buttons-showcase',
  templateUrl: './buttons-showcase.component.html',
  styleUrls: ['./buttons-showcase.component.scss']
})
export class ButtonsShowcaseComponent implements OnInit {
  cols: {id: string, header: string}[] = [
    {id: 'id', header: ''},
    {id: 'primary', header:'Primary'},
    {id: 'secondary', header:'Secondary'},
    {id: 'outlined', header: 'Outlined'},
    {id: 'text', header: 'Text'},
    {id: 'withIcon', header: 'Icon'},
    {id: 'onay', header: 'Onay'},
    {id: 'red', header: 'Red'},
    {id: 'geri', header: 'Geri'},
    {id: 'ileri', header: 'İleri'}
  ];
  data: any[] = [
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
      ileri: 'İleri'
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
      ileri: 'İleri'
    }
  ];

  selectButtonData = [
    { id: 'enabled', disabled: false},
    { id: 'disabled', disabled: true}
  ];

  selectOptions = [
    {
      label: 'Opsiyon 1',
      value: 1,
      disabled: false
    },
    {
      label: 'Opsiyon 2 (disabled)',
      value: 2,
      disabled: true
    },
    {
      label: 'Opsiyon 3',
      value: 3,
      disabled: false
    }
  ];
  selectedOption: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
