import { NgModule } from '@angular/core';
import { EuysButtonModule } from './button/button.module';
import { EuysInputtextModule } from './inputtext/inputtext.module';

@NgModule({
  exports: [EuysButtonModule, EuysInputtextModule],
})
export class SharedEuysDesignModule {}
