import { Router } from 'express';
import { getIndex } from '../controller/admin';

const adminRoute = Router();

adminRoute.get('/', getIndex);
// adminRoute.get('/', (req, res, next) => {});

export default adminRoute;
