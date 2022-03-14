import { NgModule } from '@angular/core';
import { BypassSanitizerPipe } from './bypass-sanitizer.pipe';
import { EuysEnumPipe } from './euys-enum.pipe';
import { CloneArrayPipe } from './clone-array.pipe';

@NgModule({
  declarations: [BypassSanitizerPipe, EuysEnumPipe, CloneArrayPipe],
  exports: [BypassSanitizerPipe, EuysEnumPipe, CloneArrayPipe],
})
export class PipesModule {}
