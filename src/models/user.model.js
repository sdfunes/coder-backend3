import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },
  pets: { type: Array, default: [] },

  documents: [
    {
      name: { type: String, required: true },
      reference: { type: String, required: true },
    },
  ],

  last_connection: { type: Date, default: null },
});

const User = mongoose.model('User', userSchema);

export default User;
