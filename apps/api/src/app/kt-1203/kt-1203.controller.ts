import { SckHad2IkmalSicaklik } from '@euys/api-interfaces';
import { Body, Controller, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { Kt1203Service } from './kt-1203.service';

@Controller('ana-tablolar')
export class Kt1203Controller {
  constructor(private readonly service: Kt1203Service) {}

  @Post('hsm2-ikmal-sicakliklar')
  @HttpCode(201)
  createEntity(@Body() body: SckHad2IkmalSicaklik) {
    this.service.createEntity(body);
  }

  @Put('hsm2-ikmal-sicakliklar/:id/:etag')
  @HttpCode(201)
  updateEntity(@Param('id') id: string, @Param('etag') etag: string, @Body() body: SckHad2IkmalSicaklik) {
    this.service.updateEntity(body);
  }

  @Get('hsm2-ikmal-sicakliklar')
  findAllTargets() {
    return this.service.fetchAllEntities();
  }
}
