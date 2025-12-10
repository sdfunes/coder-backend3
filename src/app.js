import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import mocksRouter from './routes/mocks.router.js';
import sessionsRouter from './routes/sessions.router.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/mocks', mocksRouter);
app.use('/api/sessions', sessionsRouter);

export default app;
