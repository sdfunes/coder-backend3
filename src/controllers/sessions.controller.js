import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { updateLastConnection } from '../services/users.service.js';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid)
      return res.status(401).json({ error: 'Credenciales inválidas' });

    await updateLastConnection(user._id);

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      success: true,
      message: 'Inicio de sesión exitoso',
      token,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    const userId = req.user.id;

    await updateLastConnection(userId);

    res.json({
      success: true,
      message: 'Cierre de sesión exitoso',
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
