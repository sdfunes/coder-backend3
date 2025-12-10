import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import mocksRouter from './routes/mocks.router.js';
import sessionsRouter from './routes/sessions.router.js';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpecs } from './config/swagger.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/mocks', mocksRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

export default app;
