import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YaglamaSpesifikasyonFormComponent } from './yaglama-spesifikasyon-form.component';

describe('YaglamaSpesifikasyonFormComponent', () => {
  let component: YaglamaSpesifikasyonFormComponent;
  let fixture: ComponentFixture<YaglamaSpesifikasyonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YaglamaSpesifikasyonFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YaglamaSpesifikasyonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
