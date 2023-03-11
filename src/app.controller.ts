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

  @Get('products')
  getProducts(
    @Query('limit') limit = 100, //infers the type
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products ${limit}, ${offset}, ${brand}`
  }

  //Always use static routes first and then dynamic routes.
  @Get('products/filter')
  getProductFilter() {
    return `yo soy un filter`
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and category ${id}`
  }
}
