import { Router } from 'express';
import {
  mockingPets,
  mockingUsers,
  generateData,
} from '../controllers/mocks.controller.js';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     MockUser:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         first_name:
 *           type: string
 *         last_name:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         role:
 *           type: string
 *           enum: [user, admin]
 *         pets:
 *           type: array
 *           items:
 *             type: string
 *         documents:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               reference:
 *                 type: string
 *         last_connection:
 *           type: string
 *           format: date-time
 *
 *     MockPet:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         name:
 *           type: string
 *         species:
 *           type: string
 *         owner:
 *           type: string
 */

/**
 * @swagger
 * /api/mocks/mockingpets:
 *   get:
 *     summary: Genera mascotas mock sin guardarlas en la base de datos
 *     tags: [Mocking]
 *     parameters:
 *       - in: query
 *         name: count
 *         schema:
 *           type: integer
 *         description: Cantidad de mascotas a generar (default 10)
 *     responses:
 *       200:
 *         description: Lista de mascotas generadas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 pets:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/MockPet"
 *       500:
 *         description: Error interno
 */

router.get('/mockingpets', mockingPets);
/**
 * @swagger
 * /api/mocks/mockingusers:
 *   get:
 *     summary: Genera 50 usuarios mock sin guardarlos en la base de datos
 *     tags: [Mocking]
 *     responses:
 *       200:
 *         description: Lista de usuarios generados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 users:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/MockUser"
 *       500:
 *         description: Error interno
 */

router.get('/mockingusers', mockingUsers);
/**
 * @swagger
 * /api/mocks/generateData:
 *   post:
 *     summary: Genera usuarios y mascotas mock, y los inserta en la base de datos
 *     tags: [Mocking]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               users:
 *                 type: integer
 *                 description: Cantidad de usuarios a generar
 *               pets:
 *                 type: integer
 *                 description: Cantidad de mascotas a generar
 *             example:
 *               users: 5
 *               pets: 10
 *     responses:
 *       200:
 *         description: Datos generados exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 insertedUsers:
 *                   type: integer
 *                 insertedPets:
 *                   type: integer
 *       500:
 *         description: Error interno
 */

router.post('/generateData', generateData);

export default router;
