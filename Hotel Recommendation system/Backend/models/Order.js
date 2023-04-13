import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    _id: {
    type: String,
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Order", OrderSchema)