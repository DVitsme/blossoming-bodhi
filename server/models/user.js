import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    picture: {
      type: String
    },
    role: {
      type: [String],
      default: ['Student'],
      enum: ['Student', 'Instructor', 'Admin']
    },
    birthday: {
      type: String
    },
    stripe_account_id: '',
    stripe_seller: {},
    stripeSession: {}
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
