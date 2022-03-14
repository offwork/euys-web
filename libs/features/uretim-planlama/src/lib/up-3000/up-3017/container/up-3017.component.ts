import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Up3017Facade } from '../+state/up-3017.facade';

@Component({
  selector: 'euys-up3017',
  templateUrl: './up-3017.component.html',
  styles: [],
})
export class Up3017Component implements OnInit {
  kapasiteRaporGrubuList$ = this.facade.kapasiteRaporGrubuList$;

  kapasiteRaporGrubuForm: FormGroup;

  constructor(private facade: Up3017Facade, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.kapasiteRaporGrubuForm = this.formBuilder.group({
      kapasiteRapor: ['', Validators.required],
      urunGrubu: ['Tümü', Validators.required],
    });
  }

  load() {
    this.facade.load(
      this.kapasiteRaporGrubuForm.value.kapasiteRapor,
      this.kapasiteRaporGrubuForm.value.urunGrubu
    );
  }
}
