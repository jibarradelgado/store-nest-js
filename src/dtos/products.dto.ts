export class CreateProductDTO {
  readonly name: string
  readonly description: string
  readonly price: number
  readonly stock: number
  readonly image: string
}

export class UpdateProductDTO {
  readonly name?: string
  readonly description?: string
  readonly price?: number
  readonly stock?: number
  readonly image?: string
}
