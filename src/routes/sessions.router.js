import { Router } from 'express';
import { login, logout } from '../controllers/sessions.controller.js';
import { authMiddleware } from '../middlewares/auth.js';

const router = Router();

/**
 * @swagger
 * /api/sessions/login:
 *   post:
 *     summary: Iniciar sesión
 *     tags: [Sessions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login exitoso
 */
router.post('/login', login);

/**
 * @swagger
 * /api/sessions/logout:
 *   post:
 *     summary: Cerrar sesión
 *     security:
 *       - bearerAuth: []
 *     tags: [Sessions]
 *     responses:
 *       200:
 *         description: Logout exitoso
 */
router.post('/logout', authMiddleware, logout);

export default router;
