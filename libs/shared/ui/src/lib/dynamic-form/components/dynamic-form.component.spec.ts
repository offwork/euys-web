import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { DynamicFormComponent } from './dynamic-form.component';

describe('DynamicFormComponent', () => {
  let spectator: Spectator<DynamicFormComponent>;
  const createComponent = createComponentFactory(DynamicFormComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
