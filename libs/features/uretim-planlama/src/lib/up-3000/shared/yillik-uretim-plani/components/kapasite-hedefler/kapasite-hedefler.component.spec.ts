import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KapasiteHedeflerComponent } from './kapasite-hedefler.component';

describe('KapasiteHedeflerComponent', () => {
  let component: KapasiteHedeflerComponent;
  let fixture: ComponentFixture<KapasiteHedeflerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KapasiteHedeflerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KapasiteHedeflerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
