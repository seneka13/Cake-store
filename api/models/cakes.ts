import mongoose from 'mongoose';

export interface Product {
  title: string;
  price: number;
  imgUrl: string;
}

const CakeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

export const Cake = mongoose.model<Product>('Cake', CakeSchema);
