import User from '../models/user.model.js';

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().lean();

    res.json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
