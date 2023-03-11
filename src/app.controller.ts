import { Controller, Get, Param, Query } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('nuevo')
  newEndpoint() {
    return 'yo soy nuevo método'
  }

  // @Get('products')
  // getProducts(@Query() params: any) {
  //   const { limit, offset } = params
  //   return `products ${limit}, ${offset}`
  // }
}
