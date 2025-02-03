import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { customer } from './customer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,customer],
}
