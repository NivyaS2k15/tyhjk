import mongoose, { Document, Schema } from 'mongoose';

export interface OrderDocument extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  products: [
    {
      productId: mongoose.Schema.Types.ObjectId;
      quantity: number;
    }
  ];
 
  deleted: boolean;
}

const cartSchema = new Schema<OrderDocument>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'userLOGIN', // Reference to UserModel
      required: true,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product', // 
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
 
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const Order = mongoose.model<OrderDocument>('Order', cartSchema);

export default Order;
