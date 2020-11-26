import { Body, Controller, Get, HttpCode, Param, Post, Response } from '@nestjs/common';
import { Response as ExpressResponse } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  
  // @Get('/api/hello/:name')
  // getHello(@Param('name') name = '') {
  //   return {msg: 'Hello ' + name};
  // }

  // @Get('/api/hello')
  // getHello(@Response() res: ExpressResponse) {
  //   res.status(202).json({msg: 'Hello'});
  // }

  // @HttpCode(201)
  // @Post('/api/users')
  // createUser(@Body() body) {
  //   body.id = 123;
  //   return body;
  // }
}
