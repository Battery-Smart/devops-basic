import mongoose from 'mongoose';
import dotEnv from 'dotenv';
import configPath from '../config/config';

dotEnv.config();

const env = process.env.NODE_ENV || 'development';
const config = configPath[env];

mongoose
  .connect(config.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Mongo DB Connected');
  })
  .catch((err) => console.log(err));
