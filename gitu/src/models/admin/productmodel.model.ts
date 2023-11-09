import mongoose, { Document, ObjectId, Schema } from 'mongoose'

export interface ProductDocument extends Document {
  title: string
  price: number
  categories: ObjectId[]
  image: string[]
  deleted: boolean

}

const ProductSchema = new Schema<ProductDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    
    categories: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Categoryadd',
      },
    ],

    image: {
        type: [String],
        required: true,
      },


      deleted: {
        type: Boolean,
        default: false, 
    },
 
},
{ timestamps: true });

// Gives an error for now, but might not even be needed in future
// ProductSchema.virtual('reviews', {
//   ref: 'reviewModel',
//   localField: '_id',
//   foreignField: 'productId',
// })

const Product = mongoose.model<ProductDocument>('Product', ProductSchema)
export default Product
