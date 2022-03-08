import { Controller, Post, Put, Get } from '@nestjs/common';

@Controller('api')
export class ActionsController {
  @Get('/Acciones')
  getAcciones() {
    return 'putAcciones';
  }

  @Put('/Acciones')
  putAcciones() {
    return 'putAcciones';
  }

  @Post('/Acciones')
  postAcciones() {
    return 'putAcciones';
  }
}
