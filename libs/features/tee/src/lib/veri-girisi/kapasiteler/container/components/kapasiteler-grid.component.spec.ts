import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KapasitelerGridInputComponent } from './kapasiteler-grid.component';

describe('SimpleGridInputComponent', () => {
  let component: KapasitelerGridInputComponent;
  let fixture: ComponentFixture<KapasitelerGridInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KapasitelerGridInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KapasitelerGridInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
