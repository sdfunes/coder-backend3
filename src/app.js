import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import mocksRouter from './routes/mocks.router.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api/mocks', mocksRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en puerto ${PORT}`);
});

connectDB();

export default app;
