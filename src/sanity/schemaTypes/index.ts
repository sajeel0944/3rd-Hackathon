import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { customer } from './customer'
import { comment } from './comment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,customer,comment],
}
