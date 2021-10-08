import { Cake } from '../models/cakes';
import { RouterType } from '../types/RouterType';

export const getIndex: RouterType = async (req, res, next) => {
  const cakes = await Cake.find();
  res.json(cakes);
};
