import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateProductDTO, UpdateProductDTO } from 'src/dtos/products.dto'
import { Product } from 'src/entities/product.entity'

@Injectable()
export class ProductsService {
  private counterId = 1

  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'foo',
      price: 122,
      stock: 15,
      image: '',
    },
  ]

  findAll() {
    return this.products
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id)
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`)
    }
    return product
  }

  create(payload: CreateProductDTO) {
    this.counterId = this.counterId + 1
    const newProduct = {
      id: this.counterId,
      ...payload,
    }
    this.products.push(newProduct)
    return newProduct
  }

  update(id: number, payload: UpdateProductDTO) {
    const product = this.findOne(id)
    if (product) {
      const index = this.products.findIndex((item) => item.id === id)
      this.products[index] = {
        ...product,
        ...payload,
      }
      return this.products[index]
    }
    return null
  }

  delete(id: number) {
    const product = this.findOne(id)
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`)
    }
    const index = this.products.findIndex((item) => item.id === id)
    this.products.splice(index, 1)
    return product
  }
}
