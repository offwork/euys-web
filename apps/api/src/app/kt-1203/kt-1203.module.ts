import { Module } from '@nestjs/common';
import { Kt1203Controller } from './kt-1203.controller';
import { Kt1203Service } from './kt-1203.service';

@Module({
  controllers: [Kt1203Controller],
  providers: [Kt1203Service],
})
export class Kt1203Module {}
