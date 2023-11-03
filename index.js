import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import config from './utils/config.js';
import logger from './utils/logger.js';
import Blog from './models/blog.js';

const app = express();

const mongoUrl = config.MONGODB_URI;
mongoose.connect(mongoUrl)
logger.info("Successfully connected to mongoDB");

app.use(cors())
app.use(express.json())

app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

const PORT = config.PORT;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});