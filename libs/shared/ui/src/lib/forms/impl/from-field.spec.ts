import { FromField } from './from-field';

class MockFormField extends FromField<Date> {}

describe('FromField', () => {
  beforeEach(() => {});
  it('should create an instance', () => {
    expect(new MockFormField()).toBeTruthy();
  });
});
