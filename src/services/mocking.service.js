import { faker } from '@faker-js/faker';
import { hashPassword } from '../utils/encrypt.js';

export const generateMockUsers = async (quantity = 50) => {
  const users = [];
  const encryptedPassword = await hashPassword('coder123'); // todos con "coder123"

  for (let i = 0; i < quantity; i++) {
    users.push({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password: encryptedPassword,
      role: faker.helpers.arrayElement(['user', 'admin']),
      pets: [],
    });
  }

  return users;
};

export const generateMockPets = (quantity = 10) => {
  const pets = [];

  for (let i = 0; i < quantity; i++) {
    pets.push({
      name: faker.animal.name(),
      species: faker.animal.type(),
    });
  }

  return pets;
};
