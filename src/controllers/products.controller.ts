import { Controller, Get, Param, Query } from '@nestjs/common'

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100, //infers the type
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products ${limit}, ${offset}, ${brand}`
  }
  //Always use static routes first and then dynamic routes.
  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`
  }
}
