import { ArgumentsHost, Catch, ExceptionFilter, NotFoundException } from '@nestjs/common';
import { Response } from 'express';

@Catch(NotFoundException)
export class ErrorFilter<NotFoundException> implements ExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    response
      .status(404)
      .json({
        statusCode: 404,
        message: exception['response']['message'],
        timestamp: new Date().toISOString(),
        path: request.url,
      });
  }
}
