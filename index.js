import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import config from './utils/config.js';
import logger from './utils/logger.js';
import notesRouter from './controllers/blogs.js';

const app = express();

const mongoUrl = config.MONGODB_URI;
mongoose.connect(mongoUrl)
logger.info("Successfully connected to mongoDB");

app.use(cors())
app.use(express.json())
app.use("/api/blogs", notesRouter);

const PORT = config.PORT;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});