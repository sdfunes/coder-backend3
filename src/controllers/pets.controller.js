import Pet from '../models/pet.model.js';

export const getPets = async (req, res) => {
  try {
    const pets = await Pet.find()
      .populate('owner', 'first_name last_name email')
      .lean();

    res.json({
      success: true,
      pets,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
