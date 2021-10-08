import express, { json } from 'express';
import cors from 'cors';
import { startDB } from './db';
import { Cake } from './models/cakes';
import adminRoute from './routes/admin';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(json());
app.use(cors());

app.use('/admin', adminRoute);

startDB()
  .then(() => {
    console.log('database connected');
    app.listen(PORT, () => {
      console.log('Server started');
    });
  })
  .catch((err) => {
    console.log(err);
  });
