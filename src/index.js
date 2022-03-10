import express from 'express';
import path from 'path';
import dotEnv from 'dotenv';
import routes from './routes/index';
import './database/mongodb/models';

dotEnv.config({ path: path.join(__dirname, '../.env') });

const PORT = process.env.PORT || 8080;
const app = express();

app.use(
  express.json({
    limit: '50mb',
  }),
);

app.use('/api', routes);

app.get('/health-check', (req, res) => {
  res.status(200).json({
    message: `Battery Smart Service - ${process.env.SERVICE_NAME}`,
  });
});

app.listen(PORT, () => console.log('Express port is running on', PORT));
