



import mongoose, { Document, Schema } from 'mongoose';

export interface CartDocument extends Document {
//   userId: {
//     type: mongoose.Types.ObjectId;
//     ref: 'userLOGIN';
//   },
//   products: [{
//     productId: {
//       type: mongoose.Types.ObjectId;
//       ref: 'Product',

//       quantity: number
//       //quantity:number;// Add a title property
//     }
//   }],
//   deleted: boolean;
// }


userId: mongoose.Schema.Types.ObjectId;
  products: [
    {
      productId: mongoose.Schema.Types.ObjectId;
      quantity: number;
    }
  ];
 
  
  deleted: boolean;
}


const cartSchema = new Schema<CartDocument>(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'userLOGIN',
      required: true,
    },
    products: [{
      productId: {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    }],
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Cart = mongoose.model<CartDocument>('Cart', cartSchema);

export default Cart;


