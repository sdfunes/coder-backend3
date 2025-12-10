import User from '../models/user.model.js';

export const updateLastConnection = async (userId) => {
  await User.findByIdAndUpdate(userId, {
    last_connection: new Date(),
  });
};
