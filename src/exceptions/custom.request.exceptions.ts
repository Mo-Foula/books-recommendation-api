import { HttpException, HttpStatus } from '@nestjs/common'

export class CustomRequestException extends HttpException {
  constructor(message: string, status: HttpStatus | number) {
    super(message, status)
  }
}
