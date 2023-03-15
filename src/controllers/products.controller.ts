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
  Res,
} from '@nestjs/common'

import { Response } from 'express'

@Controller('products')
export class ProductsController {
  @Get()
  getByBrand(
    @Query('limit') limit = 100, //infers the type
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `limit: ${limit}, offset: ${offset}, brand: ${brand}`,
    }
  }

  //Always use static routes first and then dynamic routes.
  @Get('filter')
  getFilter() {
    return `yo soy un filter`
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Res() response: Response, @Param('productId') productId: string) {
    response.status(200).send({
      message: `${productId}`,
    })
    // return {
    //   message: `${productId}`,
    // }
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'create action',
      payload,
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return {
      id,
      payload,
    }
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return id
  }
}
