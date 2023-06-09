import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common'

import { ProductsService } from 'src/services/products.service'
import { ParseIntPipe as ParseIntPipelin } from 'src/common/parse-int/parse-int.pipe'
import { CreateProductDTO, UpdateProductDTO } from 'src/dtos/products.dto'

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getByBrand(
    @Query('limit') limit = 100, //infers the type
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productsService.findAll()
  }

  //Always use static routes first and then dynamic routes.
  @Get('filter')
  getFilter() {
    return `yo soy un filter`
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId)
  }

  @Post()
  create(@Body() payload: CreateProductDTO) {
    return this.productsService.create(payload)
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipelin) id: number,
    @Body() payload: UpdateProductDTO,
  ) {
    return this.productsService.update(id, payload)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsService.delete(+id)
  }
}
