import { Router } from 'express';
import { faker } from '@faker-js/faker';
import {
  generateMockUsers,
  generateMockPets,
} from '../services/mocking.service.js';
import { User } from '../models/user.model.js';
import { Pet } from '../models/pet.model.js';

const router = Router();

/**
 * ✅ GET /api/mocks/mockingpets
 * Genera mascotas falsas sin guardarlas
 */
router.get('/mockingpets', (req, res) => {
  try {
    const count = parseInt(req.query.count) || 10;
    const pets = generateMockPets(count);
    res.json({ success: true, pets });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * ✅ GET /api/mocks/mockingusers
 * Genera 50 usuarios con password encriptada ("coder123"), roles variados y pets vacíos
 */
router.get('/mockingusers', async (req, res) => {
  try {
    const users = await generateMockUsers(50);
    res.json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * ✅ POST /api/mocks/generateData
 * Recibe { users, pets } → inserta esos datos en la base Mongo
 */
router.post('/generateData', async (req, res) => {
  try {
    const { users = 0, pets = 0 } = req.body;

    // Generar e insertar usuarios
    const mockUsers = await generateMockUsers(users);
    const insertedUsers = await User.insertMany(mockUsers);

    // Generar e insertar mascotas
    const mockPets = [];
    for (let i = 0; i < pets; i++) {
      const owner = faker.helpers.arrayElement(insertedUsers);
      mockPets.push({
        name: faker.person.firstName(),
        species: faker.animal.type(),
        owner: owner._id,
      });
    }

    const insertedPets = await Pet.insertMany(mockPets);

    res.json({
      success: true,
      insertedUsers: insertedUsers.length,
      insertedPets: insertedPets.length,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
