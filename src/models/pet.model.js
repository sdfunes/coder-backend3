import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
  name: String,
  species: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export const Pet = mongoose.model('Pet', petSchema);
export default Pet;
