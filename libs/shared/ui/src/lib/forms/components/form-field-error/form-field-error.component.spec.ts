import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { FormFieldErrorComponent } from './form-field-error.component';

describe('FormFieldErrorComponent', () => {
  let spectator: Spectator<FormFieldErrorComponent>;
  const createComponent = createComponentFactory(FormFieldErrorComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
